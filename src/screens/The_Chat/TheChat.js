import React, { useState, useCallback, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/stack';
import { GiftedChat } from 'react-native-gifted-chat'
import style from './style'
import { Button, View } from 'react-native';
import BubbleMessage from './components/Bubble_Message/BubbleMessage';
import SendButton from './components/ButtonSend/SendButton'
import ScrollToBottom from './components/ScrollToBottom/ScrollToBottom'
import Loading from '../Loading/Loading'
import 'dayjs/locale/pt-br'
import { messageListener, sendMessage, sendMessageWithImage, sendMessageWithVideo } from '../../firebase/chat';
import User from '../../model/user';
import { useSelector } from 'react-redux';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { color1 } from '../../global/constant/constant';
import ImagePicker from 'react-native-image-picker'

export default TheChat = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const receiver: User = route.params['receiver']
    const [messages, setMessages] = useState([]);
    const [image, setImage] = useState(null) // coloque o caminho da imagem neste estado
    const [video, setVideo] = useState(null) // coloque o caminho do video neste estado
    const [inputText, setInputText] = useState("")
    const user: User = useSelector(state => state.userState.user)


    useEffect(() => {
        navigation.setOptions({
            // Quando clicar em voltar, coloca novamente o bottomBar
            title: receiver.name,
            headerLeft: (props) => (
                < HeaderBackButton
                    tintColor={color1}
                    onPress={() => {
                        navigation.setOptions({
                            tabBarVisible: true
                        }),
                            navigation.goBack()
                    }}
                />)

        })
    }, [])

    useEffect(() => {
        return messageListener(user.id, receiver.id, (message: FirebaseFirestoreTypes.QuerySnapshot) => {
            if (message) {
                setMessages(message.docs.map(snapshot => {
                    let data = snapshot.data()
                    data['createdAt'] = data['createdAt']._seconds * 1000
                    return data
                }).sort((a, b) => a['createdAt'] - b['createdAt']).reverse())
            }
        })
    }, [])

    const onSend = useCallback((messages = [], video, image) => {
        if (video && image) {
            // tentando mandar video e imagem juntos
            return
        }
        if (video) {
            sendMessageWithVideo(user, receiver, messages, video).then(() => {
                console.info("mensagem com video enviada com sucesso")
                setVideo(null)
            })
            return
        }
        console.debug(image)
        if (image) {
            sendMessageWithImage(user, receiver, messages, image).then(() => {
                //@TODO tentar não permitir o usuario de manda outra mensagem
                console.info("mensagem com foto enviada com sucesso")
                setImage(null)
            })
            return
        }
        sendMessage(user, receiver, messages)
        console.info("message enviada com sucesso")
    }, [])

    return (
        <View style={style.container}>
            <Button color={video ? 'green' : null} onPress={() => {
                ImagePicker.showImagePicker({
                    mediaType: 'video'
                }, (response) => {
                    if (response.didCancel) {
                        return
                    }
                    if (response.error) {
                        return
                    }
                    setVideo(response.path)
                    setImage(null)
                    console.debug("video carregado com sucesso")
                })
            }} title="teste video"></Button>
            <Button color={image ? 'green' : null} onPress={() => {
                ImagePicker.showImagePicker({
                    mediaType: 'photo'
                }, (response) => {
                    if (response.didCancel) {
                        return
                    }
                    if (response.error) {
                        return
                    }
                    setImage(response.path)
                    setVideo(null)
                    console.debug("imagem coletada com sucesso")
                })
            }} title="teste image"></Button>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages, video, image)}

                user={{
                    _id: user.id, name: user.name
                }}
                placeholder={'Digite uma mensagem...'}
                renderBubble={BubbleMessage}
                renderSend={SendButton}
                textInputStyle={style.input}
                alwaysShowSend
                text={image && !inputText.length > 0 ? ' ' : inputText}
                onInputTextChanged={(text) => {
                    setInputText(text)
                }}
                scrollToBottom
                scrollToBottomComponent={ScrollToBottom}
                renderLoading={Loading}
                locale={'pt-br'}
                showUserAvatar={true}
            />
        </View>
    )
}
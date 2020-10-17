import React, { useState, useCallback, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/stack';
import { GiftedChat } from 'react-native-gifted-chat'
import style from './style'
import { View } from 'react-native';
import BubbleMessage from './components/Bubble_Message/BubbleMessage';
import SendButton from './components/ButtonSend/SendButton'
import ScrollToBottom from './components/ScrollToBottom/ScrollToBottom'
import Loading from '../Loading/Loading'
import 'dayjs/locale/pt-br'
import { messageListener, sendMessage } from '../../firebase/chat';
import User from '../../model/user';
import { useSelector } from 'react-redux';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export default TheChat = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const receiver: User = route.params['receiver']
    const [messages, setMessages] = useState([]);
    const user: User = useSelector(state => state.userState.user)


    useEffect(() => {
        navigation.setOptions({
            // Quando clicar em voltar, coloca novamente o bottomBar
            headerLeft: (props) => (
                < HeaderBackButton
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

    const onSend = useCallback((messages = []) => {
        sendMessage(user, receiver, messages)
    }, [])

    return (
        <View style={style.container}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: user.id, name: user.name
                }}
                placeholder={'Digite uma mensagem...'}
                renderBubble={BubbleMessage}
                renderSend={SendButton}
                textInputStyle={style.input}
                alwaysShowSend
                scrollToBottom
                scrollToBottomComponent={ScrollToBottom}
                renderLoading={Loading}
                locale={'pt-br'}
                showUserAvatar={true}
            />
        </View>
    )
}
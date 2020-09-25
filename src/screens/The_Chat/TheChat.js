import { useNavigation } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/stack';
import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import style from './style'
import { View } from 'react-native';
import BubbleMessage from './components/Bubble_Message/BubbleMessage';
import SendButton from './components/ButtonSend/SendButton'
import ScrollToBottom from './components/ScrollToBottom/ScrollToBottom'
import Loading from '../Loading/Loading'
import 'dayjs/locale/pt-br'

export default TheChat = () => {
    const navigation = useNavigation()
    const [messages, setMessages] = useState([]);

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
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (
        <View style={style.container}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1, name: 'Teste ATeste'
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
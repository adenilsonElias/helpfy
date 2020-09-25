import React from 'react'
import { Send } from 'react-native-gifted-chat'
import { color1 } from '../../../../global/constant/constant'
import Icon from 'react-native-vector-icons/Feather'
import style from './style'
import { View } from 'react-native'

export default SendButton = (props) => {
    return (
        <Send {...props} containerStyle={style.container}>
            <View style={style.containerButton}>
                <Icon name={'send'} size={30} color={color1} />
            </View>
        </Send>
    )
}
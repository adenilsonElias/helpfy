import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'
import { color1 } from '../../../../global/constant/constant'
import style from './style'
import TheAvatar from '../../../../global/components/Avatar/The_Avatar'
import Icon from 'react-native-vector-icons/Feather'

export default AddComments = () => {
    const [message, setMessage] = useState('')

    return (
        <View style={style.container}>
            <View style={style.avatarContainer}>
                <TheAvatar size={'small'} />
            </View>
            <TextInput style={style.input}
                autoFocus={true}
                placeholder={'Adicione um comentário...'}
                placeholderTextColor={color1}
                keyboardType='email-address'
                underlineColorAndroid='transparent'
                onChangeText={(value) => {setMessage(value)}}/>
            <TouchableOpacity style={style.sendButton}
                onPress={() => {}}>
                <Icon name={'send'} size={26} color={color1} />
            </TouchableOpacity>
        </View>
    )
}
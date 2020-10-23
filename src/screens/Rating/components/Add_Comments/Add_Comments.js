import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'
import { color1 } from '../../../../global/constant/constant'
import style from './style'
import TheAvatar from '../../../../global/components/Avatar/The_Avatar'
import Icon from 'react-native-vector-icons/Feather'
import User from '../../../../model/user'
import Comentario from '../../../../model/comments'
import { useSelector } from 'react-redux'
import { createCommentProfile } from '../../../../firebase/comentarios'

type Props = {
    user : User
}

export default AddComments = ({user} : Props) => {
    const [message, setMessage] = useState('')
    const userLogged: User = useSelector(state => state.userState.user)


    function handleCreateComment(){
        let comentario = new Comentario()
        comentario.message = message
        comentario.creatorId = userLogged.id
        comentario.timeCreated = Date.now()
        comentario.depth = 0
        createCommentProfile(comentario,user).then(()=>{
            console.info("Comentario de perfil criado com sucesso")
        })
    }

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
                onPress={handleCreateComment}>
                <Icon name={'send'} size={26} color={color1} />
            </TouchableOpacity>
        </View>
    )
}
import React, { useEffect, useContext } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import style from './style'
import { adicionarComentarios } from '../../../../firebase/Post'
import Comentario from '../../../../model/comments'
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/Feather'
import { color1 } from '../../../../global/constant/constant'
import AuthContext from '../../../../context/auth_context'


export default AddComment = ({ parameter }) => {
    const auth = useContext(AuthContext)
    const user: User = useSelector(state => state.userState.user)

    function handleCreateComment() {
        const newCommnent = new Comentario({
            message: parameter.message,
            author: user.name,
            creatorId: user.id,
            depth: 0,
            timeCreated: Date.now(),
            response: []
        })
        adicionarComentarios(newCommnent, parameter.post).then(() => {
            console.log("Comentario criado com sucesso")
        })
    }

    const logged = auth.isLogged ?
        <View style={style.container}>
            <TextInput onChangeText={(e) => parameter.setMessage(e)}
                style={style.input}
                placeholderTextColor={color1}
                placeholder="Adicione um comentário..." />
            <TouchableOpacity
                style={style.sendButton}
                onPress={handleCreateComment}>
                <Icon name={'send'} size={26} color={color1}/>
            </TouchableOpacity>
        </View> : null

    return (
        <View>
            { logged }
        </View>
    )
}
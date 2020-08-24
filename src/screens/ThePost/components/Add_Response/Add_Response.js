import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import Comentario from '../../../../model/comments'
import { responderComentarios } from '../../../../firebase/Post'
import style from './style'
import Icon from 'react-native-vector-icons/Feather'
import { color1 } from '../../../../global/constant/constant'

export default AddResponse = ({ comentario, user, post, parameter }) => {
    const [response, setResponse] = useState("")

    function handleCreateResponse(comment: Comentario) {        
        const newCommnent = new Comentario({
            message: response,
            author: user.name,
            creatorId: user.id,
            depth: comentario.depth + 1,
            timeCreated: Date.now(),
            response: []
        })
        comentario.response.push(newCommnent);
        responderComentarios(post.IdPost, comment).then(() => console.log("Resposta feita com sucesso"))
    }

    return (
        <View style={style.container}>
            <TouchableOpacity onPress={() => parameter.showComment()}
                style={style.buttons}>
                <Icon name={'x'} size={26} color={color1}/>
            </TouchableOpacity>
            <TextInput style={style.input}
                placeholder="Responder comentário..."
                placeholderTextColor={color1}
                onChangeText={(text) => setResponse(text)}
            />
            <TouchableOpacity onPress={() => handleCreateResponse(comentario)}
                style={style.buttons}>
                <Icon name={'send'} size={26} color={color1}/>
            </TouchableOpacity>
        </View>
    )
}
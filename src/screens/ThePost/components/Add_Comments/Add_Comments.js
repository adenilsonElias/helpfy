import React, { useState, useEffect } from 'react'
import { Overlay } from "react-native-elements";
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import style from './style'
import { color1 } from '../../../../global/constant/constant';
import Icon from 'react-native-vector-icons/Feather'
import TheAvatar from '../../../../global/components/Avatar/The_Avatar'
import { adicionarComentarios, responderComentarios } from '../../../../firebase/comentarios';
import Comentario from '../../../../model/comments';
import { useSelector } from 'react-redux';

export default AddComments = ({ visible, toggleOverlay, typeComment, setTypeComment,
    parameter, comentario, post }) => {
    const [response, setResponse] = useState("")    
    const user: User = useSelector(state => state.userState.user)

    const thePlaceHolderText = typeComment == 'comment' ? 'Adicione um comentário...' :
        'Adicione uma resposta...'

    useEffect(() => {
        console.log('Comentario aqui', comentario)
    }, [])

    function handleCreateComment() {
        const newCommnent = new Comentario({
            message: parameter.message,
            author: user.name,
            creatorId: user.id,
            depth: 0,
            timeCreated: Date.now(),
            response: []
        })
        console.log(typeComment)
        adicionarComentarios(newCommnent, parameter.post).then(() => {
            console.log("Comentario criado com sucesso")
        })
    }

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
        console.log(typeComment)
        responderComentarios(post, comment).then(() => console.info("Resposta feita com sucesso"))
    }    

    return (
        <Overlay isVisible={visible} onBackdropPress={toggleOverlay}
            overlayStyle={style.container}>
            <View style={style.inputContainer}>
                <View style={style.avatarContainer}>
                    <TheAvatar size={'small'} />
                </View>
                <TextInput style={style.input}
                    autoFocus={true}
                    placeholder={thePlaceHolderText}
                    placeholderTextColor={color1}
                    keyboardType='email-address'
                    underlineColorAndroid='transparent'
                    onChangeText={(e) => {
                        if (typeComment == 'comment') {
                            parameter.setMessage(e)
                        } else {
                            setResponse(e)
                        }
                    }} />
                <TouchableOpacity
                    style={style.sendButton}
                    onPress={() => {
                        if (typeComment == 'comment') {
                            handleCreateComment()
                        } else {
                            handleCreateResponse(comentario)
                        }
                        toggleOverlay()                        
                    }}>
                    <Icon name={'send'} size={26} color={color1} />
                </TouchableOpacity>
            </View>
        </Overlay>
    )
}
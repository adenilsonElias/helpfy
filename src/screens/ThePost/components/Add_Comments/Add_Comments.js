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
import Firestore from '@react-native-firebase/firestore';


export default AddComments = ({ visible, toggleOverlay, typeComment, update, setUpdate,
    parameter, comentario, post }) => {
    const [response, setResponse] = useState("")
    const user: User = useSelector(state => state.userState.user)

    const thePlaceHolderText = typeComment == 'comment' ? 'Adicione um comentário...' :
        'Adicione uma resposta...'

    function handleCreateComment() {
        const newCommnent = new Comentario({
            message: parameter.message,
            creatorId: user.id,
            depth: 0,
            timeCreated: Date.now(),
            response: []
        })        
        adicionarComentarios(newCommnent, post).then(() => {
            console.info("Comentario criado com sucesso")
            //gatilho para atualizar comentario na tela
            setUpdate(!update)
        })
    }

    // @TODO tentar remover o Firestore() daqui
    function handleCreateResponse(comment: Comentario) {
        const newCommnent = new Comentario({
            message: response,
            authorRef : Firestore().collection('User').doc(user.id),
            creatorId: user.id,
            depth: comentario.depth + 1,
            timeCreated: Date.now(),
            response: []
        })
        comentario.response.push(newCommnent);
        responderComentarios(post, comment).then(() => console.info("Resposta feita com sucesso"))
    }

    return (
        <Overlay isVisible={visible} onBackdropPress={() => toggleOverlay()}
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
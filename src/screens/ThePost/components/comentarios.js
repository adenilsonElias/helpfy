import React, { useState } from 'react'
import { View, Text } from 'react-native'

import style from './style'
import { TouchableOpacity, FlatList, TextInput } from 'react-native-gesture-handler'
import Comentario from '../../../model/comments'
import { responderComentarios } from '../../../firebase/Post'

const  ComentarioComponent = ({ post, index,responseField, setResponseField , user , comentario }) => {
    const [response, setResponse] = useState("")


    function handleCreateResponse(comment: Comentario) {
        console.log(comentario.depth)
        const newCommnent = new Comentario({
            message: response,
            author: user.name,
            creatorId: user.id,
            depth: comentario.depth + 1,
            timeCreated: Date.now(),
            response: []
        })
        comentario.response.push(newCommnent);
        responderComentarios(post, comment).then(() => console.log("resposta feita com sucesso"))
    }

    return (
        <View style={style.comentarioContainer}>
            <View style={style.messageBody}>
                <Text style={style.authorNameStyle}>
                    {comentario.author}
                </Text>
                <Text style={style.textStyle}>
                    {comentario.message}
                </Text>
                <View>
                    <FlatList
                        data={comentario.response}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <View style={[style.resposesComment, {marginLeft : item.depth * 5}]}>
                                    <Text>{item.message}</Text>
                                </View>
                            )
                        }}
                    />
                </View>
            </View>
            <View>
                <TouchableOpacity onPress={() => setResponseField(index)} style={style.responseButton}>
                    <Text>Responder este comentario</Text>
                </TouchableOpacity>
                {
                    responseField == index ?
                        <View>
                            <TextInput
                                placeholder="Escreva uma resposta para esse comentario"
                                onChangeText={(text) => setResponse(text)}
                            />
                            <TouchableOpacity onPress={() => handleCreateResponse(comentario)}>
                                <Text>Responder</Text>
                            </TouchableOpacity>
                        </View>
                        : null
                }
            </View>
        </View>
    )
}

export default ComentarioComponent
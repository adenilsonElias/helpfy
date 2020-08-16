import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, Image, ScrollView } from 'react-native'
import style from './style'
import Buttons from './Buttons/Buttons'
import { useNavigation, useRoute } from '@react-navigation/native'
import Post from '../../model/post_model'
import { color1, color2, styleTitle } from '../../global/constant/constant'
import { TextInput, TouchableOpacity, FlatList } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import User from '../../model/user'
import { adicionarComentarios } from '../../firebase/Post'
import Comentario from '../../model/comments'

const ThePost = () => {

    const user: User = useSelector(state => state.userState.user)

    const post: Post = useRoute().params.post;
    const { setOptions } = useNavigation();
    const [message, setMessage] = useState("");
    const [comentarios, setComentarios] = useState([])

    useEffect(() => {
        setOptions({

            title: post.title,
            headerStyle: {
                backgroundColor: color1,
            },
            headerTintColor: color2,
            headerTitleAlign: 'center',
            headerTitleStyle: styleTitle,

        })
        post.getComments().then(value => setComentarios(value))
    }, [])

    function handleCreateComment() {
        const newCommnent = new Comentario({
            message: message,
            author: user.name,
            creatorId: user.id,
            depth: 0,
            timeCreated: Date.now(),
            response: []
        })
        adicionarComentarios(post.IdPost, newCommnent).then(() => {
            console.log("Comentario criado com sucesso")
        })
    }

    console.log(post)

    return (
        <SafeAreaView style={style.container}>
            <ScrollView>
                <Image source={{ uri: post.image }}
                    style={style.image} />
                <View style={style.descriptionContainer}>
                    <Text style={style.descriptionText}>{post.description}</Text>
                </View>
                <Buttons />
                <View style={style.commentContainer}>
                    <Text style={style.descriptionText}>Testando Comentario</Text>
                    <View style={style.addComent}>
                        <TextInput onChangeText={(e) => setMessage(e)} placeholder="Faça um comentario sobre o item"></TextInput>
                        <TouchableOpacity
                            style={style.sendButton}
                            onPress={handleCreateComment}
                        >
                            <Text>Enviar</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
            <View style={style.CommentsListContainer}>
                <FlatList
                    data={comentarios}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <View style={style.comentario}>
                                <View>
                                    <Text>
                                        {item.message}
                                    </Text>
                                    <Text>
                                        {item.author}
                                    </Text>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export const title = 'Titulo'

export default ThePost
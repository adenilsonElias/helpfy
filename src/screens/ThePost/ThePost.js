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
import Comentario from '../../model/comments'
import ComentarioComponent from './components/comentarios'
import { adicionarComentarios, getComentarios } from '../../firebase/comentarios'
import { addLike, getPost, isLiked, removeLike } from '../../firebase/Post'

const ThePost = () => {

    const user: User = useSelector(state => state.userState.user)

    const postParam: Post = useRoute().params.post;
    const [post, setPost] = useState(postParam)
    const { setOptions } = useNavigation();
    const [message, setMessage] = useState("");
    const [comentarios, setComentarios] = useState([])
    const [responseField, setResponseField] = useState(-1)
    const [notLiked, setNotLiked] = useState(true)

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
        getComentarios(post.IdPost).then(value => setComentarios(value))

    }, [])

    useEffect(() => {
        isLiked(post, user.id).then((value) => {
            setNotLiked(value)
        })
    }, [post])

    function handleCreateComment() {
        const newCommnent = new Comentario({
            message: message,
            author: user.name,
            creatorId: user.id,
            depth: 0,
            timeCreated: Date.now(),
            response: []
        })
        adicionarComentarios(newCommnent, post).then(() => {
            console.info("Comentario criado com sucesso")
        })
    }

    function handleLikes() {
        if (notLiked) {
            addLike(post, user.id).then(() => {
                getPost(post.IdPost).then((value) => {
                    setPost(value)
                    console.info('Post atualizado com sucesso')
                })
            })
        } else {
            removeLike(post, user.id).then(() => {
                getPost(post.IdPost).then((value) => {
                    setPost(value)
                    console.info('Post atualizado com sucesso')
                })
            })
        }
    }
    return (
        <SafeAreaView style={style.container}>
            <TouchableOpacity onPress={handleLikes}>
                <Text>
                    {notLiked ? "Teste Like" : "Teste Deslike"}
                </Text>
            </TouchableOpacity>
            <ScrollView nestedScrollEnabled={true}>
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
                <FlatList
                    data={comentarios}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) => {
                        return (
                            <ComentarioComponent
                                comentario={item}
                                post={post}
                                index={index}
                                user={user}
                                setResponseField={setResponseField}
                                responseField={responseField}
                            />
                        )
                    }}
                />
            </ScrollView>
            <View style={style.CommentsListContainer}>
            </View>
        </SafeAreaView>
    )
}

export const title = 'Titulo'

export default ThePost
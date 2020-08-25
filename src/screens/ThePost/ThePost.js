import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, Image, ScrollView } from 'react-native'
import style from './style'
import Buttons from './components/Buttons/Buttons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { color1, color2, styleTitle } from '../../global/constant/constant'
import { TextInput, TouchableOpacity, FlatList } from 'react-native-gesture-handler'
import Post from '../../model/post_model'
import AddComment from './components/Add_Comment/Add_Comment'
import Comments from './components/Comments/Comments'
import { SliderBox } from "react-native-image-slider-box";
import { useSelector } from 'react-redux'
import User from '../../model/user'
import Comentario from '../../model/comments'
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
    const [renderInput, setRenderInput] = useState(true)
    const parameter = {
        message,
        setMessage,
        comentarios,
        setComentarios,
        post,
        renderInput,
        setRenderInput,
        showComment
    }
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

    function showComment() {
        if (renderInput) {
            setRenderInput(false)
        } else {
            setRenderInput(true)
        }
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

    const conditionRenderInput = renderInput ?
        <AddComment parameter={parameter} /> : null

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
                <Text style={style.title}>Comentários</Text>
                { comentarios.length ? comentarios.map((item, index) => {
                    return (
                        <Comments
                            key={item.id}
                            comentario={item}
                            post={post}
                            index={index}
                            user={user}
                            setResponseField={setResponseField}
                            responseField={responseField}
                            parameter={parameter}
                        />
                    )
                }) : null }
                {conditionRenderInput}
            </ScrollView>
        </SafeAreaView>
    )
}

export const title = 'Titulo'

export default ThePost
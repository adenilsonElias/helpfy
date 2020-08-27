import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import style from './style'
import Buttons from './components/Buttons/Buttons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { color1, color2, styleTitle } from '../../global/constant/constant'
import Post from '../../model/post_model'
import Comments from './components/Comments/Comments'
import { SliderBox } from "react-native-image-slider-box";
import { useSelector } from 'react-redux'
import User from '../../model/user'
import Comentario from '../../model/comments'
import { adicionarComentarios, getComentarios } from '../../firebase/comentarios'
import { addLike, getPost, isLiked, removeLike } from '../../firebase/Post'
import The_Avatar from '../../global/components/Avatar/The_Avatar'
import Add_Comments from './components/Add_Comments/Add_Comments'

const ThePost = () => {
    const user: User = useSelector(state => state.userState.user)
    const postParam: Post = useRoute().params.post;
    const [post, setPost] = useState(postParam)
    const { setOptions } = useNavigation();
    const [message, setMessage] = useState("");
    const [comentarios, setComentarios] = useState([])
    const [responseField, setResponseField] = useState(-1)
    const [notLiked, setNotLiked] = useState(true)
    const [visible, setVisible] = useState(false)
    const [typeComment, setTypeComment] = useState('')
    const parameter = {
        message,
        setMessage,
        comentarios,
        setComentarios,
        post,
        setTypeComment,
    }

    // Quando overlay ativado, renderiza input para comentario ou resposta
    const toggleOverlay = (type: String = '') => {
        setVisible(!visible)        
        setTypeComment(type)
    }

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
        console.debug('Get Comentarios')
    }, [])

    useEffect(() => {
        isLiked(post, user.id).then((value) => {
            setNotLiked(value)
        })
        console.debug('Vamos ver se cai aqui depois de responder')
    }, [post])

    // useEffect(() => {
    //     console.log('**********')
    //     console.log(typeComment)
    //     console.log(visible)
    //     console.log('==========')
    // }, [typeComment, visible])

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
            <ScrollView nestedScrollEnabled={true} keyboardShouldPersistTaps={"always"}>
                <Image source={{ uri: post.image }}
                    style={style.image} />
                <View style={style.descriptionContainer}>
                    <Text style={style.descriptionText}>{post.description}</Text>
                </View>
                <Buttons />
                <Text style={style.comentariosTitle}>Comentários</Text>
                {/* Overlay do Comentario */}
                <TouchableOpacity style={style.containerAddComentario}
                    onPress={() => {
                        toggleOverlay('comment')                        
                    }}>
                    <The_Avatar size={'medium'} />
                    <Text style={style.addComentarioText}>Adicione um comentário...</Text>
                </TouchableOpacity>
                <Add_Comments visible={visible} toggleOverlay={toggleOverlay} 
                    typeComment={typeComment} setTypeComment={setTypeComment} 
                    parameter={parameter} post={post}/>
                {comentarios.length ? comentarios.map((item, index) => {
                    return (
                        <View key={item.id}>
                            <Comments
                                comentario={item}                                
                                index={index}
                                setResponseField={setResponseField}
                                toggleOverlay={toggleOverlay}
                            />
                            {
                                responseField == index ?
                                    // Overlay da resposta
                                    <Add_Comments visible={visible} toggleOverlay={toggleOverlay}
                                        typeComment={typeComment} comentario={item}
                                        parameter={parameter} post={post} />
                                    : null
                            }
                        </View>
                    )
                }) : null}                
            </ScrollView>
        </SafeAreaView>
    )
}

export const title = 'Titulo'

export default ThePost
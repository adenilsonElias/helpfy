import React, { useEffect, useState, useContext } from 'react'
import { SafeAreaView, View, Text, Image, ScrollView, TouchableOpacity, Button } from 'react-native'
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
import AuthContext from '../../context/auth_context'
import Filter from './components/Filter/Filter'
import PreviewImages from './components/PreviewImages/PreviewImages'
import Icon from 'react-native-vector-icons/Feather';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'

const ThePost = () => {
    const navigation = useNavigation()
    const auth = useContext(AuthContext)
    const user: User = useSelector(state => state.userState.user)
    const postParam: Post = useRoute().params.post;
    const [post, setPost] = useState(postParam)
    const { setOptions } = useNavigation();
    const [message, setMessage] = useState("");
    const [comentarios, setComentarios] = useState([])
    const [update, setUpdate] = useState(false)
    const [responseField, setResponseField] = useState(-1)
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
                backgroundColor: color2,
            },
            headerTintColor: color1,
            headerTitleAlign: 'center',
            headerTitleStyle: styleTitle,
            headerRight: () => (
                <TouchableOpacity style={style.editTouch}
                    onPress={() => { navigation.navigate('EditPost') }}>
                    <Icon name={'edit'} size={25} color={color1} />
                </TouchableOpacity>
            )
        })

    }, [])

    useEffect(() => {
        console.info("UseEfect do listener chamado com sucesso")
        const sub = post.listener((documentSnapshot: FirebaseFirestoreTypes.DocumentSnapshot) => {
            console.info("listener chamado com sucesso")
            setPost(new Post(documentSnapshot.data()));
        })
        return () => sub()
    }, [])

    useEffect(() => {
        // @TODO adicionar butao de ordenacao

        // getComentarios(post.IdPost, 'desc').then(value => setComentarios(value))
    }, [update])

    const renderAddComment = auth.isLogged && !visible ?
        <TouchableOpacity style={style.containerAddComentario}
            onPress={() => {
                toggleOverlay('comment')
            }}>
            <The_Avatar size={'medium'} />
            <Text style={style.addComentarioText}>Adicione um comentário...</Text>
        </TouchableOpacity> : null

    return (
        <SafeAreaView style={style.container}>
            <ScrollView nestedScrollEnabled={true} keyboardShouldPersistTaps={"always"}>
                {/* <Image source={{ uri: post.image[0] }}
                    style={style.image} /> */}
                <PreviewImages image={post.image} />
                <View style={style.descriptionContainer}>
                    <Text style={style.descriptionText}>{post.description}</Text>
                </View>
                <Buttons post={post} setPost={setPost} />
                <View style={style.comentarioTitleContainer}>
                    <Text style={style.comentariosTitle}>Comentários</Text>
                    <Filter post={post} setComentarios={setComentarios} />
                </View>
                {renderAddComment}
                {/* Overlay de Comentario */}
                <Add_Comments visible={visible} toggleOverlay={toggleOverlay}
                    typeComment={typeComment} setTypeComment={setTypeComment}
                    setUpdate={setUpdate} update={update}
                    parameter={parameter} post={post} />
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
                                        typeComment={typeComment} comentario={item} setUpdate={setUpdate}
                                        update={update} parameter={parameter} post={post} />
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
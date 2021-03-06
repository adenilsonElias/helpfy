import React, { useEffect, useState, useContext, useCallback } from 'react'
import { SafeAreaView, View, Text, Image, ScrollView, TouchableOpacity, Button } from 'react-native'
import style from './style'
import Buttons from './components/Buttons/Buttons'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'
import { color1, color2, styleTitle } from '../../global/constant/constant'
import Post from '../../model/post_model'
import Comments from './components/Comments/Comments'
import { SliderBox } from "react-native-image-slider-box";
import { useDispatch, useSelector } from 'react-redux'
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
import Description from './components/Description/Description'
import { setLoading } from '../../store/actions/loading'
import { setBottomBar } from '../../store/actions/loading'
import Animations from './components/Animation/Animations'

// @TODO - corrigir warning Non-serializable values were found in the navigation state. Check:
// Tela Inicial > Home > ThePost > params.post.donatario._firestore._app._deleteApp (Function)

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
    const [author, setAuthor] = useState(null)
    const loading = useSelector(state => state.loadingState.loading)
    const [donationAnimation, setDonationAnimation] = useState(false)
    const dispatch = useDispatch()
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

    useFocusEffect(
        useCallback(() => {
            navigation.setOptions({       
                title: '',
                // headerStyle: {
                //     backgroundColor: color2,
                // },
                // headerTitleStyle: styleTitle,
                headerShown: !loading,
                headerTintColor: color1,
                headerTitleAlign: 'center',
                // headerTitle: () => {
                //     return(
                //         <Text style={style.titleHeader} adjustsFontSizeToFit={true} 
                //             allowFontScaling={true}>{post.title}</Text>
                //     )
                // },
                headerRight: () => {
                    if (user && user.id == post.authorRef.id) {
                        return (
                            <TouchableOpacity style={style.editTouch}
                                onPress={() => { navigation.navigate('AddPost', { post: post }) }}>
                                <Icon name={'edit'} size={25} color={color1} />
                            </TouchableOpacity>
                        )
                    }
                }
            })
            dispatch(setBottomBar(false))
        }, [loading])
    )

    useEffect(() => {
        navigation.setOptions({
            headerShown: !donationAnimation,
        })
    }, [donationAnimation])

    useEffect(() => {
        dispatch(setLoading(true))
        const sub = post.listener((documentSnapshot: FirebaseFirestoreTypes.DocumentSnapshot) => {
            if(!documentSnapshot.exists){
                navigation.goBack();
            }
            console.info("listener chamado com sucesso")
            setPost(new Post({ ...documentSnapshot.data(), IdPost: documentSnapshot.id }));
            dispatch(setLoading(false))
        })
        return () => sub()
    }, [])

    useEffect(() => {
        dispatch(setLoading(true))
        getComentarios(post.IdPost, 'desc').then(value => {
            setComentarios(value)
            dispatch(setLoading(false))
        })
    }, [update])

    useEffect(() => {
        dispatch(setLoading(true))
        post.getUser().then((user) => {
            setAuthor(user)
            dispatch(setLoading(false))
        })
    }, [])

    if(donationAnimation){
        return(
            <Animations />
        )
    }

    if(loading){
        return(
            <Loading />
        )
    }

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
            <ScrollView nestedScrollEnabled={true} keyboardShouldPersistTaps={"always"}
                showsVerticalScrollIndicator={false}>
                <PreviewImages image={post.image} />
                <Description post={post} author={author}/>
                <Buttons post={post} setPost={setPost} setDonationAnimation={setDonationAnimation}/>
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
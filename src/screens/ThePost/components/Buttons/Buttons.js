import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../../../context/auth_context'
import { TouchableOpacity, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import style from './style';
import { useSelector } from 'react-redux';
import { isLiked, addLike, removeLike, getPost } from '../../../../firebase/Post';
import { color4, color1, color2 } from '../../../../global/constant/constant';
import { addIWant, removeIWant, isWanted } from '../../../../firebase/eu_quero';
import { useNavigation } from '@react-navigation/native';
import Post from '../../../../model/post_model';

const Buttons = ({ post, setPost }) => {
    const auth = useContext(AuthContext)
    const [notLiked, setNotLiked] = useState(true)
    const [notWant, setNotWant] = useState(true);
    const [loadingLike, setLoadingLike] = useState(true)
    const [loadingWant, setLoadingWant] = useState(true)
    const colorLike = notLiked ? color4 : color1
    const user: User = useSelector(state => state.userState.user)
    const navigation = useNavigation()

    useEffect(() => {
        setLoadingLike(false)
        setLoadingWant(false)
    }, [])

    useEffect(() => {
        if (auth.isLogged) {
            isLiked(post, user.id).then((value) => {
                setNotLiked(value)
            })
            isWanted(post, user.id).then((value) => {
                setNotWant(value)
            })
        }
    }, [post])

    function handleWants() {
        setLoadingWant(true)
        if (notWant) {
            addIWant(post, user.id).then(() => {
                getPost(post.IdPost).then((value) => {
                    setPost(value)
                    console.info('Post adicionado ao eu quero com sucesso')
                    setLoadingWant(false)
                })
            })
        } else {
            removeIWant(post, user.id).then(() => {
                getPost(post.IdPost).then((value) => {
                    setPost(value)
                    console.info('Post removido dos eu quero com sucesso')
                    setLoadingWant(false)
                })
            })
        }
    }

    function handleLikes() {
        setLoadingLike(true)
        if (notLiked) {
            addLike(post, user.id).then(() => {
                getPost(post.IdPost).then((value) => {
                    setPost(value)
                    console.info('Post atualizado com sucesso')
                    setLoadingLike(false)
                })
            })
        } else {
            removeLike(post, user.id).then(() => {
                getPost(post.IdPost).then((value) => {
                    setPost(value)
                    console.info('Post atualizado com sucesso')
                    setLoadingLike(false)
                })
            })
        }
    }

    function handlePostStatus() {
        switch (post.donationStatus) {
            case 1:
                return <Text>Post em estado 1</Text>
            case 2:
        return <Text>Post em estado 2 {post.donatarioId}</Text>
            case 3:
                return <Text>Post em estado 3</Text>
            case 4:
                return <Text>Post em estado 4</Text>
            default:
                return <Text>Post sem estado</Text>
        }
    }

    const buttom = user && post.userId == user.id ?
        <View style={style.container}>
            {
                post.donationStatus == 1 ? <TouchableOpacity style={style.buttonList}
                onPress={() => navigation.navigate('ListChoosedPeople', {
                    post: post
                })}>
                <Text style={style.buttonText}>Lista de Pessoas</Text>
            </TouchableOpacity>
            : 
            <Text>{post.donatarioRef}{post.donatarioId}</Text>
            } 
        </View> :
        <View style={[style.container, style.container2]}>
            <TouchableOpacity onPress={handleLikes}
                disabled={loadingLike} >
                <Icon name={'heart'} size={40} color={colorLike} />
            </TouchableOpacity>
            <TouchableOpacity style={[style.wantButton, { backgroundColor: notWant ? color2 : color1 }]}
                onPress={handleWants} disabled={loadingWant}>
                <Text style={[style.buttonText, { color: notWant ? color1 : color2 }]}>Eu quero</Text>
            </TouchableOpacity>
        </View>

    const isLogged = auth.isLogged ? buttom : null

    return (
        <View>
            {handlePostStatus()}
            {isLogged}
        </View>
    )
}

export default Buttons
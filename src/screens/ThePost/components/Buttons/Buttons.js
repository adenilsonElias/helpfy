import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../../../context/auth_context'
import { TouchableOpacity, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import style from './style';
import { useSelector } from 'react-redux';
import { isLiked, addLike, removeLike, getPost } from '../../../../firebase/Post';
import { color4, color1 } from '../../../../global/constant/constant';

const Buttons = ({ post, setPost }) => {
    const auth = useContext(AuthContext)
    const user: User = useSelector(state => state.userState.user)
    const [notLiked, setNotLiked] = useState(true)
    const [loading, setLoading] = useState(false)
    const wantOrNoText = auth.isLogged ? 'Eu não quero!' : 'Eu quero!'
    const colorLike = notLiked ? color4 : color1
    
    useEffect(() => {
        isLiked(post, user.id).then((value) => {
            setNotLiked(value)
        })
    }, [post])

    const toggleLoading = () => {
        setLoading(!loading)
    }

    function handleLikes() {
        toggleLoading()
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
        toggleLoading()
    }

    const buttom = post.userId == user.id ?
        <View style={style.container}>
            <TouchableOpacity style={style.buttonList}
                onPress={()=>{}}>
                <Text style={style.buttonText}>Lista de Pessoas</Text>
            </TouchableOpacity>
        </View> :
        <View style={[style.container, style.container2]}>
            <TouchableOpacity onPress={handleLikes}
                disabled={loading} >
                <Icon name={'heart'} size={40} color={colorLike} />
            </TouchableOpacity>
            <TouchableOpacity style={style.wantButton}
                onPress={()=>{}}>
                <Text style={style.buttonText}>{wantOrNoText}</Text>
            </TouchableOpacity>
        </View>

    const isLogged = auth.isLogged ? buttom : null
    
    return(
        <View>
            { isLogged }
        </View>
    )
}

export default Buttons
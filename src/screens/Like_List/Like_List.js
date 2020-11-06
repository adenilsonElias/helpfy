import React, { useContext, useEffect, useState, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Header from '../../global/components/Header/Header'
import style from './style'
import PostList from '../../global/components/Post_List/Post_List'
import { View, FlatList } from 'react-native';
import { getPostListLike, removeLike } from '../../firebase/Post';
import User from '../../model/user';
import { useSelector } from 'react-redux';
import Loading from '../Loading/Loading'

export default LikeList = () => {
    const [posts, setPost] = useState([])
    const [updateScreen, setUpdateScreen] = useState(false);
    const user: User = useSelector(state => state.userState.user)
    const navigation = useNavigation()
    const [loading, setLoading] = useState(false)

    useFocusEffect(
        useCallback(() => {
            setLoading(true)
            async function getPostsLiked() {
                setPost(await getPostListLike(user.id))
                setLoading(false)
            }
            getPostsLiked().then(() => {
                console.info("Posts coletados com sucesso")
            })
        }, [updateScreen])
    )

    function handleUnlike(post : Post){
        removeLike(post, user.id).then(() => {
            setUpdateScreen(!updateScreen)
            console.info('Like Removido com sucesso')
        })
    }

    if(loading){
        return(
            <Loading />
        )
    }

    return (
        <View style={style.container}>
            <Header title={'Lista de Curtidas'} icon={'thumbs-up'} />
            <FlatList
                data={posts}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => `${item.IdPost}`}
                // Padding com mesmo valor do margins container do PostList
                style={{ paddingVertical: 5 }}
                ListFooterComponent={ <View style={{ height: 10 }}/>}
                renderItem={({ item }) => {
                    return (
                        <PostList post={item} action={handleUnlike}/>
                    )
                }}
            />
        </View>
    )
}
import React, { useContext, useEffect, useState, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Header from '../../global/components/Header/Header'
import style from './style'
import PostList from '../../global/components/Post_List/Post_List'
import { View, FlatList } from 'react-native';
import { getPostListLike, removeLike } from '../../firebase/Post';
import User from '../../model/user';
import { useSelector } from 'react-redux';

export default LikeList = () => {
    const [posts, setPost] = useState([])
    const [updateScreen, setUpdateScreen] = useState(false);
    const user: User = useSelector(state => state.userState.user)
    const navigation = useNavigation()

    useFocusEffect(
        useCallback(() => {
            async function getPostsLiked() {
                setPost(await getPostListLike(user.id))
            }
            getPostsLiked().then(() => {
                console.info("Posts coletados com sucesso")
            })
        }, [updateScreen])
    )

    return (
        <View style={style.container}>
            <Header title={'Lista de Curtidas'} icon={'thumbs-up'} />
            <FlatList
                data={posts}
                keyExtractor={item => `${item.IdPost}`}
                // Padding com mesmo valor do margins container do PostList
                style={{ paddingTop: 10 }}
                renderItem={({ item }) => {
                    return (
                        <PostList post={item} updateScreen={updateScreen} setUpdateScreen={setUpdateScreen} />
                    )
                }}
            />
        </View>
    )
}
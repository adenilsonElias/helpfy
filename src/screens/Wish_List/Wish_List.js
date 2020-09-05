import React, { useState, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Header from '../../global/components/Header/Header'
import style from './style'
import PostList from '../../global/components/Post_List/Post_List'
import { View, FlatList } from 'react-native';
import User from '../../model/user';
import { useSelector } from 'react-redux';
import { getPostListWant, removeIWant } from '../../firebase/eu_quero';

export default WishList = () => {
    const navigation = useNavigation()

    const [posts , setPosts] = useState([])
    const [updateScreen, setUpdateScreen] = useState(false);
    const user: User = useSelector(state => state.userState.user)

    
    useFocusEffect(
        useCallback(() => {
            async function getPostsWanted() {
                setPosts(await getPostListWant(user.id))
            }
            getPostsWanted().then(() => {
                console.info("Posts coletados com sucesso")
            })
        }, [updateScreen])
    )

    function handleNaoQuero(post : Post){
        removeIWant(post, user.id).then(() => {
            setUpdateScreen(!updateScreen)
            console.info('Like Removido com sucesso')
        })
    }

    return (
        <View style={style.container}>
            <Header title={'Lista de Desejos'} icon={'bookmark'}/>
            <FlatList
                data={posts}
                keyExtractor={item => `${item.IdPost}`}
                // Padding com mesmo valor do margins container do PostList
                style={{ paddingTop: 10 }}
                renderItem={({ item }) => {
                    return (
                        <PostList post={item} action={handleNaoQuero}/>
                    )
                }}
            />
        </View>
    )
}
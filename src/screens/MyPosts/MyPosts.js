import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import style from './style'
import PostList from '../../global/components/Post_List/Post_List'
import { View, FlatList } from 'react-native';
import Post from '../../model/post_model'
import { getPostList } from '../../firebase/Post';
import { useSelector } from 'react-redux';
import User from '../../model/user';

export default MyPosts = () => {

    const navigation = useNavigation()
    const route = useRoute()
    const [updateScreen, setUpdateScreen] = useState(false);
    const user: User = route.params && route.params.user ? route.params.user : useSelector(state => state.userState.user)

    const [posts, setPosts] = useState()

    useFocusEffect(
        useCallback(() => {
            async function getPostsUser() {
                setPosts(await getPostList({ userId: user.id }))
            }
            getPostsUser().then(() => {
                console.info("Posts coletados com sucesso")
            })
        }, [updateScreen])
    )

    return (
        <View style={style.container}>
            <FlatList
                data={posts}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => `${item.postId}`}
                // Padding com mesmo valor do margins container do PostList
                style={{ paddingTop: 10 }}
                renderItem={({ item }) => {
                    return (
                        <PostList post={item} />
                    )
                }}
            />
        </View>
    )
}
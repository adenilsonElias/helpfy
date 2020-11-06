import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import style from './style'
import PostList from '../../global/components/Post_List/Post_List'
import { View, FlatList } from 'react-native';
import Post from '../../model/post_model'
import { getPostList } from '../../firebase/Post';
import { useSelector } from 'react-redux';
import User from '../../model/user';
import Loading from '../Loading/Loading'

export default MyPosts = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const [updateScreen, setUpdateScreen] = useState(false);
    const user: User = route.params && route.params.user ? route.params.user : useSelector(state => state.userState.user)
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState()

    useFocusEffect(
        useCallback(() => {
            setLoading(true)
            async function getPostsUser() {
                setPosts(await getPostList({ userId: user.id }))
                setLoading(false)
            }
            getPostsUser().then(() => {
                console.info("Posts coletados com sucesso")
            })
        }, [updateScreen])        
    )

    if(loading){
        return(
            <Loading />
        )
    }
    
    return (
        <View style={style.container}>
            <FlatList
                data={posts}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => `${item.IdPost}`}
                // Padding com mesmo valor do margins container do PostList
                style={{ paddingVertical: 5 }}
                ListFooterComponent={ <View style={{ height: 10 }}/>}
                renderItem={({ item }) => {
                    return (
                        <PostList post={item} isMyPosts={true}/>
                    )
                }}
            />
        </View>
    )
}
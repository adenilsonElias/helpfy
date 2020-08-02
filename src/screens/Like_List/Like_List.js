import React, { useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../../global/components/Header/Header'
import style from './style'
import PostList from '../../global/components/Post_List/Post_List'
import { View, FlatList } from 'react-native';
import Post from '../../model/post_model'

export default LikeList = () => {
    const navigation = useNavigation()

    const posts = [
        new Post({
            title: 'teste',
            author: 'teste',
            image: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            comments: 'teste',
            description: 'teste',
            postId: 1,
            emailPost: 'teste',
            timePost: 'teste',
            userId: 1,
            postDonated: 'teste',
        }),
        new Post({
            title: 'teste',
            author: 'teste',
            image: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            comments: 'teste',
            description: 'teste',
            postId: 2,
            emailPost: 'teste',
            timePost: 'teste',
            userId: 1,
            postDonated: 'teste',
        }),
        new Post({
            title: 'teste',
            author: 'teste',
            image: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            comments: 'teste',
            description: 'teste',
            postId: 3,
            emailPost: 'teste',
            timePost: 'teste',
            userId: 1,
            postDonated: 'teste',
        }),
        new Post({
            title: 'teste',
            author: 'teste',
            image: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            comments: 'teste',
            description: 'teste',
            postId: 4,
            emailPost: 'teste',
            timePost: 'teste',
            userId: 1,
            postDonated: 'teste',
        }),
        new Post({
            title: 'teste',
            author: 'teste',
            image: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            comments: 'teste',
            description: 'teste',
            postId: 5,
            emailPost: 'teste',
            timePost: 'teste',
            userId: 1,
            postDonated: 'teste',
        }),
        new Post({
            title: 'teste',
            author: 'teste',
            image: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            comments: 'teste',
            description: 'teste',
            postId: 6,
            emailPost: 'teste',
            timePost: 'teste',
            userId: 1,
            postDonated: 'teste',
        }),
        new Post({
            title: 'teste',
            author: 'teste',
            image: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            comments: 'teste',
            description: 'teste',
            postId: 7,
            emailPost: 'teste',
            timePost: 'teste',
            userId: 1,
            postDonated: 'teste',
        }),
        new Post({
            title: 'teste',
            author: 'teste',
            image: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            comments: 'teste',
            description: 'teste',
            postId: 8,
            emailPost: 'teste',
            timePost: 'teste',
            userId: 1,
            postDonated: 'teste',
        }),
        new Post({
            title: 'teste',
            author: 'teste',
            image: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            comments: 'teste',
            description: 'teste',
            postId: 9,
            emailPost: 'teste',
            timePost: 'teste',
            userId: 1,
            postDonated: 'teste',
        }),
    ]

    return (
        <View style={style.container}>
            <Header title={'Lista de Curtidas'} icon={'thumbs-up'}/>
            <FlatList
                data={posts}
                keyExtractor={item => `${item.postId}`}
                // Padding com mesmo valor do margins container do PostList
                style={{ paddingTop: 10 }}
                renderItem={({ item }) => {
                    return (
                        <PostList post={item}/>
                    )
                }}
            />
        </View>
    )
}
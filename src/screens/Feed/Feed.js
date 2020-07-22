import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import style from './style';
import { SliderBox } from "react-native-image-slider-box";
import Header from './components/Header/Header';
import Post from '../../model/post_model';
import PostList from './components/Post_List/Post_List';

export default Feed = () => {

    const images = [
        "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    ]

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

    ]

    return (
        <View style={style.container}>
            <Header />
            <View style={style.containerBody}>
                <ScrollView>
                    <SliderBox images={images} />
                    <Text style={style.title}>Destaques</Text>
                    <PostList postList={posts} />
                    <Text style={style.title}>Recentes</Text>
                    <PostList postList={posts} />
                    <Text style={style.title}>Comentados</Text>
                    <PostList postList={posts} />
                </ScrollView>
            </View>
        </View>
    )
}

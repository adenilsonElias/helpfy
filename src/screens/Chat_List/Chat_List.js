import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native'
import { createPost, getPost, getPostList } from '../../firebase/Post';
import Post from '../../model/post_model';

export default Chat_List = () => {
    const mocPost = new Post({
        title: 'teste',
        author: 'teste',
        image: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        comments: 'teste',
        description: 'teste',
        emailPost: 'teste',
        timePost: 'teste',
        userId: 1,
        postDonated: 'teste',
    })
    return(
        <View>
            <Button title="save" onPress={() => getPost("YxXHvgI1SaoYPHSPxaO8").then(value => console.log(value))}>
            </Button>
        </View>
    )
}
import React from 'react';
import {
    View,
    Button,
} from 'react-native'
import Post from '../../model/post_model';
import User from '../../model/user';
import { createPost, getPostList, getPost, editPost, deletePost } from '../../firebase/Post';

export default Chat_List = () => {
    const mocPost = new Post({
        title: 'teste32',
        author: 'teste1',
        image: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        comments: 'teste',
        description: 'teste',
        emailPost: 'teste',
        timePost: 'teste',
        userId: 1,
        postDonated: 'teste',
    })

    return (
        <View>
            <Button title="getAllPost" onPress={() => { 
                getPostList(null,{limit: 1}).then((value) =>{
                    console.log(value)
                })
             }}></Button>
            <Button title="getOnePost" onPress={() => {
                getPost('WStOADkSYZyPHsJqnBDB').then((value)=>{
                    console.log(value)
                })
            }}></Button>
            <Button title="createPost" onPress={() => { 
                createPost(mocPost).then(() =>{
                    console.log("sucesso")
                })
            }}></Button>
            <Button title="EditPost" onPress={() => {
                getPost('WStOADkSYZyPHsJqnBDB').then((value)=>{
                    value.title = "Fui editado"
                    editPost(value).then(() =>{
                        console.log("editado com sucesso")
                    })
                })
            }}></Button>
            <Button title="DeletePost" onPress={() => {
                deletePost('hUyN7gwkURzoif0nIj6O').then(()=>{
                    console.log("deletado com sucesso")
                })
            }}></Button>
        </View>
    )
}
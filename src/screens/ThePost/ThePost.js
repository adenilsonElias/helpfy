import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, Image, ScrollView } from 'react-native'
import style from './style'
import Buttons from './components/Buttons/Buttons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { color1, color2, styleTitle } from '../../global/constant/constant'
import { TextInput, TouchableOpacity, FlatList } from 'react-native-gesture-handler'
import Post from '../../model/post_model'
import AddComment from './components/Add_Comment/Add_Comment'
import Comments from './components/Comments/Comments'
import { SliderBox } from "react-native-image-slider-box";
import { responderComentarios } from '../../firebase/Post'
import ComentarioComponent from './components/comentarios'

import { useSelector } from 'react-redux'

const ThePost = () => {

    const user: User = useSelector(state => state.userState.user)

    const post: Post = useRoute().params.post;
    const { setOptions } = useNavigation();
    const [message, setMessage] = useState("");
    const [comentarios, setComentarios] = useState([])
    const parameter = {
        message,
        setMessage,
        comentarios,
        setComentarios,
        post
    }
    const [responseField, setResponseField] = useState(-1)

    useEffect(() => {
        setOptions({
            title: post.title,
            headerStyle: {
                backgroundColor: color1,
            },
            headerTintColor: color2,
            headerTitleAlign: 'center',
            headerTitleStyle: styleTitle,

        })
        post.getComments().then(value => setComentarios(value))
    }, [])
    
    return (
        <SafeAreaView style={style.container}>
            <ScrollView nestedScrollEnabled={true}>
                <Image source={{ uri: post.image }}
                    style={style.image} />
                <View style={style.descriptionContainer}>
                    <Text style={style.descriptionText}>{post.description}</Text>
                </View>
                <Buttons />
                <Text style={style.title}>Comentários</Text>
                {/* <Comments parameter={parameter} />
                <AddComment parameter={parameter} /> */}            

                {/* <View style={style.commentContainer}>
                    <Text style={style.descriptionText}>Testando Comentario</Text>
                    <View style={style.addComent}>
                        <TextInput onChangeText={(e) => setMessage(e)} placeholder="Faça um comentario sobre o item"></TextInput>
                        <TouchableOpacity
                            style={style.sendButton}
                            // onPress={handleCreateComment}
                        >
                            <Text>Enviar</Text>
                        </TouchableOpacity>
                    </View>

                </View> */}
                <FlatList
                    data={comentarios}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) => {
                        return (
                            <ComentarioComponent
                                comentario={item}
                                post={post}
                                index={index}
                                user={user}
                                setResponseField={setResponseField}
                                responseField={responseField}
                            />
                        )
                    }}
                />
            </ScrollView>
            <View style={style.CommentsListContainer}>
            </View>
        </SafeAreaView>
    )
}

export const title = 'Titulo'

export default ThePost
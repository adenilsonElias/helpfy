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

const ThePost = () => {    
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
                <Comments parameter={parameter} />
                <AddComment parameter={parameter} />
            </ScrollView>            
        </SafeAreaView>
    )
}

export const title = 'Titulo'

export default ThePost
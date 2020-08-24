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
import { useSelector } from 'react-redux'

const ThePost = () => {

    const user: User = useSelector(state => state.userState.user)
    const post: Post = useRoute().params.post;
    const { setOptions } = useNavigation();
    const [message, setMessage] = useState("");
    const [comentarios, setComentarios] = useState([])
    const [responseField, setResponseField] = useState(-1)
    const [renderInput, setRenderInput] = useState(true)
    const parameter = {
        message,
        setMessage,
        comentarios,
        setComentarios,
        post,
        renderInput,
        setRenderInput,
        showComment
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

    function showComment() {        
        if (renderInput) {
            setRenderInput(false)
        } else {
            setRenderInput(true)
        }        
    }

    const conditionRenderInput = renderInput ?
        <AddComment parameter={parameter} /> : null

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
                <FlatList
                    data={comentarios}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) => {
                        return (
                            <Comments
                                comentario={item}
                                post={post}
                                index={index}
                                user={user}
                                setResponseField={setResponseField}
                                responseField={responseField}
                                parameter={parameter}
                            />
                        )
                    }}
                />
                { conditionRenderInput }
            </ScrollView>
        </SafeAreaView>
    )
}

export const title = 'Titulo'

export default ThePost
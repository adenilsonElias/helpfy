import React, { useEffect } from 'react'
import { SafeAreaView, View, Text, Image, ScrollView } from 'react-native'
import style from './style'
import Buttons from './Buttons/Buttons'
import { useNavigation, useRoute } from '@react-navigation/native'
import Post from '../../model/post_model'
import { color1, color2, styleTitle } from '../../global/constant/constant'

const ThePost = () => {

    const post: Post = useRoute().params.post;
    const {setOptions} = useNavigation();

    useEffect(()=>{
        setOptions({
            
                title: post.title,
                headerStyle: {
                    backgroundColor: color1,
                },
                headerTintColor: color2,
                headerTitleAlign: 'center',
                headerTitleStyle: styleTitle,
                
        })
    },[])

    return (
        <SafeAreaView style={style.container}>
            <ScrollView>
                <Image source={{uri: post.image}}
                    style={style.image} />
                <View style={style.descriptionContainer}>
                    <Text style={style.descriptionText}>{post.description}</Text>
                </View>
                <Buttons />
                <View style={style.commentContainer}>
                    <Text style={style.descriptionText}>Testando Comentario</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export const title = 'Titulo'

export default ThePost
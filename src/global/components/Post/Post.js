import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import style from './style'
import { useNavigation } from '@react-navigation/native'

// Post() : Object
// tamanho : JObject
const Post = (props) => {
    const navigation = useNavigation()

    return (
        <View style={style.container}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('ThePost', {
                    post: props.post
                })
            }}>                
                <Image source={{ uri: props.post.image[0]}} style={props.tamanho} />
            </TouchableOpacity>
        </View>
    )
}

export default Post
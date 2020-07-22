import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import style from './style'

// Post() : Object
// tamanho : JObject
const Post = (props) => {
    return (
        <View style={style.container}>
            <TouchableOpacity onPress={() => {
                props.navigation.navigate('ScreenPost', {
                    post: props.post
                })
            }}>                
                <Image source={{ uri: props.post.image }} style={props.tamanho} />
            </TouchableOpacity>
        </View>
    )
}

export default Post
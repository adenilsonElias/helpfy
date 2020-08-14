import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import style from './style'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather';
import { color1 } from '../../constant/constant'


const PostList = (props) => {
    const navigation = useNavigation()

    return (
        <View style={style.container}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('ThePost', {
                    post: props.post
                })
            }} style={style.containerTouch}>
                <Image source={{ uri: props.post.image }} style={style.post} />
                <View style={style.textContainer}>                    
                    <Text style={style.textTitle}>{props.post.title}</Text>
                    <Text style={style.textAuthor}>{props.post.author}</Text>
                </View>
                <TouchableOpacity onPress={()=>{}}
                    style={style.iconContainer}>
                    <Icon name={'trash-2'} size={30} color={color1}/>
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    )
}

export default PostList
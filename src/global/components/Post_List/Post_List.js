import React, { useEffect, useState } from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import style from './style'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather';
import { color1 } from '../../constant/constant'
import Swipeable from 'react-native-swipeable'

type Props = {
    post: Post
}

const PostList = ({ post, action, isMyPosts = false }: Props) => {
    const navigation = useNavigation()
    const [author, setAuthor] = useState({})

    useEffect(() => {
        async function getAuthor() {
            setAuthor(await post.getUser())
        }
        getAuthor()
    })

    const button = [
        <TouchableOpacity onPress={() => { action(post) }}
            style={style.iconContainer}>
            <Icon name={'trash-2'} size={30} color={color1} />
        </TouchableOpacity>
    ]

    const rightButton = !isMyPosts ? button : null

    return (
        <Swipeable rightButtons={rightButton}>
            <View style={style.container}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('ThePost', {
                        post: post
                    })
                }} style={style.containerTouch}>
                    <Image source={{ uri: post.image[0] }} style={style.post} />
                    <View style={style.textContainer}>
                        <Text numberOfLines={1} style={style.textTitle}>{post.title}</Text>
                        <Text numberOfLines={1} style={style.textAuthor}>{author.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </Swipeable>
    )
}

export default PostList
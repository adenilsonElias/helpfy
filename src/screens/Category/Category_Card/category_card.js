import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import { color4 } from '../../../global/constant/constant';
import Post from '../../../model/post_model'
import HeaderPost from '../Header_Post/Header_Post'
import style from './style'

type Props = {
    post : Post
}

export default CategoryCard = ({post} : Props) =>{
    const [author, setAuthor] = useState(null)
    const navigation = useNavigation()

    useEffect(() => {
        async function getAuthor(){
            setAuthor(await post.getUser())            
        }
        getAuthor()
    })

    return (
        <TouchableOpacity style={style.postContainer}
            onPress={() => {
                navigation.navigate('ThePost', {
                    post: post
                })
            }}>
            <HeaderPost author={author} timePost={post.timePost} />
            <Image source={{ uri: post.image[0] }} style={style.iconCateogry} />
            <View style={style.textContainer}>
                <Text style={style.textTitle}>{post.title}</Text>
                <Text style={style.textDescription}>{post.description}</Text>
            </View>
            <View style={style.locationContainer}>
                <Icon name={'map-pin'} size={20} color={color4}/>
                <Text style={style.textLocation}>
                    {author ? author.city : null} - {author ? author.state : null}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather';
import { color4 } from '../../../global/constant/constant';
import Post from '../../../model/post_model'
import HeaderPost from '../Header_Post/Header_Post'
import style from './style'

type Props = {
    post : Post
}

export default CategoryCard = ({post} : Props) =>{
    const [author, setAuthor] = useState({})
    const navigation = useNavigation()

    useEffect(()=>{
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
            <HeaderPost name={author.name} timePost={post.timePost} image={author.profileImage}/>
            <Image source={{ uri: post.image[0] }} style={style.iconCateogry} />
            <View style={style.textContainer}>
                <Text style={style.textTitle}>{post.title}</Text>
                <Text style={style.textDescription}>{post.description}</Text>
            </View>
            <View style={style.locationContainer}>
                <Icon name={'map-pin'} size={20} color={color4}/>
                <Text style={style.textLocation}>{author.city} - {author.state}</Text>
            </View>
        </TouchableOpacity>
    )
}
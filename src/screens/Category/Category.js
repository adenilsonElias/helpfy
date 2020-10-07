import React, { useEffect, useState } from 'react'
import { View, FlatList, TouchableOpacity, Text, Image } from 'react-native'
import style from './style'
import { useNavigation, useRoute } from '@react-navigation/native'
import { color1, color4 } from '../../global/constant/constant'
import { HeaderBackButton } from '@react-navigation/stack'
import HeaderPost from './Header_Post/Header_Post'
import Icon from 'react-native-vector-icons/Feather';
import { getPostList } from '../../firebase/Post'
import Filter from './Filter/Filter'

// @TODO Arrumar o nome do author

export default Category = (props) => {

    const navigation = useNavigation()
    const category = useRoute().params.title
    const [posts, setPosts] = useState([])

    useEffect(() => {
        navigation.setOptions({
            title: category,
            // Quando clicar em voltar, coloca novamente o bottomBar
            headerLeft: (props) => (
                < HeaderBackButton 
                    tintColor={color1}
                    onPress={() => {
                        navigation.setOptions({
                            tabBarVisible: true
                        }),
                        navigation.goBack()}
                    }
                /> ),
            headerRight: () => (
                <Filter setPost={setPosts} />
            )
        })
    }, [])

    useEffect(() => {
        async function collectPost(){
            const post = await getPostList({ category: category }, { limit: 10 })
            setPosts(post)
        }

        collectPost()
    }, [])

    return (
        <View style={style.container}>
            <FlatList
                data={posts}
                keyExtractor={item => `${item.IdPost}`}
                showsVerticalScrollIndicator={false}                
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={style.postContainer}
                            onPress={() => {
                                navigation.navigate('ThePost', {
                                    post: item
                                })
                            }}>
                            <HeaderPost name={item.author} timePost={item.timePost}/>
                            <Image source={{ uri: item.image[0] }} style={style.iconCateogry} />
                            <View style={style.textContainer}>
                                <Text style={style.textTitle}>{item.title}</Text>
                                <Text style={style.textDescription}>{item.description}</Text>
                            </View>
                            <View style={style.locationContainer}>
                                <Icon name={'map-pin'} size={20} color={color4}/>
                                <Text style={style.textLocation}>{item.location}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}
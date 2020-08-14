import React, { useEffect } from 'react'
import Header from '../../global/components/Header/Header'
import { View, FlatList, TouchableOpacity, Text, Image } from 'react-native'
import style from './style'
import Post from '../../model/post_model'
import { useNavigation } from '@react-navigation/native'
import { color1, color4 } from '../../global/constant/constant'
import { HeaderBackButton } from '@react-navigation/stack'
import HeaderPost from './Header_Post/Header_Post'
import Icon from 'react-native-vector-icons/Feather';

export default Category = () => {

    const navigation = useNavigation()

    const posts = [
        new Post({
            title: 'teste asdhjkahdjkahsdjkhadhkajkshd',
            author: 'testeasgdhjagsdhjagshjdgahjsgdhjagsdhjgashjgdahjsdghjg',
            image: require('../../assets/imgs/planeta.jpg'),
            comments: 'teste',
            description: 'testealsdkl;askdl;aksl;dkal;skdl;akl;dkal;sdkl;aksdl;akdl;asdjahdjahsdjkh',
            postId: 1,
            emailPost: 'teste',
            timePost: '315d Ago',
            userId: 1,
            postDonated: 'teste',
            location: 'Sao Paulo'
        }),
        new Post({
            title: 'teste',
            author: 'teste',
            image: require('../../assets/imgs/planeta.jpg'),
            comments: 'teste',
            description: 'teste',
            postId: 2,
            emailPost: 'teste',
            timePost: 'teste',
            userId: 1,
            postDonated: 'teste',
            location: 'SP'
        }),
        new Post({
            title: 'teste',
            author: 'teste',
            image: require('../../assets/imgs/planeta.jpg'),
            comments: 'teste',
            description: 'teste',
            postId: 3,
            emailPost: 'teste',
            timePost: 'teste',
            userId: 1,
            postDonated: 'teste',
            location: 'SP'
        }),
        new Post({
            title: 'teste',
            author: 'teste',
            image: require('../../assets/imgs/planeta.jpg'),
            comments: 'teste',
            description: 'teste',
            postId: 4,
            emailPost: 'teste',
            timePost: 'teste',
            userId: 1,
            postDonated: 'teste',
            location: 'SP'
        }),
        new Post({
            title: 'teste',
            author: 'teste',
            image: require('../../assets/imgs/planeta.jpg'),
            comments: 'teste',
            description: 'teste',
            postId: 5,
            emailPost: 'teste',
            timePost: 'teste',
            userId: 1,
            postDonated: 'teste',
            location: 'SP'
        }),
        new Post({
            title: 'teste',
            author: 'teste',
            image: require('../../assets/imgs/planeta.jpg'),
            comments: 'teste',
            description: 'teste',
            postId: 6,
            emailPost: 'teste',
            timePost: 'teste',
            userId: 1,
            postDonated: 'teste',
            location: 'SP'
        }),
        new Post({
            title: 'teste',
            author: 'teste',
            image: require('../../assets/imgs/planeta.jpg'),
            comments: 'teste',
            description: 'teste',
            postId: 7,
            emailPost: 'teste',
            timePost: 'teste',
            userId: 1,
            postDonated: 'teste',
            location: 'SP'
        }),
        new Post({
            title: 'teste',
            author: 'teste',
            image: require('../../assets/imgs/planeta.jpg'),
            comments: 'teste',
            description: 'teste',
            postId: 8,
            emailPost: 'teste',
            timePost: 'teste',
            userId: 1,
            postDonated: 'teste',
            location: 'SP'
        }),
        new Post({
            title: 'teste',
            author: 'teste',
            image: require('../../assets/imgs/planeta.jpg'),
            comments: 'teste',
            description: 'teste',
            postId: 9,
            emailPost: 'teste',
            timePost: 'teste',
            userId: 1,
            postDonated: 'teste',
            location: 'SP'
        }),
    ]

    useEffect(() => {
        navigation.setOptions({
            // Quando clicar em voltar, coloca novamente o bottomBar
            headerLeft: (props) => (
                < HeaderBackButton 
                    // tintColor={'#fff'}
                    onPress={() => {
                        navigation.setOptions({
                            tabBarVisible: true
                        }),
                        navigation.goBack()}
                    }
                /> )
        })
    })

    return (
        <View style={style.container}>
            <FlatList
                data={posts}
                keyExtractor={item => `${item.postId}`}
                showsVerticalScrollIndicator={false}                
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={style.postContainer}
                            onPress={() => {
                                navigation.navigate('ThePost')
                            }}>
                            <HeaderPost name={item.author} timePost={item.timePost}/>
                            <Image source={item.image} style={style.iconCateogry} />
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
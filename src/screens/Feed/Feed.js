import React, { useState, useEffect, useContext, useCallback } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import style from './style';
import { SliderBox } from "react-native-image-slider-box";
import Header from './components/Header/Header';
import Post from '../../model/post_model';
import PostList from './components/Post_List/Post_List';
import Icon from 'react-native-vector-icons/Feather';
import { color2, color1 } from '../../global/constant/constant'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { getPostList, getPost } from '../../firebase/Post';
import AuthContext from '../../context/auth_context';
import PostCarousel from './components/Post_Carousel/PostCarousel'
import Loading from '../Loading/Loading'
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../store/actions/loading'

export default Feed = () => {
    //@ TODO Resolver problema de que a tela so puxa os post uma vez
    const navigation = useNavigation()
    const auth = useContext(AuthContext)
    const images = [
        require('../../assets/imgs/feed1.jpeg'),
        require('../../assets/imgs/feed2.jpeg'),
        require('../../assets/imgs/feed4.jpeg'),
        require('../../assets/imgs/feed3.jpeg'),
        require('../../assets/imgs/feed5.jpeg'),
    ]
    const [mostLiked, setMostLiked] = useState([])
    const [recentes, setRecentes] = useState([])
    const [mostComments, setMostComments] = useState([])
    const loading = useSelector(state => state.loadingState.loading)
    const [updateListPost, setUpdateListPost] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setLoading(true))
        async function getPosts() {
            const liked = await getPostList(null, { limit: 5 }, { field: 'likeNumber', direction: "desc" })
            const post = await getPostList(null, { limit: 5 }, { field: 'timePost', direction: 'desc' });
            const comments = await getPostList(null, { limit: 5 }, { field: 'commentNumber', direction: 'desc' })
            setMostLiked(liked)
            setRecentes(post);
            setMostComments(comments)
            dispatch(setLoading(false))
        }
        getPosts()
    }, [])

    useFocusEffect(
        useCallback(() => {
            async function getPosts() {
                const liked = await getPostList(null, { limit: 5 }, { field: 'likeNumber', direction: "desc" })
                setMostLiked(liked)
                const post = await getPostList(null, { limit: 5 }, { field: 'timePost', direction: 'desc' });
                setRecentes(post);
                const comments = await getPostList(null, { limit: 5 }, { field: 'commentNumber', direction: 'desc' })
                setMostComments(comments)
            }
            getPosts()
        }, [updateListPost]))

    // Função para fazer atualizar lista de posts
    const handleUpdatePost = () => {
        setUpdateListPost(!updateListPost);
    }

    if (loading) {
        return (
            <Loading />
        )
    }

    if (auth.loginScreen) {
        navigation.navigate('Profile')
    }

    const AddPost = auth.isLogged ?
        <TouchableOpacity style={style.buttonAdd}
            onPress={() => { navigation.navigate('AddPost', {}) }}>
            <Icon name={'plus'} size={30} color={color2} />
        </TouchableOpacity> : null

    return (
        <View style={style.container}>
            <StatusBar barStyle={"dark-content"} backgroundColor={color2} />
            <Header />
            <View style={style.containerBody}>
                <ScrollView showsVerticalScrollIndicator={false}
                >
                    <SliderBox images={images}
                        imageLoadingColor={color1}
                        dotColor={color1}
                        inactiveDotColor={color2}
                        circleLoop={true}
                        autoplay={true} />
                    <Text style={style.title}>Destaques</Text>
                    <PostCarousel postList={mostLiked} />
                    {/* <PostList postList={mostLiked} /> */}
                    <Text style={style.title}>Recentes</Text>
                    <PostCarousel postList={recentes} />
                    {/* <PostList postList={recentes} /> */}
                    <Text style={style.title}>Comentados</Text>
                    <PostCarousel postList={mostComments} />
                    {/* <PostList postList={mostComments} /> */}
                </ScrollView>
            </View>
            { AddPost}
        </View>
    )
}

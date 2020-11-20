import React, { useState, useEffect, useContext } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import style from './style';
import { SliderBox } from "react-native-image-slider-box";
import Header from './components/Header/Header';
import Post from '../../model/post_model';
import PostList from './components/Post_List/Post_List';
import Icon from 'react-native-vector-icons/Feather';
import { color2, color1 } from '../../global/constant/constant'
import { useNavigation } from '@react-navigation/native';
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
        "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    ]
    const [mostLiked, setMostLiked] = useState([])
    const [recentes, setRecentes] = useState([])
    const [mostComments, setMostComments] = useState([])
    const loading = useSelector(state => state.loadingState.loading)
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

    if(loading){
        return(
            <Loading />
        )
    }

    if(auth.loginScreen){
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
            { AddPost }
        </View>
    )
}

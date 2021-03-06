import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import TheSearchBar from './components/TheSearchBar/TheSearchBar'
import style from './style'
import { useNavigation } from '@react-navigation/native'
import { color1, color2 } from '../../global/constant/constant'
import { useHeaderHeight, HeaderBackButton } from '@react-navigation/stack'
import Result from './components/Result/Result'
import Categorys from './components/Categorys/Categorys'
import Post from '../../model/post_model'
import { getPostList } from '../../firebase/Post'

const Search = () => {
    const [data, setData] = useState([])
    const [arrayHolder, setArrayHolder] = useState([])
    const [value, setValue] = useState('')
    const [renderResult, setRenderResult] = useState(false)
    const navigation = useNavigation()
    const size = useHeaderHeight()
    const [postList,setPostList] = useState()
    const parameter = {
        data,
        setData,
        arrayHolder,
        setArrayHolder,
        value,
        setValue,
        renderResult,
        setRenderResult
    }

    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => (<TheSearchBar parameter={parameter} headerSize={size} />),
            headerStyle: {
                backgroundColor: color2,
            },
            headerTitleContainerStyle: {
                left: size,
                right: 0
            },
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
                /> )
        })
    });

    useEffect(()=>{
        getPostList().then((response)=>{
            setPostList(response.filter((item) => {
                return item.title.toLowerCase().includes(value.toLowerCase())
            }));
        })
    } , [value])

    const condition = renderResult ? <Result postsList={postList} /> : <Categorys />

    return (
        <View style={style.container}>
            {condition}
        </View>
    )
}

export default Search

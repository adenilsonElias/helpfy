import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import TheSearchBar from './components/TheSearchBar/TheSearchBar'
import style from './style'
import { useNavigation } from '@react-navigation/native'
import { color1 } from '../../global/constant/constant'
import { useHeaderHeight, HeaderBackButton } from '@react-navigation/stack'
import Result from './components/Result/Result'
import Categorys from './components/Categorys/Categorys'

const Search = () => {
    const [data, setData] = useState([])
    const [arrayHolder, setArrayHolder] = useState([
        {
            title: 'teste',
            author: 'teste',
            image: 'teste',
            comments: 'teste',
            description: 'teste',
            postId: 1,
            emailPost: 'teste1',
            timePost: 'teste',
            userId: 'teste1'
        },
        {
            title: 'teste',
            author: 'teste',
            image: 'teste',
            comments: 'teste',
            description: 'teste',
            postId: 2,
            emailPost: 'teste2',
            timePost: 'teste',
            userId: 'teste2'
        }
    ])
    const [value, setValue] = useState('')
    const [renderResult, setRenderResult] = useState(false)
    const navigation = useNavigation()
    const size = useHeaderHeight()
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
                backgroundColor: color1,
            },
            headerTitleContainerStyle: {
                left: size,
                right: 0
            },
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

    const condition = renderResult ? <Result parameter={parameter} /> : <Categorys />

    return (
        <View style={style.container}>
            {condition}
        </View>
    )
}

export default Search

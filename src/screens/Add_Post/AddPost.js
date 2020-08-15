import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { HeaderBackButton } from '@react-navigation/stack'
import style, { placeHolderStyle, placeholderValue } from './style'
import { color2, categorys, color1 } from '../../global/constant/constant'
import RNPickerSelect from 'react-native-picker-select';
import Title from './components/Title/Title'
import SliderBoxImg from './components/SliderBox/SliderBoxImg'
import Post from '../../model/post_model'
import { useSelector } from 'react-redux'
import User from '../../model/user'
import { createPost } from '../../firebase/Post'

export default AddPost = () => {
    const navigation = useNavigation()
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [category, setCategory] = useState([])
    const [choiceCategory, setChoiceCategory] = useState()
    const user : User | null  = useSelector(state => state.userState.user);
    //testes, ideal max 14    
    const [images, setImages] = useState([
        "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    ])
    function handleSavePost(){
        if(user == null){
            return;
        }
        const newPost = new Post({
            title,
            description,
            category: choiceCategory,
            image : images[0],
            author: user.name,
            userId: user.id,
            emailPost: user.email,
            timePost: Date.now()
        })
        createPost(newPost).then((response)=>{
            console.log('Post criado com sucesso')
        });
    }

    // Converte a lista coletada da constante declarada em outro arquivo no formato de valor para RNPickerSelect utilizar
    const converToPickerItem = (category, batata) => {
        let list = []
        for (let a in category) {
            list.push({
                label: category[a].title,
                value: category[a].title,
                color: color1
            })
        }
        setCategory(list)
    }

    useEffect(() => {
        converToPickerItem(categorys)
        navigation.setOptions({
            // Quando clicar em voltar, coloca novamente o bottomBar
            headerLeft: (props) => (
                < HeaderBackButton
                    onPress={() => {
                        navigation.setOptions({
                            tabBarVisible: true
                        }),
                        navigation.goBack()
                    }}
                />)
        })
    }, [])

    return (
        <ScrollView>
            <View style={style.container}>
                <Title title={'Título da Postagem'} />
                <View style={style.inputContainer}>
                    <TextInput style={style.input}
                        placeholder='Insira o título'
                        placeholderTextColor={color2}
                        // maxLength={20}
                        // autoFocus={true}
                        value={title}
                        onChangeText={setTitle} />
                </View>
                <Title title={'Categoria'} />
                <RNPickerSelect
                    onValueChange={value => {
                        setChoiceCategory(value)
                    }}
                    items={category}
                    placeholder={placeholderValue}
                    style={placeHolderStyle}                    
                    useNativeAndroidPickerStyle={false}
                />
                <SliderBoxImg images={images}/>
                <Title title={'Descrição'} />
                <View style={[style.inputContainer, { height: 150 }]}>
                    <TextInput style={style.input}
                        placeholder='Insira a descrição'
                        placeholderTextColor={color2}                        
                        multiline={true}
                        // autoFocus={true}
                        value={description}
                        onChangeText={setDescription} />
                </View>
                <View style={style.buttonContainer}>
                    <TouchableOpacity style={style.button} onPress={handleSavePost}>
                        <Text style={style.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}


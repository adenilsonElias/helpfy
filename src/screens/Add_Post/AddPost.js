import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { HeaderBackButton } from '@react-navigation/stack'
import style, { placeHolderStyle, placeholderValue } from './style'
import { color2, categorys, color1 } from '../../global/constant/constant'
import { Picker } from '@react-native-community/picker'
import RNPickerSelect from 'react-native-picker-select';
import Title from './components/Title/Title'
import Post from '../../model/post_model'
import { useSelector } from 'react-redux'
import User from '../../model/user'
import { createPost } from '../../firebase/Post'
import ImagePicker from 'react-native-image-picker'
import SliderImages from './components/SliderImages/SliderImages'

export default AddPost = () => {
    const navigation = useNavigation()
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [category, setCategory] = useState([])
    const [choiceCategory, setChoiceCategory] = useState()
    const user: User | null = useSelector(state => state.userState.user);
    //testes, ideal max 14    
    const [images, setImages] = useState([])

    function handleSavePost() {
        if (user == null) {
            return;
        }
        const newPost = new Post({
            title,
            description,
            category: choiceCategory,
            image: images[0],
            author: user.name,
            userId: user.id,
            emailPost: user.email,
            timePost: Date.now()
        })
        createPost(newPost).then((response) => {
            console.info('Post criado com sucesso')
        });
    }

    // Converte a lista coletada da constante declarada em outro arquivo no formato de valor para RNPickerSelect utilizar
    const converToPickerItem = (category) => {
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

    pickImage = () => {
        ImagePicker.showImagePicker({
            title: 'Selecione a imagem',
            maxHeight: 200,
            maxWidth: 400
        }, res => {
            if (!res.didCancel) {
                setImages([...images, res.uri])
            }
        })
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
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style.container}>
                <Title title={'Título da Postagem'} />
                <View style={style.inputContainer}>
                    <TextInput style={style.input}
                        placeholder='Insira o título...'
                        placeholderTextColor={color1}
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
                <Title title={`Imagem (${images.length}/5)`} />
                <SliderImages images={images} pickerImage={pickImage} setImages={setImages}/>
                {/* <SliderBoxImg images={images} pickerImage={pickImage}/> */}
                <Title title={'Descrição'} />
                <View style={[style.inputContainer, style.inputDescriptionContainer]}>
                    <TextInput style={style.input}
                        placeholder='Insira a descrição...'
                        placeholderTextColor={color1}
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


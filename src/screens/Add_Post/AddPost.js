import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native'
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
import ImageView from 'react-native-image-view';
import Loading from '../Loading/Loading'

export default AddPost = () => {
    const user: User | null = useSelector(state => state.userState.user);
    const navigation = useNavigation()
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [category, setCategory] = useState([])
    const [choiceCategory, setChoiceCategory] = useState()
    const [images, setImages] = useState([])
    const [displayImages, setDisplayImages] = useState([])
    const [previewImages, setPreviewImages] = useState([])
    const [imageIndex, setImageIndex] = useState(0)
    const [visible, setVisible] = useState(false)
    const [loading, setLoading] = useState(false)

    function handleSavePost() {
        if (user == null) {
            return;
        }
        const newPost = new Post({
            title,
            description,
            category: choiceCategory,
            image: images,
            userId: user.id,
            emailPost: user.email,
            timePost: Date.now(),
            donatarioId: null,
            donatarioRef: null,
            donationStatus: 1
        })
        setLoading(true)
        createPost(newPost, user.id).then((response) => {
            console.info('Post criado com sucesso')
            setLoading(false)
            navigation.navigate('Feed')
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

    const convertImagePreview = (arrayImages) => {
        setPreviewImages(arrayImages.map((item) => {
            return {
                source: { uri: item },
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height
            }
        }))
    }

    const pickImage = () => {
        ImagePicker.showImagePicker({
            title: 'Selecione a imagem'
        }, res => {
            if (!res.didCancel) {
                setDisplayImages([...displayImages, res.uri])
                setImages([...images, res.path])
            }
        })
    }

    useEffect(() => {
        converToPickerItem(categorys)
        navigation.setOptions({
            // Quando clicar em voltar, coloca novamente o bottomBar
            headerLeft: (props) => (
                < HeaderBackButton
                    tintColor={color1}
                    onPress={() => {
                        navigation.setOptions({
                            tabBarVisible: true
                        }),
                            navigation.goBack()
                    }}
                />)
        })
    }, [])

    useEffect(() => {
        navigation.setOptions({
            headerShown: !loading
        })
    }, [loading])

    //Converter toda imagem salva no array Images para o preview
    useEffect(() => {
        convertImagePreview(images)
    }, [images])


    if(loading){
        return(
            <Loading />
        )
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style.container}>
                <Title title={'Título da Postagem'} />
                <View style={style.inputContainer}>
                    <TextInput style={style.input} placeholder='Insira o título...'
                        placeholderTextColor={color1}
                        // maxLength={20}
                        // autoFocus={true}
                        value={title} onChangeText={setTitle} />
                </View>
                <Title title={'Categoria'} />
                <RNPickerSelect onValueChange={value => {
                        setChoiceCategory(value)
                    }}
                    items={category} placeholder={placeholderValue}
                    style={placeHolderStyle} useNativeAndroidPickerStyle={false} />
                <Title title={`Imagem (${images.length}/5)`} />
                <SliderImages pickerImage={pickImage} setVisible={setVisible} 
                    images={images} setImages={setImages} displayImages={displayImages} 
                    setDisplayImages={setDisplayImages} />
                {/* <SliderBoxImg images={images} pickerImage={pickImage}/> */}
                <Title title={'Descrição'} />
                <View style={[style.inputContainer, style.inputDescriptionContainer]}>
                    <TextInput style={style.input} placeholder='Insira a descrição...'
                        placeholderTextColor={color1} multiline={true}
                        // autoFocus={true}
                        value={description} onChangeText={setDescription} />
                </View>
                <View style={style.buttonContainer}>
                    <TouchableOpacity style={style.button} onPress={handleSavePost}>
                        <Text style={style.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
                <ImageView glideAlways images={previewImages}
                    imageIndex={imageIndex} animationType="fade"
                    isVisible={visible} onClose={() => setVisible(false)} />
            </View>
        </ScrollView>
    )
}


import React, { useEffect, useLayoutEffect, useState } from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { HeaderBackButton } from '@react-navigation/stack'
import style, { placeHolderStyle, placeholderValue } from './style'
import { color2, categorys, color1 } from '../../global/constant/constant'
import { Picker } from '@react-native-community/picker'
import RNPickerSelect from 'react-native-picker-select';
import Title from './components/Title/Title'
import Post from '../../model/post_model'
import { useSelector } from 'react-redux'
import User from '../../model/user'
import { createPost, editPost } from '../../firebase/Post'
import ImagePicker from 'react-native-image-picker'
import SliderImages from './components/SliderImages/SliderImages'
import ImageView from 'react-native-image-view';
import Loading from '../Loading/Loading'
import Icon from 'react-native-vector-icons/Feather'
import Header from './components/Header/Header'
import Toast from 'react-native-simple-toast'
import DeleteButton from './components/Delete_Button/Delete_Button'

export default AddPost = () => {
    const user: User | null = useSelector(state => state.userState.user);
    const postParam: Post = useRoute().params.post;
    const navigation = useNavigation()
    const [title, setTitle] = useState(postParam ? postParam.title : '')
    const [description, setDescription] = useState(postParam ? postParam.description : '')
    const [category, setCategory] = useState([])
    const [choiceCategory, setChoiceCategory] = useState(postParam ? postParam.category : '')
    const [images, setImages] = useState(postParam ? postParam.image : [])
    const [displayImages, setDisplayImages] = useState(postParam ? postParam.image : [])
    const [previewImages, setPreviewImages] = useState([])
    const [imageIndex, setImageIndex] = useState(0)
    const [visible, setVisible] = useState(false)
    const [loading, setLoading] = useState(false)

    function handleSavePost() {
        if (user == null) {
            return;
        }
        if (postParam) {
            postParam.title = title;
            postParam.description = description;
            postParam.category = choiceCategory;
            postParam.image = images;
            setLoading(true)
            editPost(postParam).then(() => {
                console.info("Post editado com sucesso");
                setLoading(false)
                navigation.goBack()

            }).catch((error)=>{
                setLoading(false)
                Toast.show("Não foi possivel editar o post", Toast.LONG)
            })
        } else {
            const newPost = new Post({
                title: title,
                description: description,
                category: choiceCategory,
                image: images,
                userId: user.id,
                timePost: Date.now(),
            })
            setLoading(true)
            createPost(newPost, user.id).then((response) => {
                console.info('Post criado com sucesso')
                setLoading(false)
                navigation.navigate('Feed')
            }).catch((error) =>{
                Toast.show("Não foi possivel criar o post")
            });
        }
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

    useLayoutEffect(() => {
        converToPickerItem(categorys)
    }, [])

    //Converter toda imagem salva no array Images para o preview
    useEffect(() => {
        convertImagePreview(images)
    }, [images])


    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <View style={style.container}>
            <Header handleSavePost={handleSavePost} postParam={postParam} images={images}
                title={title} description={description} choiceCategory={choiceCategory}/>
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={{ flex: 2 }}>
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
                        value={choiceCategory}
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
                    {
                        postParam ? <DeleteButton post={postParam} setLoading={setLoading}
                            userId={user.id}/> : null
                    }
                    <ImageView glideAlways images={previewImages}
                        imageIndex={imageIndex} animationType="fade"
                        isVisible={visible} onClose={() => setVisible(false)} />
                </View>
            </ScrollView>
        </View>
    )
}


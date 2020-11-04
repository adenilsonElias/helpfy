import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import TheAvatar from '../../../../global/components/Avatar/The_Avatar'
import { color1 } from '../../../../global/constant/constant'
import Icon from 'react-native-vector-icons/Feather'
import style from './style'
import ImagePicker from 'react-native-image-picker'

export default EditBackground = ({ coverImage, setCoverImage }) => {
    const [image, setImage] = useState(coverImage)

    const pickImage = () => {
        ImagePicker.showImagePicker({
            title: 'Selecione a imagem'
        }, res => {
            if (!res.didCancel) {
                setCoverImage(res.path)
                setImage(res.uri)
            }
        })
    }

    return (
        <View style={style.container}>
            <View style={style.titleContainer}>
                <Text style={style.titleText}>Foto de Capa</Text>
                <TouchableOpacity onPress={pickImage}>
                    <Icon name={'edit'} size={26} color={color1} style={style.icon} />
                </TouchableOpacity>
            </View>
            <View style={style.photoCntainer}>
                <Image source={coverImage ? { uri: image } 
                    : require('../../../../assets/imgs/coverDefault.png')}
                    style={style.image} />
            </View>
        </View>
    )
}
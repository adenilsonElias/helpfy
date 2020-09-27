import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import TheAvatar from '../../../../global/components/Avatar/The_Avatar'
import { color1 } from '../../../../global/constant/constant'
import Icon from 'react-native-vector-icons/Feather'
import style from './style'

export default EditBackground = () => {
    return (
        <View style={style.container}>
            <View style={style.titleContainer}>
                <Text style={style.titleText}>Foto de Capa</Text>
                <TouchableOpacity onPress={() => {}}>
                    <Icon name={'edit'} size={26} color={color1} style={style.icon} />
                </TouchableOpacity>
            </View>
            <View style={style.photoCntainer}>
                <Image source={require('../../../../assets/imgs/planeta.jpg')}
                    style={style.image} />
            </View>
        </View>
    )
}
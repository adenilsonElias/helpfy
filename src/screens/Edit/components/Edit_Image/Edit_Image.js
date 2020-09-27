import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import TheAvatar from '../../../../global/components/Avatar/The_Avatar'
import { color1 } from '../../../../global/constant/constant'
import Icon from 'react-native-vector-icons/Feather'
import style from './style'

export default EditImage = () => {
    return(
        <View style={style.container}>
            <View style={style.titleContainer}>
                <Text style={style.titleText}>Foto de Perfil</Text>
                <TouchableOpacity onPress={() => {}}>
                    <Icon name={'edit'} size={26} color={color1} style={style.icon} />
                </TouchableOpacity>
            </View>
            <View style={style.photoCntainer}>
                <TheAvatar size={120}/>
            </View>
        </View>
    )
}
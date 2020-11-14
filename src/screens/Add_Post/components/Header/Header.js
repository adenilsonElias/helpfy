import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import style from './style'
import Icon from 'react-native-vector-icons/Feather'
import { color1 } from '../../../../global/constant/constant'
import { useNavigation } from '@react-navigation/native'
import Post from '../../../../model/post_model'
import Toast from 'react-native-simple-toast'

type Props = {
    handleSavePost : Function,
    postParam : Post,
    title : String,
    description : String,
    choiceCategory : String,
    images : String[]
}

export default Header = ({ handleSavePost, postParam, title, description, choiceCategory, images } : Props) => {
    const navigation = useNavigation()

    const verifySavePost = () => {
        if (title.length == 0 || description.length == 0 || choiceCategory.length == 0 || images.length == 0){
            Toast.show("Verifique se todos os campos estão preenchidos", Toast.LONG)
        } else {
            handleSavePost()
        }
    }

    return(
        <View style={style.container}>
            <TouchableOpacity onPress={() => {
                navigation.setOptions({ tabBarVisible: true })
                navigation.goBack()
            }}>
                <Icon name={'arrow-left'} size={25} color={color1} />
            </TouchableOpacity>
            <View>
                <Text style={style.titleText}>{ postParam ? 'Editar Postagem' : 'Nova Postagem' }</Text>
            </View>
            <TouchableOpacity onPress={() => { verifySavePost() }}>
                <Icon name={'save'} size={25} color={color1} />
            </TouchableOpacity>
        </View>
    )
}
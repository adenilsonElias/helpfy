import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import style from './style'
import Icon from 'react-native-vector-icons/Feather'
import { color1 } from '../../../../global/constant/constant'
import { useNavigation } from '@react-navigation/native'

export default Header = ({ password, confirmPass }) => {
    const navigation = useNavigation()

    return(
        <View style={style.container}>
            <TouchableOpacity onPress={() => {
                navigation.setOptions({ tabBarVisible: true })
                navigation.goBack()
            }}>
                <Icon name={'arrow-left'} size={25} color={color1} />
            </TouchableOpacity>
            <View>
                <Text style={style.titleText}>Editar Perfil</Text>
            </View>
            <TouchableOpacity onPress={() => {
                if (password != confirmPass) {
                    //@ TODO Colocar error para quando senhas forem diferentes
                    return
                }
            }}>
                <Icon name={'save'} size={25} color={color1} />
            </TouchableOpacity>
        </View>
    )
}
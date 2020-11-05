import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import style from './style'
import Icon from 'react-native-vector-icons/Feather'
import { color1 } from '../../../../global/constant/constant'
import { useNavigation } from '@react-navigation/native'

type Props = {
    setPassFunction : Function
}

export default Header = ({ setPassFunction } : Props) => {
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
                <Text style={style.titleText}>Editar Senha</Text>
            </View>
            <TouchableOpacity onPress={setPassFunction}>
                <Icon name={'save'} size={25} color={color1} />
            </TouchableOpacity>
        </View>
    )
}
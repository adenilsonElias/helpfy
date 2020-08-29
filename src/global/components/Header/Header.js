import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import style from './style'
import Icon from 'react-native-vector-icons/Feather';
import { color1 } from '../../constant/constant'
import { useNavigation } from '@react-navigation/native';

const Header = (props) => {
    const navigation = useNavigation()

    return (
        <View style={style.container}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Icon name={'menu'} size={30} color={color1} />
            </TouchableOpacity>
            <Text style={[style.titleText, style.colorText]}>{props.title} </Text>
            {props.icon ? <Icon name={props.icon} size={30} color={color1} /> : <View />}
        </View>
    )
}

export default Header


import React from 'react'
import { View, Text } from 'react-native'
import style from './style'
import Icon from 'react-native-vector-icons/Feather';
import { color1 } from '../../constant/constant'

const Header = (props) => {
    return (
        <View style={style.container}>
            {props.icon ? <Icon name={props.icon} size={30} color={color1} /> : <View />}
            <Text style={[style.titleText, style.colorText]}>{props.title} </Text>
            {props.icon ? <Icon name={props.icon} size={30} color={color1} /> : <View />}
        </View>
    )
}

export default Header


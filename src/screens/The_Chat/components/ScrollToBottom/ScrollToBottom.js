import React from 'react'
import { View } from 'react-native'
import { color1 } from '../../../../global/constant/constant'
import style from './style'
import Icon from 'react-native-vector-icons/Feather'

export default ScrollToBottom = () => {
    return(
        <View style={style.container}>
            <Icon name={'chevrons-down'} size={30} color={color1} />
        </View>
    )
}
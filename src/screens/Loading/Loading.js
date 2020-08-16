import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { color1 } from '../../global/constant/constant'
import style from './style'

export default Loading = () => {
    return(
        <View style={style.container}>
            <ActivityIndicator size={70} color={color1}/>
        </View>
    )
}
import React from 'react'
import { View, Text } from 'react-native'
import style from './style'

export default Title = (props) => {
    return (
        <View style={style.Container}>
            <Text style={style.information}>{props.title}</Text>
        </View>
    )
}
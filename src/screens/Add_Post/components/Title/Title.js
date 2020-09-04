import React from 'react'
import { View, Text } from 'react-native'
import style from './style'

export default Title = ({ title, styles }) => {
    return (
        <View style={style.Container}>
            <Text style={[style.information, styles ? styles : {} ]}>{title}</Text>
        </View>
    )
}
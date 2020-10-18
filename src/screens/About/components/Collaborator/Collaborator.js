import React from 'react'
import { Text, View } from 'react-native'
import style from './style'

export default Collaborator = ({ author }) => {
    return (
        <View style={style.container}>
            <Text style={style.text}>Ícone feito por </Text>
            <Text style={[style.text, style.highlightText]}>{author} </Text>
            <Text style={style.text}>de </Text>
            <Text style={[style.text, style.highlightText]}>www.flaticon.com</Text>
        </View>
    )
}

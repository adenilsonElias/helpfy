import React, { useState } from 'react'
import { Text, View } from 'react-native'
import style from './style'

export default Collaborator = ({ author, type, site }) => {
    const text = type == 'Animação' ? `${type} feita por ` : `${type} feito por `

    return (
        <View style={style.container}>
            <Text style={style.text}>{text}</Text>
            <Text style={[style.text, style.highlightText]}>{author} </Text>
            <Text style={style.text}>de </Text>
            <Text style={[style.text, style.highlightText]}>{site}</Text>
        </View>
    )
}

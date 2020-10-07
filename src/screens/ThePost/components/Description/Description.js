import React from 'react'
import { Text, View } from 'react-native'
import style from './style'

export default Description = ({ post, authorName }) => {
    return (
        <View style={style.container}>
            <View style={style.rowContainer}>
                <Text style={style.titleText}>Autor: </Text>
                <Text style={style.descriptionInfo}>{authorName}</Text>
            </View>
            <View style={style.rowContainer}>
                <Text style={style.titleText}>Categoria: </Text>
                <Text style={style.descriptionInfo}>{post.category}</Text>
            </View>
            <View style={style.rowContainer}>
                <Text style={style.titleText}>Descrição: </Text>
                <Text style={style.descriptionInfo}>{post.description}</Text>
            </View>
        </View>
    )
}
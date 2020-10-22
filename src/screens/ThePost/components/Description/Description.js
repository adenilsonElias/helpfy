import React from 'react'
import { Text, View } from 'react-native'
import The_Avatar from '../../../../global/components/Avatar/The_Avatar'
import { color1 } from '../../../../global/constant/constant'
import style from './style'

export default Description = ({ post, authorName }) => {
    return (
        <View style={style.container}>
            <View style={style.titleContainer}>
                <Text style={style.titleText}>{post.title}</Text>
            </View>
            <View style={style.rowContainer}>
                <Text style={style.typeText}>Descrição: </Text>
                <Text style={style.descriptionInfo}>{post.description}</Text>
            </View>
            <View style={style.rowContainer}>
                <Text style={style.typeText}>Categoria: </Text>
                <Text style={style.descriptionInfo}>{post.category}</Text>
            </View>
            <View style={style.rowContainer}>
                <The_Avatar size={'small'} />
                <Text style={[style.descriptionInfo, { paddingHorizontal: 5, color: color1 }]}>{authorName}</Text>
            </View>
        </View>
    )
}
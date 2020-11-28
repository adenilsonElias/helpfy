import React from 'react'
import { Text, View } from 'react-native'
import style from './style'

export default InfoBoard = ({ index, item, userIdLogged }) => {
    //Style diferencial para o usuario Logado
    const styleUser = item.id == userIdLogged ?
        [style.boldText, { fontStyle: "italic" }] :
        style.normalText

    return (
        <View style={style.container}>
            <View style={style.positionContainer}>
                <Text style={styleUser}>{index + 1}</Text>
            </View>
            <View style={style.nameContainer}>
                <Text style={styleUser} numberOfLines={1}>{item.name}</Text>
            </View>
            <View style={style.pointsContainer}>
                <Text style={style.boldText}>{item.score}</Text>
            </View>
        </View>
    )
}
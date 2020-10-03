import React from 'react'
import { Text, View } from 'react-native'
import style from './style'

export default TitleBoard = () => {
    return (
        <View style={style.container}>
            <View style={style.positionContainer}>
                <Text style={style.titleText}>Nº</Text>
            </View>
            <View style={style.nameContainer}>
                <Text style={style.titleText}>Nome</Text>
            </View>
            <View style={style.pointsContainer}>
                <Text style={style.titleText}>Pontos</Text>
            </View>
        </View>
    )
}
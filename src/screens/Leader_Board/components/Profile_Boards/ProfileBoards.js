import React from 'react'
import { Image, Text, View } from 'react-native'
import style from './style'
import TheAvatar from '../../../../global/components/Avatar/The_Avatar'

export default ProfileBoard = ({ score, position }) => {
    return (
        <View style={style.container}>
            <View style={style.infoContainer}>
                <Text style={style.infoText}>{position}º</Text>
            </View>
            <View style={style.imageProfileContainer}>
                <TheAvatar size={120}/>
            </View>
            <View style={style.infoContainer}>
                <Text style={style.infoText}>{score} pts</Text>
            </View>
        </View>
    )
}
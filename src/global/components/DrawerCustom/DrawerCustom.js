import React, { useState } from 'react'
import { View, Text, Dimensions, ImageBackground, Image } from 'react-native'
import { DrawerItemList } from '@react-navigation/drawer';
import * as Progress from 'react-native-progress';
import style from './style'
import { color2, color1 } from '../../constant/constant'
import TheAvatar from '../Avatar/The_Avatar'
import { Badge } from 'react-native-elements'

const DrawerCustom = ({ ...props }) => {
    return (
        <View style={style.container}>
            <View style={style.profileContainer}>
                <View>
                    <TheAvatar size={120}/>
                    <Badge badgeStyle={style.badge} value={1} textStyle={style.level}
                        containerStyle={style.badgeContainer}/>
                </View>
                <Text style={style.name}
                    numberOfLines={2}> {props.user && props.user.name ? props.user.name : "Anônimo"} </Text>
                <View style={style.perfilContainer}>
                    <Progress.Bar progress={0.3}
                        // borderColor={color2}
                        color={color1}
                        borderRadius={0}
                        height={10}
                        width={Dimensions.get('window').width * 3 / 4.5} />
                </View>
            </View>

            <View style={style.listItensContainer}>
                <DrawerItemList {...props} />
            </View>
        </View>
    )
}

export default DrawerCustom
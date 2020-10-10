import React from 'react'
import { View, Text, Dimensions, ImageBackground, Image } from 'react-native'
import { DrawerItemList } from '@react-navigation/drawer';
import * as Progress from 'react-native-progress';
import style from './style'
import { color2, color1 } from '../../constant/constant'
import TheAvatar from '../Avatar/The_Avatar'

const DrawerCustom = ({ ...props }) => {
    return (
        <View style={style.container}>
            <View style={style.profileContainer}>
                <View>
                    <TheAvatar size={120}/>
                    {/* O level maximo de 5 digitos */}
                    <View style={style.badgeContainer}>
                        <Text adjustsFontSizeToFit={true}
                            allowFontScaling={true}
                            style={style.level}>{props.level}</Text>
                    </View>
                </View>
                <Text style={style.name}
                    numberOfLines={2}> {props.user && props.user.name ? props.user.name : "Anônimo"} </Text>
                <View style={style.perfilContainer}>
                    <Progress.Bar progress={props.progresso}
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
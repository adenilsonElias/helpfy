import React, { useState } from 'react'
import { View, Text, Dimensions, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { DrawerItemList } from '@react-navigation/drawer';
import * as Progress from 'react-native-progress';
import style from './style'
import { color2, color1 } from '../../constant/constant'
import Icon from 'react-native-vector-icons/Feather';

const DrawerCustom = ({ ...props }) => {
    return (
        <View style={style.container}>
            <ImageBackground
                // source={require("../../../assets/imgs/planeta.jpg")}
                imageStyle={{ opacity: 0.85, backgroundColor: color2 }}
                style={style.imageBackground}>
                <Image
                    source={require('../../../assets/imgs/icon.png')}
                    style={style.profile} />
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
            </ImageBackground>

            <View style={style.listItensContainer}>
                <DrawerItemList {...props} />
            </View>

            <View style={style.logoutContainer}>
                <TouchableOpacity style={style.logoutButton}>
                    <Icon name={'log-out'} size={24} color={color1} style={style.icon}/>
                    <Text style={style.text}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DrawerCustom
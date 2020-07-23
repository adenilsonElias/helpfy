import React from 'react'
import { View, Text, Dimensions, ScrollView, ImageBackground, Image } from 'react-native'
import { DrawerItemList  } from '@react-navigation/drawer';
import * as Progress from 'react-native-progress';
import style from './style'
import { color2, color1 } from '../../constant/constant'

const DrawerCustom = ({...props}) => {
    return(
        <ScrollView>
            <ImageBackground
                // source={require("../../../assets/imgs/planeta.jpg")}
                imageStyle={{ opacity: 0.85, backgroundColor: color2 }}
                style={style.imageBackground}>
                <Image 
                    source={require('../../../assets/imgs/icon.png')}
                    style={style.profile}/>
                <Text style={style.name}
                    numberOfLines={2}>Nome</Text>
                <View style={style.perfilContainer}>                    
                    <Progress.Bar progress={0.3}
                        // borderColor={color2}
                        color={color1}
                        borderRadius={0}
                        height={10}
                        width={Dimensions.get('window').width * 3/4.5} />
                </View>
            </ImageBackground>

            <View style={style.container}>
                <DrawerItemList {...props}/>
            </View>
        </ScrollView>
    )
}

export default DrawerCustom
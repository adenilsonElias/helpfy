import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator, SafeAreaView, StatusBar } from 'react-native'
import { color1, color2 } from '../../global/constant/constant'
import style from './style'
import Lottie from 'lottie-react-native'

import animation from '../../assets/animations/loading.json'

export default Loading = () => {

    return(
        <SafeAreaView style={style.container}>
            <StatusBar barStyle={"dark-content"} backgroundColor={color2} />
            <Lottie resizeMode={"contain"} source={animation} autoPlay loop/>
        </SafeAreaView>
    )
}
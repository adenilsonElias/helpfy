import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator, SafeAreaView } from 'react-native'
import { color1 } from '../../global/constant/constant'
import style from './style'
import Lottie from 'lottie-react-native'

import animation from '../../assets/animations/loading.json'

export default Loading = () => {

    return(
        <SafeAreaView style={style.container}>
            <Lottie resizeMode={"contain"} source={animation} autoPlay loop/>
        </SafeAreaView>
        // <View style={style.container}>
        //     <ActivityIndicator size={70} color={color1}/>
        // </View>
    )
}
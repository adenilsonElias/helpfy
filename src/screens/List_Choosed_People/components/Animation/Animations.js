import React from 'react'
import { SafeAreaView } from 'react-native'
import style from './style'
import Lottie from 'lottie-react-native'

import animation from '../../../../assets/animations/donate.json'

export default Animations = () => {
    return(
        <SafeAreaView style={style.container}>
            <Lottie resizeMode={"contain"} source={animation} autoPlay loop/>
        </SafeAreaView>
    )
}
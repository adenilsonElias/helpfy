import React, { useEffect, useRef } from 'react'
import { Animated, Easing, SafeAreaView, StatusBar, Text, View } from 'react-native'
import Lottie from 'lottie-react-native'
import style from './style'
import { color2 } from '../../global/constant/constant'

import animation from '../../assets/animations/box.json'

type Props = {
    setAppIsLoading : Function
}

export default Splash = ({ setAppIsLoading } : Props) => {    
    const fadeAnim = useRef(new Animated.Value(0)).current
    const positions = useRef(new Animated.Value(100)).current

    useEffect(() => {        
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
        }).start()
        setTimeout(() => {
            setAppIsLoading(false)
        }, 3000)
    }, [positions])

    return (
        <SafeAreaView style={style.container}>
            <StatusBar barStyle={"dark-content"} backgroundColor={color2} />
            <View style={style.container}>
                <Lottie resizeMode={"contain"} source={animation} autoPlay loop />
            </View>
            <Animated.View style={[style.titleContainer, 
                {
                    opacity: fadeAnim,
                    transform: [{
                        translateY: fadeAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [100, 0]
                        }),
                      }],
                }]}>
                <Text style={style.title}>Helpfy</Text>
            </Animated.View>
        </SafeAreaView>
    )
}
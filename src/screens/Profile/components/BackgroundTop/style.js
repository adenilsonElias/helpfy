import { Dimensions, StyleSheet } from 'react-native'
import { color1, color2 } from '../../../../global/constant/constant'

const style = StyleSheet.create({
    imageBackground: {
        width: '100%',
        height: Dimensions.get("window").width * 6 / 7 ,
        backgroundColor: 'transparent',
    },
    profileContainer: { 
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    backgroundStyle: { 
        opacity: 0.7, 
        backgroundColor: 'rgb(0,0,0)'
    },
    buttonContainer: {
        backgroundColor: color2,
        borderRadius: 20,
        position: "absolute",
        top: 20,
        left: 20
    }
})

export default style
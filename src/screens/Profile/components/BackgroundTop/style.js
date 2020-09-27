import { Dimensions, StyleSheet } from 'react-native'
import { color1 } from '../../../../global/constant/constant'

const style = StyleSheet.create({
    background: {
        width: '100%',
        height: Dimensions.get("window").width * 3 / 4 ,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundStyle: { 
        opacity: 0.7, 
        backgroundColor: 'rgb(0,0,0)'
    }
})

export default style
import { Dimensions, StyleSheet } from 'react-native'
import { color1, color2, fontTitle } from '../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        backgroundColor: color2,
        flex: 3,
        justifyContent: "center"
    },
    titleContainer: {
        // backgroundColor: 'red',
        flex: 1,
        alignItems: 'center'
    },
    title: {       
        fontSize: 50,
        color: color1,
        fontFamily: fontTitle
    },
})

export default style
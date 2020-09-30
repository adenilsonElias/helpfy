import { Dimensions, StyleSheet } from 'react-native'
import { color1, color2, fontTitle } from '../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color2,
    },
    containerBody: {
        flex: 2
    },
    title: {
        paddingVertical: 10,
        paddingHorizontal: 10,        
        color: color1,        
        fontSize: 30,
        fontFamily: fontTitle,        
    },
    buttonAdd: {
        width: 50,
        height: 50,
        borderRadius: 50,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        right: 25,
        bottom: 25,
        backgroundColor: color1,
    }
})

export default style
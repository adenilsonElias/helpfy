import { StyleSheet } from 'react-native'
import { color1, color2, fontTitle } from '../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',        
    },
    containerBody: {
        flex: 2
    },
    title: {
        marginTop: 20,
        marginLeft: 10,
        color: color1,
        textShadowColor: color2, 
        fontSize: 30,
        fontFamily: fontTitle,
        textShadowOffset: { width: 1, height: 0 },
        textShadowRadius: 10,         
    },
})

export default style
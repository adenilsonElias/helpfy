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
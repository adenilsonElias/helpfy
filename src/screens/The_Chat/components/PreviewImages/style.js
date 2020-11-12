import { Dimensions, StyleSheet } from 'react-native'
import { color2 } from '../../../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: color2
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    sendButton: {
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: 'center',
        position: 'absolute',
        bottom: Dimensions.get('window').height * 1 / 7,
        backgroundColor: color2,
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    backButton: {
        justifyContent: 'center',
        alignItems: "center",
        position: 'absolute',
        top: 30,
        left: 30,
        backgroundColor: color2,
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    containerInputText: {
        backgroundColor: "transparent",
        position: "absolute",
        bottom: Dimensions.get('window').height / 4
    }
})

export default style
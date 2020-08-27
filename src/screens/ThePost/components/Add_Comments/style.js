import { StyleSheet, Dimensions } from 'react-native'
import { color1 } from '../../../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        width: Dimensions.get("screen").width,        
        bottom: 0,
        padding: 0,
        position: 'absolute',
        padding: '1%',        
    },
    avatarContainer: {
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {        
        width: '100%',        
        alignItems: 'center',
        flexDirection: 'row',
    },
    input: {
        width: '80%',
        color: color1
    },
    sendButton: {
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default style
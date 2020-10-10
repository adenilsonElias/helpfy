import { StyleSheet, Dimensions } from 'react-native'
import { color1 } from '../../../../global/constant/constant'

const style = StyleSheet.create({
    container: {        
        width: '100%',        
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: '1%',
        paddingVertical: '1%'
    },
    avatarContainer: {
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '80%',
        color: color1,
    },
    sendButton: {
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default style
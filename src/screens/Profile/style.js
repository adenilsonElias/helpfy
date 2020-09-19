import { StyleSheet } from 'react-native'
import { color1 } from '../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    settingButton: {
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
import { Dimensions, StyleSheet } from 'react-native'
import { color1, color2 } from '../../../../global/constant/constant'

const style = StyleSheet.create({
    container: {        
        flexDirection: 'row',
        height: Dimensions.get('window').width * (1 / 2.7),
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').width * (1 / 2.7),
        width: Dimensions.get('window').width * (1 / 3),
    },
    infoText: {
        fontSize: 24,
        color: color1
    },
    imageProfileContainer: {
        borderRadius: 120,
        height: 120,
        width: 120,
        backgroundColor: color2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageProfile: {
        height: 100,
        width: 100,
        borderRadius: 100,
        resizeMode: 'stretch',
    },
})

export default style
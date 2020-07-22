import { StyleSheet, Dimensions } from 'react-native'
import { color3, color2, borderRadius } from '../../../global/constant/constant'

const style = StyleSheet.create({
    buttonContainer: {
        height: 70,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer2: {
        height: 70,
        flexDirection: 'row',
        alignContent: 'center',        
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingLeft: 40,
        paddingRight: 20
    },
    buttonText: {
        fontSize: 20,
        color: color2,
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    wantButton: {
        height: 45,
        width: Dimensions.get('window').width * 3 / 5,
        borderRadius: borderRadius,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: color3
    },
})

export default style
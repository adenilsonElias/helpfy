import { Dimensions, StyleSheet } from 'react-native'
import { color1, color2 } from '../../../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(182, 43, 43)',
        flexDirection: "row",
        width: Dimensions.get('window').width * 1 / 3,
        height: 40,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 15,
        alignSelf: 'center',
        justifyContent: "space-evenly",
        alignItems: 'center'
    },
    textButton:{
        color: color2
    }
})

export default style
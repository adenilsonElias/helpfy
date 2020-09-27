import { Dimensions, StyleSheet } from 'react-native'
import { color1 } from '../../../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        margin: '5%',
    },
    titleContainer: {
        flexDirection: 'row',
        marginBottom: '5%',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 16,
        color: color1,
        marginRight: '3%'

    },
    photoCntainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: Dimensions.get('window').width * 2 / 4,
        width: Dimensions.get('window').width * 3 / 4,
        borderRadius: 10,
        resizeMode: "cover"
    }
})

export default style
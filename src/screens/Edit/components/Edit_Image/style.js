import { StyleSheet } from 'react-native'
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
    }
})

export default style
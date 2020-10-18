import { StyleSheet} from 'react-native'
import { color1 } from '../../../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20,
        flexWrap: "wrap"
    },
    text: {
        fontSize: 20,
    },
    highlightText: {
        color: color1,
        fontStyle: "italic"
    }
})

export default style
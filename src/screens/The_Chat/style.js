import { Dimensions, StyleSheet} from 'react-native'
import { color1, color2 } from '../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        backgroundColor: color2
    },
    input: {
        color: color1,
    },
    image: {
        width: Dimensions.get('window').width * 3 / 5,
        height: Dimensions.get('window').width * 2 / 5,
        borderRadius: 5,
        margin: 3,
        resizeMode: "cover",
    }
})

export default style
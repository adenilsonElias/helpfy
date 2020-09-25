import { StyleSheet} from 'react-native'
import { color1, color2 } from '../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        backgroundColor: color2
    },
    input: {
        color: color1,
    }
})

export default style
import { StyleSheet, Dimensions } from 'react-native'
import { color2 , color3 } from '../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: "contain",
        backgroundColor: color2,
    },
    descriptionContainer: {
        minHeight: 40,
        flex: 1,
        padding: 10,
        backgroundColor: color3,
    },
    descriptionText: {
        fontSize: 15,
        textAlign: "justify"
    },
    commentContainer: {
        flex: 1,
        backgroundColor: color3,
    }
})

export default style
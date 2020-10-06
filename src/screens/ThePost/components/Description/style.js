import { StyleSheet } from 'react-native'
import { color1, color4 } from '../../../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    rowContainer: {
        flexDirection: 'row'
    },
    titleText: {
        fontSize: 15,
        textAlign: "justify",
        color: color1
    },
    descriptionInfo: {
        fontSize: 15,
        textAlign: "justify",
        color: color4
    },
})

export default style
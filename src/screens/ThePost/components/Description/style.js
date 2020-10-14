import { StyleSheet } from 'react-native'
import { color1, color4 } from '../../../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        width: '100%',
    },
    rowContainer: {
        flexDirection: 'row',
        width: '100%',        
    },
    titleText: {
        fontSize: 15,
        textAlign: "justify",
        color: color1,
    },
    descriptionInfo: {
        fontSize: 15,
        textAlign: "justify",
        color: color4,
        flexShrink: 1
        // backgroundColor: 'red',
        // width: '100%'
    },
})

export default style
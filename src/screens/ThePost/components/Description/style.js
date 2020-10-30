import { StyleSheet } from 'react-native'
import { color1, color4 } from '../../../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        width: '100%',
    },
    titleContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
        // backgroundColor: 'red',
    },
    rowContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 5,
        // borderWidth: 1
    },
    titleText: {
        fontSize: 25,
        textAlign: "center",
        color: color1,
    },
    typeText: {
        fontSize: 16,
        color: color1,
        // paddingVertical: 2
    },
    descriptionInfo: {
        fontSize: 16,
        textAlign: "justify",
        color: color4,
        flexShrink: 1,
        // paddingVertical: 2
        // backgroundColor: 'red',
        // width: '100%'
    },
})

export default style
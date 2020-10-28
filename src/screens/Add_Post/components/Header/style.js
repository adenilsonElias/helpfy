import { StyleSheet } from 'react-native'
import { color1, color2, fontTitle } from '../../../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        backgroundColor: color2,
        elevation: 4,
        borderBottomColor: 'rgb(216, 216, 216)',
        shadowColor: 'rgb(216, 216, 216)',
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    titleText: {
        fontSize: 30,
        fontFamily: fontTitle,
        color: color1
    }
})

export default style
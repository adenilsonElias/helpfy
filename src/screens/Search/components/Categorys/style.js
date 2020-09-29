import { StyleSheet, Dimensions } from 'react-native'
import { color1, color2, fontTitle } from '../../../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width / 2,
        backgroundColor: color2
    },
    iconCateogry: {
        width: Dimensions.get('window').width / (5 / 2),
        height: Dimensions.get('window').width / (5 / 2),
        resizeMode: "contain",
        margin: 10,
        borderRadius: 15,
    },
    textCategory: {
        color: color1,
        textShadowColor: color2, 
        textShadowOffset: { width: 1, height: 3 },
        textShadowRadius: 15,
        fontSize: 25,
        fontFamily: fontTitle,		
		textAlignVertical: "center",
		textAlign: "center",
    }
})

export default style
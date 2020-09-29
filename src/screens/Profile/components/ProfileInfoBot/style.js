import { StyleSheet } from 'react-native'
import { color1, color4 } from '../../../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        padding: 10,
        borderTopWidth: 0.5,
        borderColor: 'black',
        backgroundColor: 'transparent',
        flexDirection: 'row'
    },
    iconContainer: {
        justifyContent: 'center'
    },
    profileContent: {
        fontWeight: 'bold',
        textAlign: 'justify',
        fontSize: 22,
        paddingLeft: 10,
        color: color1,
        fontStyle: "italic"
    },
    profileHeader: {
        textAlign: 'justify',
        fontSize: 15,
        paddingLeft: 10,
        color: color4,
        fontStyle: "italic"
    },
    contentContainer: {
		flex: 1,
	},
})

export default style
import { Dimensions, StyleSheet } from 'react-native'
import { color1 } from '../../../../global/constant/constant'

const style = StyleSheet.create({
    container:{
        // flex: 1,
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: '5%'
    },
    buttom: {
        height: 45,
        width: '45%',
        borderRadius: 5,                
        justifyContent: 'center',
		alignContent: 'center',
        backgroundColor: color1,
        width: Dimensions.get('window').width * 2 / 5
    },
    buttomText: {
        fontSize: 20,
        color: 'white',
        textAlignVertical: 'center',
        textAlign: 'center'
    },
})

export default style
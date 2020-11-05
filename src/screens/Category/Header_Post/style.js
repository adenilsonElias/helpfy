import { StyleSheet, Dimensions } from 'react-native'
import { color1, color2, color4, fontTitle } from '../../../global/constant/constant'

const style = StyleSheet.create({
    container: {        
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: '100%'
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',    
        width: '75%',    
    },
    name: {
        marginLeft: 10,
        fontFamily: fontTitle,        
        fontSize: 28,
        color: color1,
        maxWidth: '75%',        
    },
    timeContainer:{
        width: '25%',
        flexDirection: 'row',
        justifyContent: "flex-end"        
    },
    textTimestamp: {
        color: color4,
        fontSize: 12,
		textAlignVertical: "center",
        textAlign: "right",
        paddingHorizontal: 5
    }
})

export default style
import { StyleSheet, Dimensions } from 'react-native'
import { color1, color2, color4 } from '../../../global/constant/constant'

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
    profile: {
        height: 40,
        width: 40,
        borderWidth: 2,
        borderRadius: 40,
        borderColor: color1,
        marginRight: 20,
        backgroundColor: color2
    },
    name: {        
        fontFamily: 'shelter',        
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
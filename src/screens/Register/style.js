import { StyleSheet } from "react-native"
import { color1, color2, fontTitle } from "../../global/constant/constant"
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: '10%'
    },
    title: {       
        fontSize: 50,
        color: color1,
        fontFamily: fontTitle
    },
    buttom: {
        height: 45,
        width: '45%',
        borderRadius: 5,                
        justifyContent: 'center',
		alignContent: 'center',
		backgroundColor: color1
    },
    buttomText: {
        fontSize: 20,
        color: color2,
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    input: {                
        backgroundColor: 'transparent',
        height: 45,
        borderRadius: 5,
        borderWidth: 1,
        color: color1,
        fontSize: 16,
        paddingLeft: '15%',
        width: '90%',        
    },
    inputContainer: {
        marginBottom: 20,
        width: '100%',    
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        position: 'absolute',
        left: '10%'
    }
})

export default style
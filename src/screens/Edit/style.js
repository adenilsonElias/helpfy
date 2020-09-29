import { StyleSheet } from "react-native"
import { color1, color2, fontTitle } from "../../global/constant/constant"
 
const style = StyleSheet.create({
    container: {
        flex: 1,        
        paddingBottom: '10%',
        backgroundColor: color2,
    },
    title: {       
        fontSize: 50,
        color: color1,
        fontFamily: fontTitle
    },
    input: {                
        backgroundColor: 'transparent',
        height: 45,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: color1,
        color: color1,
        fontSize: 16,
        paddingLeft: '15%',
        width: '90%',        
    },
    inputContainer: {
        marginBottom: '5%',
        width: '100%',    
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        position: 'absolute',
        left: '10%'
    },
    btnEye: {
        position: 'absolute',
        right: '10%'
    },
    save: {
        marginRight: 10,
    },
})

export default style
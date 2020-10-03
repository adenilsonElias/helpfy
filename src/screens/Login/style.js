import { StyleSheet } from "react-native"
import { color1, color2, fontTitle } from '../../global/constant/constant'
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color2
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: '20%'
    },
    title: {       
        fontSize: 50,
        color: color1,
        fontFamily: fontTitle
    },
    buttom: {
        height: 45,
        marginBottom: 20,
        width: '45%',
        borderRadius: 5,                
        justifyContent: 'center',
		alignContent: 'center',
		backgroundColor: color1
    },
    buttomText: {
        fontSize: 20,
        color: 'white',
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    input: {                
        backgroundColor: 'transparent',
        height: 45,
        borderWidth: 1,
        borderRadius: 5,
        color: color1,
        fontSize: 16,
        paddingLeft: '15%',
        paddingRight: '5%',
        width: '90%',
        alignSelf: 'center',
        borderColor: color1
    },
    inputContainer: {
        marginBottom: 20,
        width: '100%',    
        justifyContent: 'center',        
    },
    btnEye: {
        position: 'absolute',
        right: '10%'
    },
    icon: {
        position: 'absolute',
        left: '10%'
    }
})

export default style
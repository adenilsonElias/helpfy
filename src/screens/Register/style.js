import { StyleSheet } from "react-native"
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',        
    },
    buttom: {
        height: 45,
        marginBottom: 20,
        width: '45%',
        borderRadius: 25,                
        justifyContent: 'center',
		alignContent: 'center',
		backgroundColor: 'blue'
    },
    buttomText: {
        fontSize: 20,
        color: 'white',
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    input: {                
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        height: 45,
        borderRadius: 25,
        color: '#fff',
        fontSize: 16,
        paddingLeft: 45,
        marginHorizontal: 25,        
    },
    inputContainer: {
        marginBottom: 20,
        width: '100%',    
        justifyContent: 'center',        
    },
    btnEye: {
        position: 'absolute',
        top: 230,
        right: 45
    },
})

export default style
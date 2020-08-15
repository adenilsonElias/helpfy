import { StyleSheet } from "react-native"
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',        
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 40
    },
    title: {       
        fontSize: 50,
        color: 'black',
        textShadowColor: '#fff', 
        textShadowOffset: { width: 1, height: 0 },
        textShadowRadius: 10,        
    },
    buttom: {
        height: 45,
        marginBottom: 20,
        width: '45%',
        borderRadius: 5,                
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
        borderRadius: 5,
        color: '#fff',
        fontSize: 16,
        paddingLeft: 45,
        // marginHorizontal: 25,
        width: '80%',
        alignSelf: 'center'
    },
    inputContainer: {
        marginBottom: 20,
        width: '100%',    
        justifyContent: 'center',
    },
    btnEye: {
        position: 'absolute',
        right: '15%'
    },
})

export default style
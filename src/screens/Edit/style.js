
import { StyleSheet } from "react-native"
import { color1, color2, fontTitle } from "../../global/constant/constant"

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    editPhoto: {
        marginLeft: 20,
        marginTop: 15,
        flexDirection: 'row' 
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 125,
        backgroundColor: 'black',
    },
    editInfo: {
        marginLeft: 20,
        marginTop: 15,
    },
    textInfo: {
        fontWeight: 'bold',
        marginLeft: 5,
        marginBottom: 2
    },
    input: {                
        backgroundColor: 'transparent',
        borderRadius: 5,
        borderWidth: 1,
        color: 'black',
        fontSize: 16,
        paddingLeft: '5%',
        width: '95%',
        backgroundColor: '#E5E5E5'   
    },
    editPicker: {
        borderRadius: 5,
        borderWidth: 1,
        fontSize: 16,
        paddingLeft: '5%',
        width: '95%',
        backgroundColor: '#E5E5E5',
        color: 'white',
    },
    buttom: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,        
        width: '40%',
        borderRadius: 5,
        backgroundColor: color1,
        marginLeft: 30,
        marginHorizontal: '5%',
        marginTop: 30  
    },
    buttomText: {
        fontSize: 20,
        color: color2,
        textAlign: 'center'
    },
    placeholderStyle: {
        color: color1,
        backgroundColor: color2,
    }
})

export default style
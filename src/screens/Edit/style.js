
import { StyleSheet } from "react-native"
import { color1, color2, color3, fontTitle } from "../../global/constant/constant"

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: color2,
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
        backgroundColor: color2,
        height: 50,
        justifyContent: 'center',
        marginHorizontal: 10,
        borderRadius: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: color1
    },
    textInfo: {
        fontWeight: 'bold',
        marginLeft: 5,
        marginBottom: 2
    },
    input: {                
        color: color1,
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

export const placeholderValue = {
    label: 'Selecione a categoria...',
    value: 'Selecione a categoria...',
    color: color3
}

export const placeHolderStyle = {
    placeholder: {
        color: color1,
        backgroundColor: color2,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: color1
    },
    inputAndroid: {
        backgroundColor: color2,
        color: color1,
        height: 50,
        justifyContent: 'center',
        marginHorizontal: 10,
        borderRadius: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: color1
    },
}


import { StyleSheet } from "react-native"
import { color1, fontTitle, styleTitle, color2, color3 } from '../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: color2,
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
    input: {                
        color: color1, 
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
    }
})

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

export default style
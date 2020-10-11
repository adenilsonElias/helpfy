import { StyleSheet, Dimensions } from 'react-native'
import { color1, fontTitle, styleTitle, color2, color3 } from '../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: color2,
    },
    inputContainer: {
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
    inputDescriptionContainer:{
        height: 150, 
        justifyContent: "flex-start",
        marginBottom: 10
    },
    pickerSelect: {
        backgroundColor: color1
    },
    save: {
        marginRight: 10,
    },
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
        borderColor: color1,
        paddingRight: 10
    },
}


export default style
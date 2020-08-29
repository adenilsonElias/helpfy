import { StyleSheet, Dimensions } from 'react-native'
import { color1, fontTitle, styleTitle, color2, color3 } from '../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
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
    pickerSelect: {
        backgroundColor: color1
    },
    buttonContainer: {        
        height: 40,
        width: Dimensions.get('window').width * 1 / 2,
        backgroundColor: color1,
        marginVertical: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    button: {        
        height: '100%',
        width: '100%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: color2,
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
        borderColor: color1
    },
}


export default style
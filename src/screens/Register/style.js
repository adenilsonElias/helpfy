import { Dimensions, StyleSheet } from "react-native"
import { color1, color2, color3, fontTitle } from "../../global/constant/constant"
 
const style = StyleSheet.create({
    container: {
        // flex: 1,
        paddingTop: '20%',
        paddingBottom: '10%',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: color2
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
    input: {                
        backgroundColor: 'transparent',
        height: 45,
        borderRadius: 5,
        borderWidth: 1,
        color: color1,
        fontSize: 16,
        paddingLeft: '15%',
        width: '90%',
        borderColor: color1
    },
    inputContainer: {
        marginBottom: '5%',
        width: '100%',    
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        position: 'absolute',
        left: '10%',
    },
    buttomContainer: {
        width: '100%',
        flexDirection: 'row',        
        justifyContent: 'center'
    },
    buttom: {
        justifyContent: 'center',
        height: 45,        
        width: '40%',
        borderRadius: 5,
        backgroundColor: color1,
        marginTop: '5%',
        marginHorizontal: '5%'
    },
    buttomText: {
        fontSize: 20,
        color: color2,
        // textAlignVertical: 'center',
        textAlign: 'center'
    },
    btnEye: {
        position: 'absolute',
        right: '10%'
    },
    pickerIcon: { 
        position:'absolute',
        right: Dimensions.get('window').width * 0.83,
        // backgroundColor: 'red',
        marginVertical: 13
    }
})

export const placeholderValue = {
    label: 'Selecione um estado',
    value: 'Selecione um estado',
    color: color3
}

export const placeholderValue2 = {
    label: 'Selecione uma cidade',
    value: 'Selecione uma cidade',
    color: color3
}

export const placeHolderStyle = {
    placeholder: {
        color: color1,
        backgroundColor: color2,
        borderRadius: 5,
        paddingLeft: '15%',
        borderWidth: 1,
        borderColor: color1,
        width: '90%',
        marginHorizontal: '5%',
        fontSize: 16,
        marginBottom: '5%',
    },
    inputAndroid: {
        backgroundColor: color2,
        color: color1,
        height: 50,
        justifyContent: 'center',
        marginHorizontal: '5%',
        borderRadius: 5,
        paddingLeft: '15%',
        borderWidth: 1,
        borderColor: color1,
        marginBottom: '5%',
        fontSize: 16,
    },
}

export default style
import { StyleSheet, Dimensions } from 'react-native'
import { color1, color2 } from '../../../../global/constant/constant'

const style = StyleSheet.create({
    container:{
        flex: 1
    },
    containerSearchBar: {
        width: '100%',
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
    inputContainer: {
        backgroundColor: 'transparent'
    },
    input: {
        color: color1, 
        marginLeft: 0
    },  
})

export const placeholderTextColor = color1

export default style
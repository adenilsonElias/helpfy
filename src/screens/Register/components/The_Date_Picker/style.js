import { StyleSheet } from 'react-native'
import { color1 } from '../../../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: "center",
        marginBottom: '5%',
    },
    dateIcon: {
        position: 'absolute',
        left: 0,
        marginLeft: '5.5%',
    },
})

export const customStyles = {    
    dateInput: {
        borderRadius: 5,
        height: 45,
        borderColor: color1,
    },
    placeholderText: {
        color: color1,
        fontSize: 16,
        alignSelf: "flex-start",
        marginLeft: '16%',
    },
    dateText: {
        color: color1,
        fontSize: 16,
        alignSelf: "flex-start",
        marginLeft: '16%',
    }
}

export default style
import { StyleSheet } from 'react-native'
import { color1 } from '../../../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        flex: 1,        
        width: '98%',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: '2%',        
        marginVertical: 2,
    },
    input: {
        width: '90%',
        color: color1,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        height: '80%'
    },
    sendButton: {        
        alignItems: 'center',
        justifyContent: 'center',           
        width: '10%',
        height: '80%'        
    }
})

export default style
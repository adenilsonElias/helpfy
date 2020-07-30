import { StyleSheet } from 'react-native'
import { color1, color3 } from '../../../../global/constant/constant'

const style = StyleSheet.create({
    colorText: {
        color: color1
    },
    containerColor: {
        backgroundColor: 'transparent'        
    },
    containerSeparator: {
        height: 1,
        width: '100%',        
        backgroundColor: color3
    }
})

export default style
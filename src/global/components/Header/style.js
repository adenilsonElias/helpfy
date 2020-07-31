import { StyleSheet } from 'react-native'
import { styleTitle, color1, color2 } from '../../constant/constant' 

const style = StyleSheet.create({
    container: {        
        padding: 10,
        width: '100%',
        backgroundColor: color2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleText: styleTitle,
    colorText: {
        color: color1
    }
})

export default style
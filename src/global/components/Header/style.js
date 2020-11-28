import { StyleSheet } from 'react-native'
import { styleTitle, color1, color2 } from '../../constant/constant' 

const style = StyleSheet.create({
    container: {        
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '100%',
        backgroundColor: color2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleText: styleTitle,
    colorText: {
        color: color1
    },
    titleContainer: {
        paddingHorizontal: 5,
        width: '80%'
    }
})

export default style
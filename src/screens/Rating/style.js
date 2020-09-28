import { StyleSheet } from 'react-native'
import { color1, color2 } from '../../global/constant/constant'

const style = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: color2
    },
    containerAddComentario:{
        flexDirection: 'row',
        padding: '2%',
        alignItems: 'center',
    },
    addComentarioText: {
        padding: 10,
        color: color1,
    }
})

export default style
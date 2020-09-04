import { StyleSheet, Dimensions } from 'react-native'
import { color2 , color3, color4, color1 } from '../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color2               
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: "contain",
        backgroundColor: color2,
    },
    descriptionContainer: {
        flex: 1,
        padding: 10,
    },
    descriptionText: {
        fontSize: 15,
        textAlign: "justify",
        color: color4
    },
    comentarioTitleContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    comentariosTitle: {
        padding: 10,
        color: color1,
        fontSize: 20
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
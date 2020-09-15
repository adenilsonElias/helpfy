import { StyleSheet, Dimensions } from 'react-native'
import { color2, color1 } from '../../../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 10,        
        flexDirection: "row",        
    },
    containerImage: {
        marginHorizontal: 10,        
        backgroundColor: color2
    },
    image: {
        width: Dimensions.get('window').width * 3 / (7.5),
        height: Dimensions.get('window').width * 3 / (4.5),
        borderRadius: 5,
        backgroundColor: color2
    },
    addImage: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: color1,
        marginRight: 20,        
    },
    buttonRemove: {
        position: 'absolute',
        right: 0,
        margin: 5,
    }
})

export default style
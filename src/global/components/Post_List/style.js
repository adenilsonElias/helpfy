import { StyleSheet, Dimensions } from 'react-native'
import { color1, color2, styleTitle, fontTitle } from '../../constant/constant'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color2,
        borderRadius: 5,
        marginBottom: 10,
        marginHorizontal: 10,
        shadowColor: 'rgb(0, 0, 0)',
        shadowOpacity: 1,
        elevation: 5,
        shadowRadius: 2
    },
    containerTouch: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,

    },
    post: {
        width: Dimensions.get('window').width * (1 / 4),
        height: Dimensions.get('window').width * (1 / 4),
        resizeMode: "cover",
        margin: 5,
        borderRadius: 5,
    },
    textTitle: {        
        fontSize: 25,
        color: color1,        
    },
    textAuthor: {        
        fontSize: 18,
        color: color1,
    },
    iconContainer: {
        // backgroundColor: 'blue',
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    }

})

export default style
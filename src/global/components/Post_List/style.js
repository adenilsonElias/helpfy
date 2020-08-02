import { StyleSheet, Dimensions } from 'react-native'
import { color1, color2, styleTitle, fontTitle } from '../../constant/constant'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color2,
        borderRadius: 8,
        marginBottom: 10,
        marginHorizontal: 10
    },
    containerTouch:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    post: {
        width: Dimensions.get('window').width * (1 / 5),
        height: Dimensions.get('window').width * (1 / 5),
        resizeMode: "cover",
        margin: 10,        
        borderRadius: 8,        
    },
    textTitle:{
        fontFamily: fontTitle,
        fontSize: 30,
        color: color1
    },
    textAuthor: {
        fontFamily: fontTitle,
        fontSize: 18,
        color: color1,            
    },
    iconContainer:{
        // backgroundColor: 'blue',
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    }
    
})

export default style
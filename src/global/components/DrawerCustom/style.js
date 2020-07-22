import { StyleSheet } from 'react-native'
import { color1 , color2, color3, fontTitle } from '../../constant/constant'

const style = StyleSheet.create({
    imageBackground: {
        width: undefined, 
        padding: 16,
        paddingTop: 45,        
    },
    perfilContainer: {
        flexDirection: 'row',
        justifyContent: "center",        
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: color1,        
        backgroundColor: color2
    },
    container: {
        flex: 1,    
    },
    name: {
        color: color1,        
        textShadowColor: color1, 
        textShadowOffset: { width: 1, height: 0 },
        textShadowRadius: 10, 
        fontSize: 30,
        marginVertical: 8,
        marginHorizontal: 10,
        fontFamily: fontTitle        
    },
})

export default style
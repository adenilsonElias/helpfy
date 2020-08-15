import { StyleSheet } from 'react-native'
import { color1 , color2, color3, fontTitle } from '../../constant/constant'

const style = StyleSheet.create({
    container: {        
        flex: 1,       
        // backgroundColor: 'yellow',
    },
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
    listItensContainer: {        
        justifyContent: "space-evenly",
        height: '35%'
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
    logoutContainer: {        
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
        paddingBottom: '0%',
        // backgroundColor: 'red',
        // marginTop: -60
    },
    logoutButton: {
        flexDirection: 'row',
        // backgroundColor: 'green',
        alignItems: 'center',
        width: '100%',
        height: 50,
    },
    icon: {
        paddingLeft: 10,
        paddingRight: 30
    },
    text: {
        fontWeight: '500',
        color: color1        
    }
})

export default style
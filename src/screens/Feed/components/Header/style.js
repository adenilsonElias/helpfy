import { StyleSheet, Dimensions } from 'react-native'
import { color1, color2 } from '../../../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        // height: Dimensions.get('window').width / 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: '100%'
    },
    infoContainer: {        
        // backgroundColor: 'blue',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,        
    },
    iconContainer: {        
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10
    },
    profile: {
        height: 40,
        width: 40,
        borderWidth: 2,
        borderRadius: 40,
        borderColor: color1,
        marginRight: 20,
        backgroundColor: color2
    },
    title: {        
        fontFamily: 'shelter',        
        fontSize: 28,
        color: color1,
        // textShadowColor: color2, 
        // textShadowOffset: { width: 1, height: 0 },
        // textShadowRadius: 10, 
    },
    icon: {
        paddingHorizontal: 10              
    }
})

export default style
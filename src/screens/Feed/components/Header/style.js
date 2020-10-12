import { StyleSheet, Dimensions } from 'react-native'
import { color1, color2, fontTitle } from '../../../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
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
        marginHorizontal: 20,
        backgroundColor: color2
    },
    title: {
        fontFamily: fontTitle,        
        fontSize: 28,
        color: color1,
        marginHorizontal: 20
    },
    icon: {
        paddingHorizontal: 10,
    }
})

export default style
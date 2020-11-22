import { StyleSheet } from 'react-native'
import { color1, color2, color3, color4, fontTitle } from '../../constant/constant'

const style = StyleSheet.create({
    profileContainer: {
        padding: 10,
        paddingTop: 40,
        alignItems: 'center',
    },
    perfilContainer: {
        flexDirection: 'row',
        justifyContent: "center",
    },
    listItensContainer: {
        flex: 1
    },
    name: {
        color: color1,
        fontSize: 30,
        marginTop: 25,
        marginBottom: 5,
        fontFamily: fontTitle,        
    },
    badgeContainer: {
        position: 'absolute',
        right: 40,
        top: 100,
        backgroundColor: color2,
        height: 40,
        width: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: color1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    level: {
        color: color1,
        fontSize: 20,
    },
    containerVersion: {
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textVersion: {
        color: color4,
    }
})

export default style
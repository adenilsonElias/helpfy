import { StyleSheet, Dimensions } from 'react-native'
import { color3, color2, borderRadius, color1, color4 } from '../../../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',        
    },
    container2: {
        justifyContent: 'space-around',
        paddingLeft: 40,
        paddingRight: 20
    },
    buttonList:{
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: color1
    },
    buttonText: {
        fontSize: 20,
        color: color1,
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    wantButton: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: borderRadius,
        justifyContent: 'center',
        alignContent: 'center',
        borderWidth: 1,
        borderColor: color1
    },
    infoContainer: {
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    choosedPeopleText: {
        color: color4,
        fontStyle: "italic",
    },
    choosedPeopleConfirmText:{
        color: color1,
        fontStyle: "italic",
    }
})

export default style
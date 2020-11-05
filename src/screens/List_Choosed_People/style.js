import { StyleSheet } from 'react-native'
import { color1, color2 } from '../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: 'center',
        backgroundColor: color2
    },
    containerListItem: {
        flexDirection: 'row',
        height: 60,
        justifyContent: "center",
        alignContent: 'center',
        padding: 10,
        // borderWidth: 1,
    },
    ListItem: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: "center",
    },
    name: {
        marginLeft: 10,
        color: color1,
        fontSize: 20
    },
    containerButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5,
        paddingVertical: 5,
    },
    button: {
        borderWidth: 1,
        borderColor: color1,
        padding: 5,
        marginRight: 15,
        borderRadius: 5
    },
    text: {
        fontSize: 15
    }
})

export default style
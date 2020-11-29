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
        justifyContent: "center",
        alignContent: 'center',
        width: '100%',
        paddingVertical: 10,
    },
    ListItem: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: "center",
        width: '65%',
        paddingLeft: 10,
    },
    name: {
        marginLeft: 10,
        color: color1,
        fontSize: 20,
        flexShrink: 1,
    },
    containerButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around",
        width: '35%',
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    button: {
        borderWidth: 1,
        borderColor: color1,
        padding: 5,
        borderRadius: 5
    },
    text: {
        fontSize: 15
    }
})

export default style
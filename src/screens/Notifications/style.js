import { StyleSheet } from "react-native"
import { color1, color2 } from '../../global/constant/constant'
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color2,
        marginTop: 10
    },
    notificationContainer: {    
        flexDirection: 'row',
        padding: 10,
        backgroundColor: color2,
        borderRadius: 5,
        marginBottom: 10,
        marginHorizontal: 5,
        shadowColor: 'rgb(0, 0, 0)',
        shadowOpacity: 1,
        elevation: 5,
        shadowRadius: 2
    },
    infoContainer: {
        flex: 1,
        width: '100%',
        marginLeft: 10,
        justifyContent: 'space-around',
    },
    author: {
        color: color1,
        fontWeight: 'bold',
    },
    message: {
        flexWrap: 'wrap',
        flex: 1,
        fontStyle: "italic"
    },
})

export default style
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
    profile: {
        height: 40,
        width: 40,
        borderWidth: 2,
        borderRadius: 40,
        borderColor: color1,
        marginRight: 20,        
        backgroundColor: '#fff'
    },
    name: {
        color: color1,
        fontSize: 20
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default style
import { StyleSheet } from 'react-native'
import { color1, color2 } from '../../../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,        
        width: '100%',        
    },
    profile: {
        height: 40,
        width: 40,
        borderWidth: 2,
        borderRadius: 40,
        borderColor: color1,        
        backgroundColor: color2
    },
    infoContainer:{
        flex: 1,
        width: '100%',
        marginLeft: 10,        
    },
    headerContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',        
    },
    author: {
        color: color1,
        fontWeight: 'bold',
    },
    time:{
        paddingHorizontal: 5,
    },
    comment: {
        flexWrap: 'wrap',
        flex: 1,
        textAlign: "justify",
    }
})

export default style
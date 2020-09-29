import { StyleSheet, Dimensions } from 'react-native'
import { color1, color2, fontTitle, color4 } from '../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        // padding: '3%'        
        flex: 1,
        backgroundColor: color2,
    },  
    postContainer: {
        justifyContent: "space-between",
        alignItems: 'center',
        width: '100%',        
        marginBottom: '3%',
        backgroundColor: color2,
        shadowColor: 'rgb(0, 0, 0)',
        shadowOpacity: 1,
        elevation: 5,
        shadowRadius: 2
    },
    iconCateogry: {
        width: '100%',
        height: Dimensions.get('window').width / (5 / 4),
        resizeMode: "cover",       
    },
    textContainer:{
        width: '100%',
        padding: 10,
    },
    textTitle: {                
        color: color1,
        fontSize: 20,
		textAlignVertical: "center",
        textAlign: "center",
        marginBottom: 10,
        
    },
    textDescription: {                
        color: color4,
        fontSize: 17,
		textAlignVertical: "center",
        textAlign: "justify",
        marginBottom: 10,
    },
    locationContainer:{
        width: '100%',        
        paddingHorizontal: 10,
        paddingBottom: 10,
        flexDirection: 'row',        
        justifyContent: 'flex-start',
        alignContent:"center"
    },
    textLocation: {
        color: color4,
        fontSize: 15,        
		textAlignVertical: "center",
        textAlign: "left",
        marginBottom: 10,
        paddingHorizontal: 10
    }    
})

export default style
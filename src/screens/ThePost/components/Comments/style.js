import { StyleSheet } from "react-native";
import { color1, color2, color4 } from '../../../../global/constant/constant';

const style = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingTop: 10,
        width: '100%',        
    },
    containerResponse: {
        paddingLeft: 60
    },
    profile: {
        height: 40,
        width: 40,
        borderWidth: 1,
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
        fontStyle: "italic",
        color: color4
    },
    comment: {
        flexWrap: 'wrap',
        flex: 1,
        textAlign: "justify",
    },
    profileResponse: {
        height: 30,
        width: 30,
    },
    textResponse: {
        color: color1,
        fontStyle: "italic",
        alignSelf: 'flex-start',
        marginLeft: 60,
        marginBottom: 10,
    }
})

export default style
import { StyleSheet } from "react-native";
import { color1, color2, color4 } from '../../../../global/constant/constant';

const style = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingTop: 10,
        width: '100%',
        paddingVertical: 5
    },
    containerResponse: {
        paddingLeft: 60
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
    responseButton: {
        width: 70,
        marginLeft: 60,
        marginBottom: 10,        
    }
})

export default style
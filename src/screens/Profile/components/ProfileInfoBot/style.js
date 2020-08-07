import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    container: {
        padding: 10,
        borderTopWidth: 0.5,
        borderColor: 'black',
        backgroundColor: 'transparent',
        flexDirection: 'row'
    },
    iconContainer: {
        justifyContent: 'center'
    },
    profileText: {
        fontWeight: 'bold',
        textAlign: 'justify',
        fontSize: 22,
        paddingLeft: 10,
        color: 'rgba(225, 22, 94, 0.7)',        
        textShadowColor: '#fff', 
        textShadowOffset: { width: 1, height: 0 },
        textShadowRadius: 10,
    },
    profileItem: {
        textAlign: 'justify',
        fontSize: 15,
        paddingLeft: 10,
        color: "#eee",
    }


})

export default style
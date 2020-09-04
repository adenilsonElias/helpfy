import { StyleSheet, Dimensions } from 'react-native'
import { color2 } from '../../global/constant/constant'

const style = StyleSheet.create({
    container: {        
        flex: 1,
        backgroundColor: color2
    },
    nameContaienr: {        
        height: Dimensions.get('window').width * (1 / 8),
        justifyContent: "center",
        alignItems: 'center'
    },
    nameStyle: {
        fontSize: 24
    },
    scoreContainer: {        
        flexDirection: 'row',
        height: Dimensions.get('window').width * (1 / 2.7),
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageProfileContainer: {
        borderRadius: 120,
        height: 120,
        width: 120,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageProfile: {
        height: 100,
        width: 100,
        borderRadius: 100,
        resizeMode: 'stretch',
    },
    scoreTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').width * (1 / 2.7),
        width: Dimensions.get('window').width * (1 / 3),
    },
    scoreText: {
        fontSize: 24
    },
    bodyContainer: {
        flex: 1
    },
    bodyTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 5,        
    },
    textBodyTitle: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    containerListItem: {        
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
    },
    listTextName: {
        fontSize: 20
    },
    listTextScore: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default style
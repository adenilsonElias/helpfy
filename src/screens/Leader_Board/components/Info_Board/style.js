import { StyleSheet } from 'react-native'
import { color1 } from '../../../../global/constant/constant'

const style = StyleSheet.create({
    container: {        
        flex: 1,
        flexDirection: 'row',
    },
    positionContainer: {
        width: '15%',
        alignItems: 'center',
    },
    nameContainer:{
        width: '60%',
        alignItems: 'center',
    },
    pointsContainer:{
        width: '25%',
        alignItems: 'center',
    },
    normalText: {
        fontSize: 20,
        color: color1    
    },
    boldText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: color1,
    }
})

export default style
import { StyleSheet } from 'react-native'
import { color1 } from '../../../../global/constant/constant'

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 5,        
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: color1
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
    }
})

export default style
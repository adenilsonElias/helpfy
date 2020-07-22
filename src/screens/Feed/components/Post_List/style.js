import { StyleSheet, Dimensions } from 'react-native'

const style = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        width: '100%',
        height: Dimensions.get('window').width / (5/2.25)
    },

})

export default style
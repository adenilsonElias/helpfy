import { Dimensions, StyleSheet } from 'react-native'

const style = StyleSheet.create({
    background: {
        width: '100%',
        height: Dimensions.get("window").width * 3 / 4 ,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default style
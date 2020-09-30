import { Dimensions, StyleSheet } from 'react-native'

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const style = StyleSheet.create({
    container:{
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT+20,        
        padding: 10
    },
    item: {
        resizeMode: "cover",        
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
})

export default style
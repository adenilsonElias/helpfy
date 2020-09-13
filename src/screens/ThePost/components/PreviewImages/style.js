import { StyleSheet, Dimensions } from 'react-native'
import { color1, color2, color4 } from '../../../../global/constant/constant';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 1.4);

const style = StyleSheet.create({
    container: {
        // width: ITEM_WIDTH,
        // height: ITEM_HEIGHT,
    },
    carouselContainer:{
        marginVertical: 5,
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
    },
    item: {
        resizeMode: "contain",
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1
    },
    containerDots: { 
        backgroundColor: 'transparent',
        width: SLIDER_WIDTH,
        paddingHorizontal: 0,
        paddingVertical: 5
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: color1,        
    }
});

export default style
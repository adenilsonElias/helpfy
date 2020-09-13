import React from 'react'
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Post from '../../../../global/components/Post/Post';
import style from './style'

export default PostCarousel = ({ postList }) => {
    const SLIDER_WIDTH = Dimensions.get('window').width;
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);    

    const cards = ({ item, index }) => {
        return (
            <Post key={item.id}
                post={item}
                tamanho={style.item}
            />
        );
    }

    return (
        <Carousel            
            data={postList}
            renderItem={cards}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            containerCustomStyle={style.container}
        />
    )
}
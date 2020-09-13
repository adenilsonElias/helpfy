import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Image, Dimensions } from 'react-native'
import style from './style'
import ImageView from 'react-native-image-view';
import { SliderBox } from "react-native-image-slider-box";
import { color1, color2 } from '../../../../global/constant/constant';
import Carousel, { Pagination } from 'react-native-snap-carousel';

export default PreviewImages = ({ image, post }) => {
    const [images, setImages] = useState(image)
    const [imageIndex, setImageIndex] = useState(0)
    const [visible, setVisible] = useState(false)
    const [posts, setPosts] = useState([])
    const SLIDER_WIDTH = Dimensions.get('window').width;
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

    const convertImagePreview = (arrayImages) => {
        setImages(arrayImages.map((item) => {
            return {
                source: { uri: item },
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height
            }
        }))
    }

    useEffect(() => {
        convertImagePreview(image)
    }, [])


    const cards = ({ item, index }) => {
        return (
            <TouchableOpacity style={style.container}
                onPress={() => {
                    setImageIndex(index)
                    setVisible(true)
                }}>
                <Image source={item.source} style={style.item} />
            </TouchableOpacity>

        );
    }

    return (
        <View style={style.container}>
            <Carousel
                data={images}
                renderItem={cards}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                containerCustomStyle={style.carouselContainer}
                onSnapToItem={(index) => setImageIndex(index)}
            />
            <View>
                <Pagination
                    dotsLength={images.length}
                    activeDotIndex={imageIndex}
                    containerStyle={style.containerDots}                    
                    dotStyle={style.dot}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
            </View>
            {/* <SliderBox images={image}
                imageLoadingColor={color1}
                dotColor={color1}
                sliderBoxHeight={Dimensions.get('window').width * 8 / 9}
                resizeMode={'contain'}
                resizeMethod={'scale'}
                onCurrentImagePressed={(index) => {
                    setImageIndex(index)
                    setVisible(true)
                }}
                inactiveDotColor={color2} /> */}
            <ImageView
                glideAlways
                images={images}
                imageIndex={imageIndex}
                animationType="fade"
                isVisible={visible}
                onClose={() => setVisible(false)} />
        </View>
    )
}
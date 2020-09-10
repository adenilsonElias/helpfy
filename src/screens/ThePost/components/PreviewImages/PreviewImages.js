import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Image, Dimensions } from 'react-native'
import style from './style'
import ImageView from 'react-native-image-view';
import { SliderBox } from "react-native-image-slider-box";
import { color1, color2 } from '../../../../global/constant/constant';

export default PreviewImages = ({ image }) => {
    const [images, setImages] = useState(image)
    const [imageIndex, setImageIndex] = useState(0)
    const [visible, setVisible] = useState(false)

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

    return (
        <View style={style.container}>
            <SliderBox images={image}
                imageLoadingColor={color1}
                dotColor={color1}                
                sliderBoxHeight={Dimensions.get('window').width * 8 / 9}
                resizeMode={'contain'}
                resizeMethod={'scale'}
                onCurrentImagePressed={(index)=> {
                    setImageIndex(index)
                    setVisible(true)
                }}
                inactiveDotColor={color2}/>
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
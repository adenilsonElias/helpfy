import React from 'react'
import { SliderBox } from "react-native-image-slider-box";
import { Dimensions, View } from 'react-native';
import { color1, color2 } from '../../../../global/constant/constant';
import style from './style'

export default SliderBoxImg = (props) => {
    return (
        <View style={style.container}>
            <SliderBox images={props.images}                 
                ImageComponentStyle={style.images}
                // Tamanho da largura menos a soma do tamanho dos paddings horizontais
                parentWidth={Dimensions.get('window').width - 20}
                // sliderBoxHeight={Dimensions.get('window').width}
                imageLoadingColor={color1}
                dotColor={color1}
                inactiveDotColor={color2}
                onCurrentImagePressed={props.pickerImage}
                circleLoop={true} />
        </View>
    )
}
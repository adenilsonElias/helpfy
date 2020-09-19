import React from 'react';
import { ImageBackground, View } from 'react-native';
import style from './style'
import TheAvatar from '../../../../global/components/Avatar/The_Avatar'

export default BackgroundTop = () => {
    return (
        <ImageBackground source={require('../../../../assets/imgs/planeta.jpg')}
            style={style.background} blurRadius={1}>
            <TheAvatar size={'xlarge'} showAccessory={true}/>
        </ImageBackground>
    )
}

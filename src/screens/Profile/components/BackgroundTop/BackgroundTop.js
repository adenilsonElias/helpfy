import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import style from './style'
import TheAvatar from '../../../../global/components/Avatar/The_Avatar'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';
import { color1 } from '../../../../global/constant/constant';

export default BackgroundTop = ({ isMyProfile }) => {
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../../../../assets/imgs/planeta.jpg')}
            style={style.background} imageStyle={style.backgroundStyle}>
                {
                    !isMyProfile ?
                    <TouchableOpacity style={style.buttonContainer}
                        onPress={() => {navigation.goBack()}}>
                        <Icon name='arrow-left' size={30} color={color1} />
                    </TouchableOpacity> : null
                }
            <TheAvatar size={'xlarge'} showAccessory={true} />
        </ImageBackground>
    )
}
import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import style from './style'
import TheAvatar from '../../../../global/components/Avatar/The_Avatar'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';
import { color1 } from '../../../../global/constant/constant';
import ToolbarMid from '../ToolbarMid/ToolbarMid'
import { useSelector } from 'react-redux';
import User from '../../../../model/user';

export default BackgroundTop = ({ isMyProfile }) => {
    const navigation = useNavigation()
    const user: User = useSelector(state => state.userState.user)
    
    return (
        <ImageBackground source={user.converImage ? { uri: user.converImage}
            : require('../../../../assets/imgs/coverDefault.png')}
            style={style.imageBackground} imageStyle={style.backgroundStyle}>
                <View style={style.profileContainer}>
                    {
                        !isMyProfile ?
                        <TouchableOpacity style={style.buttonContainer}
                            onPress={() => {navigation.goBack()}}>
                            <Icon name='arrow-left' size={30} color={color1} />
                        </TouchableOpacity> : null
                    }
                    <TheAvatar size={'xlarge'} showAccessory={false} />
                </View>            
            <ToolbarMid />
        </ImageBackground>
    )
}
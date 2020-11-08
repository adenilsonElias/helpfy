import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import style from './style'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';
import { color1 } from '../../../../global/constant/constant';
import ToolbarMid from '../ToolbarMid/ToolbarMid'
import OtherAvatar from '../../../../global/components/Other_Avatar/OtherAvatar';

export default BackgroundTop = ({ isMyProfile, user }) => {
    const navigation = useNavigation()
    
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
                    <OtherAvatar size={'xlarge'} image={user.profileImage}/>
                </View>            
            <ToolbarMid />
        </ImageBackground>
    )
}
import React from 'react'
import { Avatar } from 'react-native-elements';
import style from './style'
import Icon from 'react-native-vector-icons/Feather'
import { color1 } from '../../constant/constant';

export default OtherAvatar = ({ size, image }) => {
    return (
        <Avatar rounded overlayContainerStyle={style.avatar} size={size}
            source={image ? { uri: image } : require('../../../assets/imgs/profile.jpg')} />
    )
}
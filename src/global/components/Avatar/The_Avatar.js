import React from 'react'
import { Avatar } from 'react-native-elements';
import style, { editIcon } from './style'
import Icon from 'react-native-vector-icons/Feather'
import { color1 } from '../../constant/constant';
import { useSelector } from 'react-redux';

export default TheAvatar = ({ size, image }) => {
    const user = useSelector(state => state.userState.user)

    if(user){
        return(
            <Avatar rounded overlayContainerStyle={style.avatar} size={size} 
                source={image ? { uri: image } : user.profileImage ? 
                    { uri: user.profileImage } : require('../../../assets/imgs/profile.jpg')}/>
        )
    }
    return(
        <Avatar rounded overlayContainerStyle={style.avatar} size={size} 
            source={require('../../../assets/imgs/profile.jpg')}/>
    )
}
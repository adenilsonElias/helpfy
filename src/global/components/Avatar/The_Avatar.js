import React from 'react'
import { Avatar } from 'react-native-elements';
import style, { editIcon } from './style'
import Icon from 'react-native-vector-icons/Feather'
import { color1 } from '../../constant/constant';

export default TheAvatar = ({ size, showAccessory }) => {
    const icon = <Icon name={'edit'} size={32} color={color1} />
    
    return(
        <Avatar rounded title="FF" overlayContainerStyle={style.avatar} size={size}
            showAccessory={showAccessory}/>
    )
}
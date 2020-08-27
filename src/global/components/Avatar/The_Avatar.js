import React from 'react'
import { Avatar } from 'react-native-elements';
import style from './style'

export default TheAvatar = ({ size }) => {
    return(
        <Avatar rounded title="FF" overlayContainerStyle={style.avatar} size={size}/>
    )
}
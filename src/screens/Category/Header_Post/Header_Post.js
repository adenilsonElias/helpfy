import React, { useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import style from './style'
import { color4 } from '../../../global/constant/constant'
import Icon from 'react-native-vector-icons/Feather';
import moment from 'moment';
import OtherAvatar from '../../../global/components/Other_Avatar/OtherAvatar'

export default HeaderPost = (props) => {
    const timePost = moment(props.timePost).startOf('hour').fromNow()

    return(
        <View style={style.container}>
            <View style={style.infoContainer}>
                <OtherAvatar size={40} image={props.image}/>
                <Text numberOfLines={1} style={style.name}>{props.name}</Text>
            </View>
            <View style={style.timeContainer}>
                <Text style={style.textTimestamp}>{timePost}</Text>
                <Icon name={'clock'} size={20} color={color4}/>
            </View>
        </View>       
    )
}
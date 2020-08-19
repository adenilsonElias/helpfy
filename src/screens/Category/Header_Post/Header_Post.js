import React, { useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import style from './style'
import { color4, converTime } from '../../../global/constant/constant'
import Icon from 'react-native-vector-icons/Feather';
import moment from 'moment';

export default HeaderPost = (props) => {
    
    const timePost = moment(props.timePost).startOf('hour').fromNow()
    
    useEffect(() => {
        converTime()
    }, [])

    return(
        <View style={style.container}>
            <View style={style.infoContainer}>                
                <Image source={require('../../../assets/imgs/icon.png')} style={style.profile} />
                <Text numberOfLines={1} style={style.name}>{props.name}</Text>
            </View>
            <View style={style.timeContainer}>
                <Text style={style.textTimestamp}>{timePost}</Text>
                <Icon name={'clock'} size={20} color={color4}/>
            </View>
        </View>       
    )
}
import React, { useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import style from './style'
import { color4 } from '../../../global/constant/constant'
import Icon from 'react-native-vector-icons/Feather';
import 'moment';
import 'moment/locale/pt-br';
import moment from 'moment-timezone';
moment().locale('pt-br');
import OtherAvatar from '../../../global/components/Other_Avatar/OtherAvatar'
import { useNavigation } from '@react-navigation/native';

export default HeaderPost = ({ timePost, author }) => {
    const timePosts = moment(timePost).startOf('hour').fromNow()
    const navigation = useNavigation()

    function handleNavigation() {
        navigation.navigate("User-Profile", { user: author })
    }

    return(
        <View style={style.container}>
            <View style={style.infoContainer}>
                <TouchableOpacity onPress={handleNavigation}>
                    <OtherAvatar size={40} image={author ? author.profileImage : null}/>
                </TouchableOpacity>
                <Text numberOfLines={1} style={style.name}>{author ? author.name : null}</Text>
            </View>
            <View style={style.timeContainer}>
                <Text style={style.textTimestamp}>{timePosts}</Text>
                <Icon name={'clock'} size={20} color={color4}/>
            </View>
        </View>       
    )
}
import React, { useContext } from 'react';
import {
    View,
    Text,
    Button, 
} from 'react-native'
import style from './style'
import Icon from 'react-native-vector-icons/Feather'

export default ProfileInfoBot = () => {

    return(
        <View style={style.container}>
            <View style={style.iconContainer}>
                <Icon name={props.icon} size={32} color='rgba(225, 22, 94, 0.4)'
                style={style.Icon} />
            </View>
            <View style={style.conteudoContainer}>
                <Text style={style.profileText}
                    numberOfLines={1}>{props.item} </Text>
                <Text style={style.profileItem}
                    numberOfLines={1}>{props.title}</Text>
            </View>
        </View> 
    )

}
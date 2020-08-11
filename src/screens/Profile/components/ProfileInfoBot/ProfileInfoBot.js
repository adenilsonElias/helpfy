import React, { useContext } from 'react';
import {
    View,
    Text,
    Button, 
} from 'react-native'
import style from './style'
import Icon from 'react-native-vector-icons/Feather'

export default ProfileInfoBot = (props) => {

    return(
        <View style={style.container}>
            <View style={style.iconContainer}>
                <Icon name={props.icon} size={32} color='rgba(225, 22, 94, 0.4)'
                style={style.Icon} />
            </View>
            <View style={style.contentContainer}>
                <Text style={style.profileContent}
                    numberOfLines={1}>{props.content} </Text>
                <Text style={style.profileHeader}
                    numberOfLines={1}>{props.title}</Text>
            </View>
        </View> 
    )

}
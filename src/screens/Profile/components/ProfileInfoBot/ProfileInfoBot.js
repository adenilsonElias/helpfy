import React, { useContext } from 'react';
import style from './style'
import { color1 } from '../../../../global/constant/constant';
import Icon from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import { Text, View } from 'react-native';

export default ProfileInfoBot = (props) => {
    const icon = props.icon ? 
        <Icon name={props.icon} size={32} color={color1} style={style.Icon} /> :
        <Icon2 name={props.icon2} size={32} color={color1} style={style.Icon} />

    return(
        <View style={style.container}>
            <View style={style.iconContainer}>
                { icon }
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
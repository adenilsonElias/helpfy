import React, { useEffect } from 'react'
import { View, Image, Text } from 'react-native'
import style from './style'
import moment from 'moment';

export default Responses = ({ itens }) => {    
    return (
        <View style={[style.container, style.containerResponse]}>
            <Image source={require('../../../../assets/imgs/icon.png')}
                style={[style.profile, style.profileResponse]} />
            <View style={style.infoContainer}>
                <View style={style.headerContainer}>
                    <Text style={style.author}>{itens.author}</Text>
                    <Text style={style.time}>{moment(itens.timeCreated).fromNow()}</Text>
                </View>
                <Text style={style.comment}>{itens.message}</Text>
            </View>
        </View>
    )
}
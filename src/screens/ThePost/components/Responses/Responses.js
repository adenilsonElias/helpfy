import React, { useEffect } from 'react'
import { View, Image, Text } from 'react-native'
import style from './style'
import moment from 'moment';

export default Responses = ({ itens }) => {
    return (
        <View>
            { itens ? itens.map((item, index) => {
                return (
                    <View style={[style.container, style.containerResponse]} key={index}>
                        <Image source={require('../../../../assets/imgs/icon.png')}
                            style={[style.profile, style.profileResponse]} />
                        <View style={style.infoContainer}>
                            <View style={style.headerContainer}>
                                <Text style={style.author}>{item.author}</Text>
                                <Text style={style.time}>{moment(item.timeCreated).fromNow()}</Text>
                            </View>
                            <Text style={style.comment}>{item.message}</Text>
                        </View>
                    </View>
                )
            }) : null }
        </View>
    )
}
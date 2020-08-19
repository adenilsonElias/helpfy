import React, { useEffect } from 'react'
import { FlatList, View, Text, Image } from 'react-native'
import style from './style'
import moment from 'moment';
import { converTime } from '../../../../global/constant/constant'

export default Comments = ({ parameter }) => {

    useEffect(() => {
        converTime()
    }, [])

    return (
        <FlatList
            data={parameter.comentarios}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
                return (
                    <View style={style.container}>
                        <Image source={require('../../../../assets/imgs/icon.png')}
                            style={style.profile} />
                        <View style={style.infoContainer}>
                            <View style={style.headerContainer}>
                                <Text style={style.author}>{item.author}</Text>
                                <Text style={style.time}>{moment(item.timeCreated).startOf('hour').fromNow()}</Text>
                            </View>
                            <Text style={style.comment}>{item.message}</Text>
                        </View>
                    </View>
                )
            }}
        />
    )
}
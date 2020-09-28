import React from 'react'
import { View, Text, Image } from 'react-native'
import style from './style'
import moment from 'moment';

const Comments = ({ index, comentario }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={style.container}>
                <Image source={require('../../../../assets/imgs/icon.png')}
                    style={style.profile} />
                <View style={style.infoContainer}>
                    <View style={style.headerContainer}>
                        <Text style={style.author}>{comentario.author}</Text>
                        <Text style={style.time}>{moment(comentario.timeCreated).fromNow()}</Text>
                    </View>
                    <Text style={style.comment}>{comentario.message}</Text>
                </View>
            </View>
        </View>
    )
}

export default Comments
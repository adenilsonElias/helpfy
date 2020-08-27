import React, { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import style from './style'
import { TouchableOpacity, FlatList, TextInput } from 'react-native-gesture-handler'
import moment from 'moment';
import { converTime } from '../../../../global/constant/constant'
import Responses from '../Responses/Responses'
import Add_Comments from '../Add_Comments/Add_Comments'

const Comments = ({ index, comentario, setResponseField, toggleOverlay }) => {

    useEffect(() => {
        converTime()
    }, [])

    return (
        <View>
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
            <Responses itens={comentario.response} />
            <View style={{ width: '100%' }}>                
                <View style={style.responseButton}>
                    <TouchableOpacity onPress={() => {
                        setResponseField(index)
                        toggleOverlay('response')                        
                    }}>
                        <Text style={style.textResponse}>Responder</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Comments
import React, { useState, useEffect, useContext } from 'react'
import { View, Text, Image } from 'react-native'
import style from './style'
import { TouchableOpacity, FlatList, TextInput } from 'react-native-gesture-handler'
import moment from 'moment';
import { converTime } from '../../../../global/constant/constant'
import Responses from '../Responses/Responses'
import Add_Comments from '../Add_Comments/Add_Comments'
import AuthContext from '../../../../context/auth_context';

const Comments = ({ index, comentario, setResponseField, toggleOverlay }) => {
    const auth = useContext(AuthContext)

    useEffect(() => {
        converTime()
    }, [])

    const responder = auth.isLogged ?
        <Text style={style.textResponse} onPress={() => {
            setResponseField(index)
            toggleOverlay('response')
        }}>Responder</Text> : null

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
            <Responses itens={comentario.response} />
            { responder }
        </View>
    )
}

export default Comments
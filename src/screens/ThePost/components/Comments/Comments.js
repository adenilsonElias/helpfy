import React, { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import style from './style'
import { TouchableOpacity, FlatList, TextInput } from 'react-native-gesture-handler'
import moment from 'moment';
import { converTime } from '../../../../global/constant/constant'
import AddResponse from '../Add_Response/Add_Response'
import Responses from '../Responses/Responses'

const Comments = ({ post, index, responseField, setResponseField, user, comentario, parameter }) => {    

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
                        <Text style={style.time}>{moment(comentario.timeCreated).startOf('hour').fromNow()}</Text>
                    </View>
                    <Text style={style.comment}>{comentario.message}</Text>
                </View>
            </View>
            <View>
                <FlatList
                    data={comentario.response}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <Responses itens={item}/>
                        )
                    }}
                />
            </View>
            <View style={{ width: '100%' }}>
                {
                    responseField == index && !parameter.renderInput ?
                        <AddResponse
                            comentario={comentario}
                            post={post}
                            user={user}
                            parameter={parameter} />
                        :
                        <View style={style.responseButton}>
                            <TouchableOpacity onPress={() => {
                                setResponseField(index)
                                parameter.setRenderInput(false)
                            }}>
                                <Text style={style.textResponse}>Responder</Text>
                            </TouchableOpacity>
                        </View>
                }
            </View>
        </View>
    )
}

export default Comments
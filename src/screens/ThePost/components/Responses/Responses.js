import React, { useEffect, useState } from 'react'
import { View, Image, Text } from 'react-native'
import style from './style'
import moment from 'moment';
import Comentario from '../../../../model/comments';
import User from '../../../../model/user';
import { getUserByRef } from '../../../../firebase/Authentication';

type Props = {
    response: Comentario
}

export default Responses = ({ response }: Props) => {

    const [author,setAuthor] = useState(new User({}))

    useEffect(()=>{
        getUserByRef(response.authorRef).then((user)=>{
            setAuthor(user)
        })
    })

    return (
        <View>
            <View style={[style.container, style.containerResponse]} >
                <Image source={require('../../../../assets/imgs/icon.png')}
                    style={[style.profile, style.profileResponse]} />
                <View style={style.infoContainer}>
                    <View style={style.headerContainer}>
                        <Text style={style.author}>{author.name}</Text>
                        <Text style={style.time}>{moment(response.timeCreated).fromNow()}</Text>
                    </View>
                    <Text style={style.comment}>{response.message}</Text>
                </View>
            </View>
        </View>
    )
}
import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import style from './style'
import moment from 'moment';
import { getUserByRef } from '../../../../firebase/Authentication';
import User from '../../../../model/user';
import OtherAvatar from '../../../../global/components/Other_Avatar/OtherAvatar'

const Comments = ({ comentario }) => {
    const [author, setAuthor] = useState(new User({}))

    useEffect(() => {
        getUserByRef(comentario.authorRef).then((user) => {
            setAuthor(user)
        })

    }, [])

    return (
        <View style={style.container}>
            <OtherAvatar size={40} image={author.profileImage}/>
            <View style={style.infoContainer}>
                <View style={style.headerContainer}>
                    <Text style={style.author}>{author.name}</Text>
                    <Text style={style.time}>{moment(comentario.timeCreated).fromNow()}</Text>
                </View>
                <Text style={style.comment}>{comentario.message}</Text>
            </View>
        </View>
    )
}

export default Comments
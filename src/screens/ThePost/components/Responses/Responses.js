import React, { useEffect, useState } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import style from './style'
import moment from 'moment';
import Comentario from '../../../../model/comments';
import User from '../../../../model/user';
import { getUserByRef } from '../../../../firebase/Authentication';
import { useNavigation } from '@react-navigation/native';
import OtherAvatar from '../../../../global/components/Other_Avatar/OtherAvatar'

type Props = {
    response: Comentario
}

export default Responses = ({ response }: Props) => {

    const [author, setAuthor] = useState(new User({}))
    const navigation = useNavigation()

    useEffect(() => {
        getUserByRef(response.authorRef).then((user) => {
            setAuthor(user)
        })
    })

    function handleNavigation() {
        navigation.navigate("User-Profile", { user: author })
    }

    return (
        <View>
            <View style={[style.container, style.containerResponse]} >
                <TouchableOpacity onPress={handleNavigation}>
                    <OtherAvatar size={'small'} image={author.profileImage}/>
                    {/* <Image source={require('../../../../assets/imgs/icon.png')}
                        style={[style.profile, style.profileResponse]} /> */}
                </TouchableOpacity>
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
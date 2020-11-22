import React, { useState, useEffect, useContext } from 'react'
import { View, Text, Image } from 'react-native'
import style from './style'
import { TouchableOpacity, FlatList, TextInput } from 'react-native-gesture-handler'
import 'moment';
import 'moment/locale/pt-br';
import moment from 'moment-timezone';
moment().locale('pt-br');
import Responses from '../Responses/Responses'
import Add_Comments from '../Add_Comments/Add_Comments'
import { useNavigation, useRoute } from '@react-navigation/native'
import AuthContext from '../../../../context/auth_context';
import User from '../../../../model/user';
import { getUserByRef } from '../../../../firebase/Authentication';
import Comentario from '../../../../model/comments';
import OtherAvatar from '../../../../global/components/Other_Avatar/OtherAvatar'

type Props = {
    index: Number,
    comentario: Comentario,
    setResponseField: any,
    toggleOverlay: any
}

const Comments = ({ index, comentario, setResponseField, toggleOverlay }: Props) => {
    const auth = useContext(AuthContext)
    const navigation = useNavigation()
    const routes = useRoute()
    const [author, setAuthor] = useState(new User({}))

    useEffect(() => {        
        getUserByRef(comentario.authorRef).then((user) => {
            setAuthor(user)
        })

    }, [])

    function handleNavigation() {
        navigation.navigate("User-Profile", { user: author })
    }

    const responder = auth.isLogged ?
        <Text style={style.textResponse} onPress={() => {
            setResponseField(index)
            toggleOverlay('response')
        }}>Responder</Text> : null

    return (
        <View style={{ flex: 1 }}>
            <View style={style.container}>
                <TouchableOpacity onPress={handleNavigation}>
                    <OtherAvatar size={40} image={author.profileImage}/>
                </TouchableOpacity>
                <View style={style.infoContainer}>
                    <View style={style.headerContainer}>
                        <Text style={style.author}>{author.name}</Text>
                        <Text style={style.time}>{moment(comentario.timeCreated).fromNow()}</Text>
                    </View>
                    <Text style={style.comment}>{comentario.message}</Text>
                </View>
            </View>
            {
                comentario.response.map((response,index) => {
                    return <Responses response={response} key={index}/>
                })
            }
            { responder}
        </View>
    )
}

export default Comments
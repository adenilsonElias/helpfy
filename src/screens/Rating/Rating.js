import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Comments from './components/Comments_Profile/Comments';
import style from './style'
import AddComments from './components/Add_Comments/Add_Comments'
import { getProfileComments, createListenerComments } from '../../firebase/comentarios';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import Comentario from '../../model/comments';

export default Rating = () => {

    const route = useRoute()
    const user: User = route.params && route.params.user ? route.params.user : useSelector(state => state.userState.user)
    const isUserLogged = useSelector(state => state.userState.user.id)
    const [comentarios, setComentarios] = useState([])

    useEffect(() => {
        return createListenerComments(user, (value: FirebaseFirestoreTypes.QuerySnapshot) => {
            setComentarios(value.docs.map((value) => {
                return new Comentario({...value.data(), id : value.id})
            }))
        })
    })

    return (
        <View style={style.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {comentarios.length ? comentarios.map((item, index) => {
                    return (
                        <View key={item.id}>
                            <Comments comentario={item}/>
                        </View>
                    )
                }) : null}
            </ScrollView>
            {
                isUserLogged != user.id ? <AddComments user={user} /> : null
            }
        </View>
    )
}

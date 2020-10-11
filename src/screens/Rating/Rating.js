import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Comments from './components/Comments_Profile/Comments';
import style from './style'
import AddComments from './components/Add_Comments/Add_Comments'

export default Rating = () => {

    const route = useRoute()
    const user : User = route.params && route.params.user ? route.params.user : useSelector(state => state.userState.user)
    const isUserLogged = useSelector(state => state.userState.user.id)
    const [comentarios, setComentarios] = useState([
        {
            "author": "Lukazukimo",
            "creatorId": "Aem3JvZJn7OkehMcMKgCkdWtRna2",
            "depth": 0,
            "id": "er8fI997DR9tUwSeAUS8",
            "message": "teste comentario",
            "timeCreated": 1601262710142
            // "response": [{
            //     "author": "Lukazukimo",
            //     "creatorId": "Aem3JvZJn7OkehMcMKgCkdWtRna2",
            //     "depth": 1,
            //     "message": "respondendo comentario",
            //     "response": [],
            //     "timeCreated": 1601262719196
            // }],
        },
        {
            "author": "Lukazukimo",
            "creatorId": "Aem3JvZJn7OkehMcMKgCkdWtRna2",
            "depth": 0,
            "id": "er8fI997DR9tUwSasdaAUS8",
            "message": "teste comentario",
            "timeCreated": 1601262710142
        },
        {
            "author": "Lukazukimo",
            "creatorId": "Aem3JvZJn7OkehMcMKgCkdWtRna2",
            "depth": 0,
            "id": "er8fI997DR9tasdasUwSeAUS8",
            "message": "teste comentariosdjfklsjdfasldklakdl;akdka;lskd;laskl;askd;kkajhsdjkahsjkdhajksdhasjhdajkshdjkhsjkdfhsjkdhfkshdfjkshdfjksdhsdfjh",
            "timeCreated": 1601262710142
        },
        {
            "author": "Lukazukimo",
            "creatorId": "Aem3JvZJn7OkehMcMKgCkdWtRna2",
            "depth": 0,
            "id": "er8fI997asdasDR9tasdasUwSeAUS8",
            "message": "teste comentariosdjfklsjdfhsjkdfhsjkdhfkshdfjkshdfjksdhsdfjh",
            "timeCreated": 1601262710142
        }
    ])

    return (
        <View style={style.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {comentarios.length ? comentarios.map((item, index) => {
                    return (
                        <View key={item.id}>
                            <Comments comentario={item} />
                        </View>
                    )
                }) : null}
            </ScrollView>
            {
                isUserLogged != user.id ? <AddComments /> : null
            }
        </View>
    )
}

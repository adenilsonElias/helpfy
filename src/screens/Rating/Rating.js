import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Comments from './components/Comments_Profile/Comments';
import style from './style'

export default Rating = () => {
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
            "message": "teste comentariosdjfklsjdfhsjkdfhsjkdhfkshdfjkshdfjksdhsdfjh",
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
            <ScrollView>
                {comentarios.length ? comentarios.map((item, index) => {
                    return (
                        <View key={item.id}>
                            <Comments
                                comentario={item}
                                index={index}
                            />
                        </View>
                    )
                }) : null}
            </ScrollView>
        </View>
    )
}

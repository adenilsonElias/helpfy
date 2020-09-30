import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import style from './style'
import TheAvatar from '../../global/components/Avatar/The_Avatar'

export default Notifications = () => {
    const [data, setData] = useState([
        {
            id: 'amasjkdhjkas',
            senderId: 'asdhjagsds',
            type: 'like',
            message: 'Curtiu seu post',
            senderName: 'Fabio',
            postId: 'yaustdyuatsdyua',
        },
        {
            id: 'amasjkdhaasjkas',
            senderId: 'asdhjagassds',
            type: 'like',
            message: 'Curtiu seu postasjdhajk sasdasdhdjkashasdasddkasdsjashkdjhakhdkajshd',
            senderName: 'Gabriel',
            postId: 'yaustdyuasdatsdyua',
        },
        {
            id: 'amsasjkdhasajkas',
            senderId: 'asvdhjagassds',
            type: 'like',
            message: 'Curtiu seu postasjdhajk sasdasdhdjkasshasdasddkasdsjashkdjhakhdkajshd',
            senderName: 'Adenilson',
            postId: 'yaustdyuasdcatsdyua',
        },
        {
            id: 'aamasjkdhasjkas',
            senderId: 'asdhjagassds',
            type: 'like',
            message: 'Curtiu seu postasjdhajk sasdasdhdjkashasdasddkasdsjashkdjhakhdkajshd',
            senderName: 'Teste',
            postId: 'yaustdyuasdaatsdyua',
        }
    ])

    return (
        <FlatList
            data={data}
            keyExtractor={id => `${id.id}`}
            style={style.container}
            renderItem={({ item }) =>
                <View style={style.notificationContainer}>
                    <TheAvatar size={'medium'}/>
                    <View style={style.infoContainer}>
                        <Text style={style.author}>{item.senderName}</Text>
                        <Text style={style.message}>{item.message}</Text>
                    </View>
                </View>
            }
        />

    )
}



import React, { useState } from 'react';
import Header from '../../global/components/Header/Header'
import style from './style'
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';

export default Chat_List = () => {
    const data = [{
        id: 1,
        name: 'teste'
    },{
        id: 2,
        name: 'teste'
    },{
        id: 3,
        name: 'teste'
    },{
        id: 4,
        name: 'teste'
    },{
        id: 5,
        name: 'teste'
    },{
        id: 6,
        name: 'teste'
    },{
        id: 7,
        name: 'teste'
    },]

    return (
        <View style={style.container}>
            <Header title={'Pessoas'} icon={'users'}/>            
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={style.containerListItem}>
                        <TouchableOpacity style={style.ListItem}
                            onPress={() => {}}>
                            <Image source={require('../../assets/imgs/icon.png')} style={style.profile} />
                            <Text style={style.name}>{item.name}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}
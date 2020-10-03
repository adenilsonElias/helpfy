import React, { useState } from 'react';
import Header from '../../global/components/Header/Header'
import style from './style'
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { color1 } from '../../global/constant/constant';
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';

export default Chat_List = () => {
    const navigation = useNavigation()

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
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity style={style.containerListItem}
                        onPress={() => {navigation.navigate('TheChat')}}>
                        <View style={style.ListItem}>
                            <Image source={require('../../assets/imgs/icon.png')} style={style.profile} />
                            <Text style={style.name}>{item.name}</Text>
                        </View>
                        <View style={style.iconContainer}>
                            <Icon name={'chevron-right'} size={30} color={color1} />
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
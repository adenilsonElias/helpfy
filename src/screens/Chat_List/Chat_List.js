import React, { useEffect, useState } from 'react';
import Header from '../../global/components/Header/Header'
import style from './style'
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { color1 } from '../../global/constant/constant';
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';
import { chatListener } from '../../firebase/chat';
import User from '../../model/user';
import { useSelector } from 'react-redux';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { getUserByRef } from '../../firebase/Authentication';

export default Chat_List = () => {
    const navigation = useNavigation()
    const [useList,setUseList] = useState([])
    const user: User = useSelector(state => state.userState.user)

    useEffect(()=>{
        chatListener(user,(chatCollection : FirebaseFirestoreTypes.QuerySnapshot)=>{
            let usersPromise = chatCollection.docs.map(async (documents) =>{
                return getUserByRef(documents.data()['user'])
            })
            Promise.all(usersPromise).then((value)=>{
                setUseList(value)
            })
        })
    })

    return (
        <View style={style.container}>
            <Header title={'Pessoas'} icon={'users'}/>            
            <FlatList
                data={useList}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity style={style.containerListItem}
                        onPress={() => {navigation.navigate('TheChat',{receiver: item})}}>
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
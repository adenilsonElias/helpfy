import React, { useEffect, useState } from 'react';
import style from './style'
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { getWantPeople } from '../../firebase/eu_quero';
import { useNavigation, useRoute } from '@react-navigation/native';
import { color1, color2 } from '../../global/constant/constant';
import Icon from 'react-native-vector-icons/Feather';

export default ListChoosedPeople = () => {
    const post = useRoute().params['post']
    const [userList, setUserList] = useState([])
    const [choose, setChoose] = useState(false)
    const chooseText = choose ? 'Escolhido' : 'Escolher'

    useEffect(() => {
        async function collect() {
            setUserList(await getWantPeople(post))
        }
        collect()
    }, [])

    return (
        <View style={style.container}>
            <FlatList
                data={userList}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={style.containerListItem}>
                        <View style={style.ListItem}>
                            <Image source={require('../../assets/imgs/icon.png')} style={style.profile} />
                            <Text style={style.name}>{item.name}</Text>
                        </View>
                        <View style={style.containerButtons}>
                            <TouchableOpacity style={[style.button, { backgroundColor: choose ? color1 : color2 }]}>
                                <Text style={[style.text, { color: choose ? color2 : color1 }]}>{chooseText}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ justifyContent: 'center' }}>
                                <Icon name={'message-circle'} size={30} color={color1} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}
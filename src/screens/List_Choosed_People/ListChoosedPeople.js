import React, { useEffect, useState } from 'react';
import style from './style'
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { getWantPeople, wantListListener } from '../../firebase/eu_quero';
import { useNavigation, useRoute } from '@react-navigation/native';
import { color1, color2 } from '../../global/constant/constant';
import Icon from 'react-native-vector-icons/Feather';
import { upDonationStage } from '../../firebase/Post';
import Loading from '../Loading/Loading'
import OtherAvatar from '../../global/components/Other_Avatar/OtherAvatar'
import Animations from './components/Animation/Animations'
import { useDispatch, useSelector } from 'react-redux';
import { setBottomBar } from '../../store/actions/loading'
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export default ListChoosedPeople = () => {
    const navigation = useNavigation()
    const post = useRoute().params['post']
    const [userList, setUserList] = useState([])
    const [choose, setChoose] = useState(false)
    const [loading, setLoading] = useState(false)
    const chooseText = choose ? 'Escolhido' : 'Escolher'
    const donation = useSelector(state => state.loadingState.bottomBar)
    const [update,setUpdate] = useState(false);
    let updateT = false;
    const dispatch = useDispatch()

    useEffect(() => {
        navigation.setOptions({
            headerShown: !donation,
        })
    }, [donation])

    useEffect(() => {
        async function collect() {
            setUserList(await getWantPeople(post))
        }
        collect()
    }, [update])

    useEffect(()=>{
        return wantListListener(post,(documentSnapshot : FirebaseFirestoreTypes.DocumentSnapshot)=>{
            updateT = !updateT
            setUpdate(updateT);
        })
    },[])

    function handleGrantee(idGrantee: String) {
        dispatch(setBottomBar(true))
        upDonationStage(post,idGrantee).then(()=>{
            console.info("estado de doação alterado com sucesso")
            setTimeout(() => {
                navigation.goBack()
                dispatch(setBottomBar(false))
            }, 3000)
        })
    }

    if (donation) {
        return (
            <Animations />
        )        
    }

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <View style={style.container}>
            <FlatList
                data={userList}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={style.containerListItem}>
                        <View style={style.ListItem}>
                            <OtherAvatar size={40} image={item.profileImage} />
                            <Text style={style.name} numberOfLines={1}>{item.name}</Text>
                        </View>
                        <View style={style.containerButtons}>
                            <TouchableOpacity style={[style.button, { backgroundColor: choose ? color1 : color2 }]}
                                onPress={() => handleGrantee(item.id)}>
                                <Text style={[style.text, { color: choose ? color2 : color1 }]}>{chooseText}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ justifyContent: 'center' }}
                                onPress={() => {
                                    navigation.navigate('TheChat', { receiver: item })
                                }}>
                                <Icon name={'message-circle'} size={30} color={color1} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}
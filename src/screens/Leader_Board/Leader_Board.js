import React, { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../context/auth_context';
import { View, Text, Image, FlatList } from 'react-native';
import style from './style'
import Header from '../../global/components/Header/Header'
import { useSelector } from 'react-redux';
import { getPeople } from '../../firebase/Gamification'
import ProfileBoard from './components/Profile_Boards/ProfileBoards'
import TitleBoard from './components/Title_Board/TitleBoard'
import InfoBoard from './components/Info_Board/InfoBoard'
import Loading from '../Loading/Loading'

//@TODO arrumar warning posicao do usuario
//index do flatlist eh a posiaco de outro componente
export default LeaderBoard = () => {
    const navigation = useNavigation()
    const auth = useContext(AuthContext);
    const [position, setPosition] = useState(0)
    const name = useSelector(state => state.userState)
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getPeople().then(value => {
            setData(value)
            setLoading(false)
        })
    }, [])

    const nameUser = auth.isLogged ? name.user.name : 'Anônimo'
    const profile = auth.isLogged ? 
        <ProfileBoard score={name.user.score} position={position}/> : null

    const userId = auth.isLogged ? name.user.id : ''

    if(loading){
        return(
            <Loading />
        )
    }

    return (
        <View style={style.container}>            
            <Header title={nameUser}/>
            {profile}
            <View style={style.bodyContainer}>
                <TitleBoard />
                <FlatList
                    data={data}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        if(userId == item.id){
                            setPosition(index+1)
                        }
                        return (
                            <InfoBoard index={index} item={item}
                                userIdLogged={userId}/>
                        )}
                    }
                />
            </View>
        </View>
    )
}
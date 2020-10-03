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

export default LeaderBoard = () => {
    const navigation = useNavigation()
    const auth = useContext(AuthContext);
    const [position, setPosition] = useState(0)
    const name = useSelector(state => state.userState)
    const [data, setData] = useState()
    // const [data, setData] = useState([{
    //         id: 1,
    //         name: 'Joe', 
    //         highScore: 52
    //     },{ 
    //         id: 2,  
    //         name: 'Jenny', 
    //         highScore: 120
    //     },{
    //         id: 3,
    //         name: 'Joe', 
    //         highScore: 52
    //     },{ 
    //         id: 4,  
    //         name: 'Jenny', 
    //         highScore: 120
    //     },{
    //         id: 5,
    //         name: 'Joe', 
    //         highScore: 52
    //     },{ 
    //         id: 6,  
    //         name: 'Jenny', 
    //         highScore: 120
    //     },{
    //         id: 7,
    //         name: 'Joe', 
    //         highScore: 52
    //     },{ 
    //         id: 8,  
    //         name: 'Jenny', 
    //         highScore: 120
    //     },{
    //         id: 9,
    //         name: 'Joe', 
    //         highScore: 52
    //     },{ 
    //         id: 10,  
    //         name: 'Jenny', 
    //         highScore: 120
    //     },{
    //         id: 11,
    //         name: 'Joe', 
    //         highScore: 52
    //     },{ 
    //         id: 12,  
    //         name: 'Jenny', 
    //         highScore: 120
    //     },{
    //         id: 13,
    //         name: 'Joe', 
    //         highScore: 52
    //     },{ 
    //         id: 14,  
    //         name: 'Jenny', 
    //         highScore: 120
    //     },{
    //         id: 15,
    //         name: 'Joe', 
    //         highScore: 52
    //     },{ 
    //         id: 16,  
    //         name: 'Jenny', 
    //         highScore: 120
    //     },{
    //         id: 17,
    //         name: 'Joe', 
    //         highScore: 52
    //     },{ 
    //         id: 18,  
    //         name: 'Jenny', 
    //         highScore: 120
    //     },{ 
    //         id: 19,  
    //         name: 'Jenny', 
    //         highScore: 120
    //     },{
    //         id: 20,
    //         name: 'Joe', 
    //         highScore: 52
    //     },{ 
    //         id: 21,  
    //         name: 'Jenny', 
    //         highScore: 120
    //     },{ 
    //         id: 22,  
    //         name: 'Jenny', 
    //         highScore: 120
    //     }])

    useEffect(() => {
        getPeople().then(value => setData(value))
        console.log(name)
    }, [])

    const nameUser = auth.isLogged ? name.user.name : 'Anônimo'
    const profile = auth.isLogged ? 
        <ProfileBoard score={name.user.score} position={position}/> : null

    const userId = auth.isLogged ? name.user.id : ''

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
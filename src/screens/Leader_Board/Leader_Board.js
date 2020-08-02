import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../context/auth_context';
import { View, Text, Image, FlatList } from 'react-native';
import style from './style'
import Header from '../../global/components/Header/Header'
import { useSelector } from 'react-redux';

export default LeaderBoard = () => {
    const navigation = useNavigation()
    const auth = useContext(AuthContext);
    const [user, setUser] = useState({ index: 0, score: 0})
    const name = useSelector(state => state.userState) 
    const [data, setData] = useState([{
            id: 1,
            name: 'Joe', 
            highScore: 52
        },{ 
            id: 2,  
            name: 'Jenny', 
            highScore: 120
        },{
            id: 3,
            name: 'Joe', 
            highScore: 52
        },{ 
            id: 4,  
            name: 'Jenny', 
            highScore: 120
        },{
            id: 5,
            name: 'Joe', 
            highScore: 52
        },{ 
            id: 6,  
            name: 'Jenny', 
            highScore: 120
        },{
            id: 7,
            name: 'Joe', 
            highScore: 52
        },{ 
            id: 8,  
            name: 'Jenny', 
            highScore: 120
        },{
            id: 9,
            name: 'Joe', 
            highScore: 52
        },{ 
            id: 10,  
            name: 'Jenny', 
            highScore: 120
        },{
            id: 11,
            name: 'Joe', 
            highScore: 52
        },{ 
            id: 12,  
            name: 'Jenny', 
            highScore: 120
        },{
            id: 13,
            name: 'Joe', 
            highScore: 52
        },{ 
            id: 14,  
            name: 'Jenny', 
            highScore: 120
        },{
            id: 15,
            name: 'Joe', 
            highScore: 52
        },{ 
            id: 16,  
            name: 'Jenny', 
            highScore: 120
        },{
            id: 17,
            name: 'Joe', 
            highScore: 52
        },{ 
            id: 18,  
            name: 'Jenny', 
            highScore: 120
        },{ 
            id: 19,  
            name: 'Jenny', 
            highScore: 120
        },{
            id: 20,
            name: 'Joe', 
            highScore: 52
        },{ 
            id: 21,  
            name: 'Jenny', 
            highScore: 120
        },{ 
            id: 22,  
            name: 'Jenny', 
            highScore: 120
        }])   

    const userLogged = auth.isLogged ? name.user.name : 'Usuario'

    return (
        <View style={style.container}>            
            <Header title={userLogged}/>
            <View style={style.scoreContainer}>
                <View style={style.scoreTextContainer}>
                    <Text style={style.scoreText}>{user.index}</Text>
                </View>
                <View style={style.imageProfileContainer}>
                    <Image source={require('../../assets/imgs/icon.png')} style={style.imageProfile} />
                </View>
                <View style={style.scoreTextContainer}>
                    <Text style={style.scoreText}>{user.score} pts</Text>
                </View>
            </View>
            <View style={style.bodyContainer}>
                <View style={style.bodyTitle}>
                    <Text style={style.textBodyTitle}>Nº</Text>
                    <Text style={style.textBodyTitle}>Nome</Text>
                    <Text style={style.textBodyTitle}>Pts</Text>
                </View>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={style.containerListItem}>
                                <Text style={style.listTextName}>{index + 1}</Text>
                                <Text style={style.listTextName}>{item.name}</Text>
                                <Text style={style.listTextScore}>{item.highScore}</Text>
                            </View>
                        )}
                    }
                />
            </View>
        </View>
    )
}
import React, { useState, useEffect, useContext } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import WishList from '../screens/Wish_List/Wish_List';
import LikeList from '../screens/Like_List/Like_List';
import LeaderBoard from '../screens/Leader_Board/Leader_Board';
import { Bottomnavigation } from './Bottom'
import DrawerCustom from '../global/components/DrawerCustom/DrawerCustom'
import { useSelector } from 'react-redux';
import { View, Text, Dimensions } from 'react-native';
import { color1, color4 } from '../global/constant/constant'
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Logout from '../screens/Logout/Logout'
import AuthContext from '../context/auth_context';
import About from '../screens/About/About';

const Drawer = createDrawerNavigator();

export default DrawerNavigation = () => {
    const auth = useContext(AuthContext);
    const user = useSelector(state => state.userState.user)
    const [level, setLevel] = useState(0)
    const [progresso, setProgresso] = useState(0)
    const [witdhDrawer, setWidthDrawer] = useState(Dimensions.get('window').width * 3 / 4)

    useEffect(() => {
        if(user){
            let score = user.score        
            setProgresso((score % 10 ) * 0.1)
            if(Math.floor(score / 10) !== 0){
                setLevel(Math.floor(score / 10))
            } else {
                setLevel(1)
            }
        }
    }, [user])

    const condition1 = auth.isLogged ?
        <Drawer.Screen name="Lista de Desejos" component={WishList}
            options={{
                drawerIcon: ({ focused, size }) => (
                    <Icon name="bookmark" size={size} color={focused ? color1 : color4} />
                )
            }} /> : null

    const condition2 = auth.isLogged ?
        <Drawer.Screen name="Lista de Curtidas" component={LikeList}
            options={{
                drawerIcon: ({ focused, size }) => (
                    <Icon name="thumbs-up" size={size} color={focused ? color1 : color4} />
                )
            }} /> : null

    const condition3 = auth.isLogged ?
        <Drawer.Screen name="Sair" component={Logout}
            options={{
                drawerIcon: ({ focused, size }) => (
                    <Icon name="log-out" size={size} color={focused ? color1 : color4} />
                )
            }} /> : null

    return (
        <Drawer.Navigator drawerContent={DrawerCustom}
            drawerStyle={{ width: witdhDrawer }}
            drawerContentOptions={{
                user,
                level,
                progresso,
                witdhDrawer,
                activeTintColor: color1,
                itemStyle: {
                    width: '100%',
                    marginHorizontal: 0,
                    marginVertical: 0,
                    height: 50,
                    justifyContent: 'center'
                }
            }}>
            <Drawer.Screen name="Tela Inicial" component={Bottomnavigation}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <Icon2 name="ios-home-outline" size={size} color={focused ? color1 : color4} />
                    )
                }} />
            { condition1 }
            { condition2 }
            <Drawer.Screen name="Classificação" component={LeaderBoard}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <Icon name="bar-chart-2" size={size} color={focused ? color1 : color4} />
                    )
                }} />
            <Drawer.Screen name="Sobre" component={About}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <Icon name="info" size={size} color={focused ? color1 : color4} />
                    )
                }} />

            {condition3}
        </Drawer.Navigator>
    )
}




/**
 * Drawer : A -> TabNavigation , B -> sei-la, C -> sei-la
 *
 */
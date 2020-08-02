import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Register from '../screens/Register/Register';
import Profile from '../screens/Profile/Profile';
import Login from '../screens/Login/Login';
import Feed from '../screens/Feed/Feed';
import WishList from '../screens/Wish_List/Wish_List';
import LikeList from '../screens/Like_List/Like_List';
import LeaderBoard from '../screens/Leader_Board/Leader_Board';
import {Bottomnavigation} from './Bottom'
import DrawerCustom from '../global/components/DrawerCustom/DrawerCustom'

const Drawer = createDrawerNavigator();

export default DrawerNavigation = () => {    
    return (
        <Drawer.Navigator drawerContent={DrawerCustom}>            
            <Drawer.Screen name="Tela Inicial" component={Bottomnavigation}/> 
            <Drawer.Screen name="Lista de Desejos" component={WishList} />
            <Drawer.Screen name="Lista de Curtidas" component={LikeList} /> 
            <Drawer.Screen name="Classificação" component={LeaderBoard} /> 
        </Drawer.Navigator>
    )
}

/**
 * Drawer : A -> TabNavigation , B -> sei-la, C -> sei-la
 * 
 */
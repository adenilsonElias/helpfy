import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Register from '../screens/Register/Register';
import Profile from '../screens/Profile/Profle';
import Login from '../screens/Login/Login';
import Feed from '../screens/Feed/Feed';
import WishList from '../screens/Wish_List/Wish_List';
import LikeList from '../screens/Like_List/Like_List';
import LeaderBoard from '../screens/Leader_Board/Leader_Board';
import {Bottomnavigation} from './Bottom'

const Drawer = createDrawerNavigator();

export default DrawerNavigation = () => {
    return (
        <Drawer.Navigator >            
            <Drawer.Screen name="Home" component={Bottomnavigation}/> 
            <Drawer.Screen name="Wish List" component={WishList} />  
            <Drawer.Screen name="Like List" component={LikeList} /> 
            <Drawer.Screen name="Ranking" component={LeaderBoard} /> 
        </Drawer.Navigator>
    )
}

/**
 * Drawer : A -> TabNavigation , B -> sei-la, C -> sei-la
 * 
 */
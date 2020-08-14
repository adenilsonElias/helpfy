import React, { useState, useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import WishList from '../screens/Wish_List/Wish_List';
import LikeList from '../screens/Like_List/Like_List';
import LeaderBoard from '../screens/Leader_Board/Leader_Board';
import {Bottomnavigation} from './Bottom'
import DrawerCustom from '../global/components/DrawerCustom/DrawerCustom'
import { useSelector } from 'react-redux';

const Drawer = createDrawerNavigator();

export default DrawerNavigation = () => {
    const user = useSelector(state => state.userState.user)
    return (
        <Drawer.Navigator drawerContent={DrawerCustom} drawerContentOptions={{user}}>            
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
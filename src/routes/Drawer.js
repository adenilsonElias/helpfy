import React, { useState, useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import WishList from '../screens/Wish_List/Wish_List';
import LikeList from '../screens/Like_List/Like_List';
import LeaderBoard from '../screens/Leader_Board/Leader_Board';
import { Bottomnavigation } from './Bottom'
import DrawerCustom from '../global/components/DrawerCustom/DrawerCustom'
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { color1, color4 } from '../global/constant/constant'
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default DrawerNavigation = () => {
    const user = useSelector(state => state.userState.user)
    return (
        <Drawer.Navigator drawerContent={DrawerCustom} drawerContentOptions={{
            user,
            activeTintColor: color1,
            itemStyle: { 
                width: '100%', 
                marginHorizontal: 0, 
                marginVertical: 0, 
                height: 50, 
                justifyContent: 'center' 
            },
        }}>
            <Drawer.Screen name="Tela Inicial" component={Bottomnavigation}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <Icon name="home" size={size} color={focused ? color1 : color4} />
                    )
                }} />
            <Drawer.Screen name="Lista de Desejos" component={WishList}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <Icon name="bookmark" size={size} color={focused ? color1 : color4} />
                    )
                }} />
            <Drawer.Screen name="Lista de Curtidas" component={LikeList}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <Icon name="thumbs-up" size={size} color={focused ? color1 : color4} />
                    )
                }} />
            <Drawer.Screen name="Sair" component={LeaderBoard}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <Icon name="bar-chart-2" size={size} color={focused ? color1 : color4} />
                    )
                }} />
        </Drawer.Navigator>
    )
}




/**
 * Drawer : A -> TabNavigation , B -> sei-la, C -> sei-la
 *
 */
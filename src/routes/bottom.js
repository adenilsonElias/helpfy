import React from 'react'
import Feed from '../screens/Feed/Feed';
import Profile from '../screens/Profile/Profle';
import Chat_List from '../screens/Chat_List/Chat_List';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import StackLogin from './StackLogin';

const Tab = createBottomTabNavigator(); 

export function Bottomnavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Profile" component={Profile} />
            {/* <StackLogin /> */}
            <Tab.Screen name="Chat" component={Chat_List} />
        </Tab.Navigator>
    )
}
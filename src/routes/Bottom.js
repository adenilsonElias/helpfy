import React from 'react'
// import Feed from '../screens/Feed/Feed';
import Profile from '../screens/Profile/Profile';
import Chat_List from '../screens/Chat_List/Chat_List';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackFeed } from './StackFeed'
// import StackLogin from './StackLogin';

const Tab = createBottomTabNavigator();

function getTabBarVisible(route) {
    // Tela Search esconde o bottomBar
    const routeName = route.state
        ? route.state.routes[route.state.index].name
        : route.params?.screen || 'Home';

    if (routeName === 'Search') {
        return false;
    }
    return true;
}

export function Bottomnavigation({ route }) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={StackFeed} 
                options={({ route }) => ({
                    tabBarVisible: getTabBarVisible(route) })
                }/>
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Chat" component={Chat_List} />
        </Tab.Navigator>
    )
}
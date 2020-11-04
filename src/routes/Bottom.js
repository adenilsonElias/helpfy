import React from 'react'
// import Feed from '../screens/Feed/Feed';
import Profile from '../screens/Profile/Profile';
import Chat_List from '../screens/Chat_List/Chat_List';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackFeed } from './StackFeed'
import { StackProfile} from './StackProfile'
import { StackChat } from './StackChat'
import { color1 } from '../global/constant/constant';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
// import StackLogin from './StackLogin';

const Tab = createBottomTabNavigator();

function getTabBarVisible(route) {
    const loading = useSelector(state => state.loadingState.loading)
    // Tela esconde o bottomBar    
    const routeName = route.state
        ? route.state.routes[route.state.index].name
        : route.params?.screen || 'Home';    
    // @TODO Colocar um switch no lugar desse monte de if
    if (routeName === 'Search') {        
        return false;
    }
    if (routeName === 'AddPost') {        
        return false;
    }
    if (routeName === 'Category') {        
        return false;
    }
    if (routeName === 'TheChat') {        
        return false;
    }
    if (routeName === 'Edit') {        
        return false;
    }
    if (routeName === 'Rating') {        
        return false;
    }
    if (routeName === 'MyPosts') {        
        return false;
    }
    if (routeName === 'Notifications') {        
        return false;
    }
    if (routeName === 'ChangePassword') {        
        return false;
    }
    if (loading) {
        return false;
    }
    return true;
}

export function Bottomnavigation({ route }) {
    return (
        <Tab.Navigator tabBarOptions={{ 
            activeTintColor: color1, 
            keyboardHidesTabBar: true,
            showLabel: false, 
        }}>
            <Tab.Screen name="Home" component={StackFeed}
                options={({ route }) => ({
                    tabBarVisible: getTabBarVisible(route),
                    tabBarIcon: ({ color }) => <Icon2 name="ios-home-outline" size={26} color={color} /> })
                }
            />
            <Tab.Screen name="Profile" component={StackProfile}
                options={({ route }) => ({
                    tabBarVisible: getTabBarVisible(route),
                    tabBarIcon: ({ color }) => <Icon name="user" size={26} color={color} /> })
                }
            />
            <Tab.Screen name="Chat" component={StackChat}
                options={({ route }) => ({                    
                    tabBarVisible: getTabBarVisible(route),
                    tabBarIcon: ({ color }) => <Icon name="message-circle" size={26} color={color} />})
                }
            />
        </Tab.Navigator>
    )
}
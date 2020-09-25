import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Chat_List from '../screens/Chat_List/Chat_List'
import TheChat from '../screens/The_Chat/TheChat'
import { color1, color2, styleTitle } from '../global/constant/constant';

const Stack = createStackNavigator();

export function StackChat () {
    return(
        <Stack.Navigator>
            <Stack.Screen name="ChatList" component={Chat_List} options={{ headerShown: false }} />
            <Stack.Screen name="TheChat" component={TheChat} 
                options={{
                    headerStyle: {
                        backgroundColor: color2,
                    },
                    headerTintColor: color1,
                    headerTitleAlign: 'center',
                    headerTitleStyle: styleTitle,
                }}
            />
        </Stack.Navigator>
    )
}
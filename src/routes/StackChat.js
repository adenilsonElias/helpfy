import React, { useCallback } from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Chat_List from '../screens/Chat_List/Chat_List'
import TheChat from '../screens/The_Chat/TheChat'
import { color1, color2, styleTitle } from '../global/constant/constant';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

export function StackChat() {
    const navigation = useNavigation()
    const user = useSelector(state => state.userState.user)

    useFocusEffect(useCallback(() => {
        if (user == null) {
            navigation.navigate('Profile')
            navigation.addListener('tabPress', e => {
                e.preventDefault();
                navigation.navigate('Profile')
            })
        }
    }, []))

    return (
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
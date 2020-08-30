import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Edit from '../screens/Edit/Edit';
import Profile from '../screens/Profile/Profile'

const Stack = createStackNavigator();

export function StackProfile () {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Feed" component={Profile} />
            <Stack.Screen name="Edit" component={Edit} />
        </Stack.Navigator>
    )
}
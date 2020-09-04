import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Edit from '../screens/Edit/Edit';
import Profile from '../screens/Profile/Profile'
import Evaluation from '../screens/Evaluation/Evaluation'
import MyPosts from '../screens/MyPosts/MyPosts'

const Stack = createStackNavigator();

export function StackProfile () {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="Edit" component={Edit} />
            <Stack.Screen name="Evaluation" component={Evaluation} />
            <Stack.Screen name="MyPosts" component={MyPosts} />
        </Stack.Navigator>
    )
}
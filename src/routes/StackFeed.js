import React from 'react'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import ThePost, { title } from '../screens/ThePost/ThePost';
import Feed from '../screens/Feed/Feed'
import Search from '../screens/Search/Search'
import { color1, color2, styleTitle } from '../global//constant/constant'
import { Button, TextInput } from 'react-native';
import AddPost from '../screens/Add_Post/AddPost'
import Category from '../screens/Category/Category';
import ListChoosedPeople from '../screens/List_Choosed_People/ListChoosedPeople'
import Notifications from '../screens/Notifications/Notifications';
import Profile from '../screens/Profile/Profile';

const Stack = createStackNavigator();

export function StackFeed() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Feed" component={Feed} options={{ headerShown: false }} />
            <Stack.Screen name="ThePost" component={ThePost}/>
            <Stack.Screen name='Search' component={Search} />
            <Stack.Screen name="User-Profile" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name='AddPost' component={AddPost} options={{ headerShown: false }} />
            <Stack.Screen name='Category' component={Category}
                options={{
                    headerStyle: {
                        backgroundColor: color2,
                    },
                    headerTintColor: color1,
                    headerTitleAlign: 'center',
                    headerTitleStyle: styleTitle,
                }} />
            <Stack.Screen name='Notifications' component={Notifications}
                options={{
                    title: 'Notificação',
                    headerStyle: {
                        backgroundColor: color2,
                    },
                    headerTintColor: color1,
                    headerTitleAlign: 'center',
                    headerTitleStyle: styleTitle,
                }} />
            <Stack.Screen name='ListChoosedPeople' component={ListChoosedPeople}
                options={{
                    title: 'Interessados',
                    headerStyle: {
                        backgroundColor: color2,
                    },
                    headerTintColor: color1,
                    headerTitleAlign: 'center',
                    headerTitleStyle: styleTitle,
                }} />
            <Stack.Screen name="Rating" component={Rating}
                options={{
                    title: 'Avaliação',
                    headerStyle: {
                        backgroundColor: color2,
                    },
                    headerTintColor: color1,
                    headerTitleAlign: 'center',
                    headerTitleStyle: styleTitle,
                }} />
            <Stack.Screen name="MyPosts" component={MyPosts}
                options={{
                    title: 'Posts Realizados',
                    headerStyle: {
                        backgroundColor: color2,
                    },
                    headerTintColor: color1,
                    headerTitleAlign: 'center',
                    headerTitleStyle: styleTitle,
                }} />
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
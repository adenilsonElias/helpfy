import React from 'react'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import ThePost, { title } from '../screens/ThePost/ThePost';
import Feed from '../screens/Feed/Feed'
import Search from '../screens/Search/Search'
import { color1, color2, styleTitle } from '../global//constant/constant'
import { Button, TextInput } from 'react-native';
import AddPost from '../screens/Add_Post/AddPost'
import Category from '../screens/Category/Category';
import Notification from '../screens/Notification/Notification'
import EditPost from '../screens/EditPost/EditPost'
import ListChoosedPeople from '../screens/LIst_Choosed_People/ListChoosedPeople'

const Stack = createStackNavigator();

export function StackFeed() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Feed" component={Feed} options={{ headerShown: false }} />
            <Stack.Screen name="ThePost" component={ThePost}/>
            <Stack.Screen name='Search' component={Search} />
            <Stack.Screen name='AddPost' component={AddPost}
                options={{
                    title: 'Nova Postagem',
                    headerStyle: {
                        backgroundColor: color2,
                    },
                    headerTintColor: color1,
                    headerTitleAlign: 'center',
                    headerTitleStyle: styleTitle,
                }} />
            <Stack.Screen name='Category' component={Category} 
                options={{                    
                    headerStyle: {
                        backgroundColor: color2,
                    },
                    headerTintColor: color1,
                    headerTitleAlign: 'center',
                    headerTitleStyle: styleTitle,
                }} />
            <Stack.Screen name='Notification' component={Notification} />
            <Stack.Screen name='EditPost' component={EditPost} />
            <Stack.Screen name='ListChoosedPeople' component={ListChoosedPeople} 
                options={{
                    title: 'Escolher Interessado',
                    headerStyle: {
                        backgroundColor: color2,
                    },
                    headerTintColor: color1,
                    headerTitleAlign: 'center',
                    headerTitleStyle: styleTitle,
                }} />
        </Stack.Navigator>
    )
}
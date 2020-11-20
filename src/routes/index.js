import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContextProvider } from '../context/auth_context'
import DrawerNavigation from './Drawer';
import Splash from '../screens/Splash/Splash';

export default function Navigator() {
    const [appIsLoading, setAppIsLoading] = useState(true)

    if (appIsLoading) {
        return (
            <Splash setAppIsLoading={setAppIsLoading} />
        )
    }

    return (
        // Adicionei o authcontext na arvore
        <AuthContextProvider>
            <NavigationContainer>
                <DrawerNavigation/>
            </NavigationContainer>
        </AuthContextProvider>
    );
}
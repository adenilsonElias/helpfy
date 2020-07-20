import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Bottomnavigation } from './bottom'
import {AuthContextProvider} from '../context/auth_context'
import DrawerNavigation from './Drawer';

export default function Navigator() {
    return (
        // Adicionei o authcontext na arvore
        <AuthContextProvider>
            <NavigationContainer>
                <DrawerNavigation />
                {/* <Bottomnavigation /> */}
            </NavigationContainer>
        </AuthContextProvider>

    );
}
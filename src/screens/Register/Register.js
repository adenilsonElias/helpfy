import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    Text,
    Button
} from 'react-native'

export default Register = () => {
    const navigation = useNavigation()

    return (
        <View style={{ flex: 1 }}>
            <Text>Register</Text>
            <Button title="Register" onPress={() => navigation.openDrawer()}></Button>
        </View>
    )
}
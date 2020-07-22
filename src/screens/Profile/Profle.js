import React, { useContext } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native'
import AuthContext from '../../context/auth_context'
import Login from '../Login/Login';
import { StackLogin } from '../../routes/StackLogin';


export default Profile = () => {
    // useContext 
    const auth = useContext(AuthContext);
    if (auth.isLogged) {
        return (
            <View>
                <Text>Profile</Text>
                <Button title="logout" onPress={() => auth.logOut()}></Button>
            </View>
        )
    }
    return (
        <StackLogin />
    )
}
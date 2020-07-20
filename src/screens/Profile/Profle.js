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
    if (auth.login) {
        return (
            <View>
                <Text>Profile</Text>
                <Button title="fica false" onPress={() => auth.setlogin(false)}></Button>
            </View>
        )
    }
    return (
        <StackLogin />
    )
}
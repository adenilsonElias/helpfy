import React, { useContext } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native'
import AuthContext from '../../context/auth_context';
import { useNavigation } from '@react-navigation/native';

export default Login = () => {
    const auth = useContext(AuthContext);
    const navigation = useNavigation();

    return(
        <View>
            <Text>Login</Text>
            <Button title="fica false" onPress={()=> auth.setlogin(true)}></Button>
            <Button title="Register" onPress={()=> navigation.navigate('Register')}></Button>
        </View>
    )
}


import React, { useContext } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native'
import AuthContext from '../../context/auth_context'
import Login from '../Login/Login';
import { StackLogin } from '../../routes/StackLogin';
import BackgroundTop from './components/BackgroundTop/BackgroundTop'
import ToolbarMid from './components/ToolbarMid/ToolbarMid'
import ProfileInfoBot from './components/ProfileInfoBot/ProfileInfoBot'

export default Profile = () => {
    // useContext 
    const auth = useContext(AuthContext);
    if (auth.isLogged) {
        return (
            <View>
                <BackgroundTop />
                <ToolbarMid />
                <ProfileInfoBot title={'Nome'} item={this.props.name} icon={'user'}/>
                <Button title="logout" onPress={() => auth.logOut()}></Button>
            </View>
        )
    }
    return (
        <StackLogin />
    )
}
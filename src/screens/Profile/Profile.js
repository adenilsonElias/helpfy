import React, { useContext } from 'react';
import AuthContext from '../../context/auth_context'
import Login from '../Login/Login';
import { StackLogin } from '../../routes/StackLogin';
import BackgroundTop from './components/BackgroundTop/BackgroundTop'
import ToolbarMid from './components/ToolbarMid/ToolbarMid'
import ProfileInfoBot from './components/ProfileInfoBot/ProfileInfoBot'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import User from '../../model/user';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { color2 } from '../../global/constant/constant';
import style from './style'
import Icon from 'react-native-vector-icons/Feather'

export default Profile = () => {
    // useContext 
    const navigation = useNavigation()
    const auth = useContext(AuthContext);
    const user: User = useSelector(state => state.userState.user)

    if (auth.isLogged) {
        return (
            <>
                <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
                    <BackgroundTop />
                    <ToolbarMid />
                    <ProfileInfoBot title={'Nome'} content={user.name} icon={'user'} />
                    <ProfileInfoBot title={'E-mail'} content={user.email} icon={'at-sign'} />
                    <ProfileInfoBot title={'Data de Nascimento'} content={user.birthDay} icon2={'cake-variant'} />
                    <ProfileInfoBot title={'Estado'} content={user.state} icon={'map-pin'} />
                    <ProfileInfoBot title={'Cidade'} content={user.city} icon={'map-pin'} />
                </ScrollView>
                <TouchableOpacity style={style.settingButton}
                    onPress={() => { navigation.navigate('Edit', { user: user}) }}>
                    <Icon name={'settings'} size={30} color={color2} />
                </TouchableOpacity>
            </>
        )
    }
    return (
        <StackLogin />
    )
}
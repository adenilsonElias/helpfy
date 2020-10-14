import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/auth_context'
import { StackLogin } from '../../routes/StackLogin';
import BackgroundTop from './components/BackgroundTop/BackgroundTop'
import ToolbarMid from './components/ToolbarMid/ToolbarMid'
import ProfileInfoBot from './components/ProfileInfoBot/ProfileInfoBot'
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import User from '../../model/user';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { color2 } from '../../global/constant/constant';
import style from './style'
import Icon from 'react-native-vector-icons/Feather'
import ProfileContext, { ProfileContextProvider } from './Profile_Context';

type Props = {
    userProps?: User
}

const ProfileScreen = ({ userProps }: Props) => {
    const profileContext = useContext(ProfileContext)
    const navigation = useNavigation()
    const auth = useContext(AuthContext);
    const userLogged: User = useSelector(state => state.userState.user)
    const [user, setUser] = [profileContext.user, profileContext.setUser]
    const [isMyProfile, setIsMyProfile] = [profileContext.isMyProfile, profileContext.setIsMyProfile] 

    useEffect(() => {
        if (userProps == null) {
            setUser(userLogged)
            setIsMyProfile(true)
            return
        }
        setUser(userProps)
    })

    if (auth.isLogged) {
        return (
            <>
                <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
                    <BackgroundTop isMyProfile={isMyProfile}/>
                    <ToolbarMid />
                    <ProfileInfoBot title={'Nome'} content={user.name} icon={'user'} />
                    <ProfileInfoBot title={'E-mail'} content={user.email} icon={'at-sign'} />
                    <ProfileInfoBot title={'Data de Nascimento'} content={user.birthDay} icon2={'cake-variant'} />
                    <ProfileInfoBot title={'Estado'} content={user.state} icon={'map-pin'} />
                    <ProfileInfoBot title={'Cidade'} content={user.city} icon={'map-pin'} />
                </ScrollView>
                {
                    isMyProfile ? <TouchableOpacity style={style.settingButton}
                        onPress={() => { navigation.navigate('Edit', { user: user }) }}>
                        <Icon name={'settings'} size={30} color={color2} />
                    </TouchableOpacity>
                        : null
                }
            </>
        )
    }
    return (
        <StackLogin />
    )
}

export default Profile = () => {
    const route = useRoute()
    return (
        <ProfileContextProvider>
            <ProfileScreen userProps={route.params && route.params.user ? route.params.user : null} />
        </ProfileContextProvider>
    )
}
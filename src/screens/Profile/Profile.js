import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/auth_context'
import { StackLogin } from '../../routes/StackLogin';
import BackgroundTop from './components/BackgroundTop/BackgroundTop'
import ProfileInfoBot from './components/ProfileInfoBot/ProfileInfoBot'
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import User from '../../model/user';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { color1, color2 } from '../../global/constant/constant';
import style from './style'
import Icon from 'react-native-vector-icons/Feather'
import ProfileContext, { ProfileContextProvider } from './Profile_Context';
import { FloatingAction } from "react-native-floating-action";
import { setBottomBar } from '../../store/actions/loading'

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
    const visibleBar = useSelector(state => state.loadingState.bottomBar)
    const dispatch = useDispatch()

    useEffect(() => {
        if (userProps == null) {
            setUser(userLogged)
            setIsMyProfile(true)
            return
        }
        setUser(userProps)
    }) 

    useEffect(() => {
        if(!isMyProfile){
            dispatch(setBottomBar(true))
        } else {
            dispatch(setBottomBar(false))
        }
    }, [isMyProfile])
    
    const actions = [
        {
            text: "Editar Perfil",
            icon: <Icon name={'user'} size={20} color={color2} />,
            name: "Edit",
            position: 1,
            color: color1,
            textColor: color1
        },
        {
            text: "Editar Senha",
            icon: <Icon name={'lock'} size={20} color={color2} />,
            name: "ChangePassword",
            position: 2,
            color: color1,
            textColor: color1
        }
    ];

    if (auth.isLogged) {
        return (
            <>
                <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
                    <BackgroundTop isMyProfile={isMyProfile} user={user}/>
                    <ProfileInfoBot title={'Nome'} content={user ? user.name : null} icon={'user'} />
                    <ProfileInfoBot title={'E-mail'} content={user ? user.email : null} icon={'at-sign'} />
                    <ProfileInfoBot title={'Data de Nascimento'} content={user ? user.birthDay : null} icon2={'cake-variant'} />
                    <ProfileInfoBot title={'Estado'} content={user ? user.state : null} icon={'map-pin'} />
                    <ProfileInfoBot title={'Cidade'} content={user ? user.city: null} icon={'map-pin'} />
                </ScrollView>
                {
                    isMyProfile ? 
                        <FloatingAction actions={actions} color={color1}
                            overlayColor={'transparent'}
                            floatingIcon={ <Icon name={'edit'} size={30} color={color2} /> }
                            onPressItem={name => {
                                if (name == 'Edit') {
                                    navigation.navigate('Edit', { user: user })
                                } else {
                                    navigation.navigate(name)
                                }
                            }}
                        /> : null
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
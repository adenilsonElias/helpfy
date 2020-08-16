import React, { useEffect, useContext } from 'react'
import Loading from '../Loading/Loading'
import AuthContext from '../../context/auth_context';
import { useNavigation } from '@react-navigation/native';

export default Logout = () => {
    const auth = useContext(AuthContext);
    const navigation = useNavigation()

    useEffect(() => {
        auth.logOut(),
        navigation.navigate('Feed')
    }, [])

    return(
        <Loading />
    )
}
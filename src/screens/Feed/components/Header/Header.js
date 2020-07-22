import React, { useContext } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import AuthContext from '../../../../context/auth_context';
import Icon from 'react-native-vector-icons/Feather';
import style from './style'
import { color1 } from '../../../../global/constant/constant'

/**
 * # Cabeçalho
 * - Cabeçalho da tela Feed
 *  
 */


const Header = () => {
    const auth = useContext(AuthContext)
    
    const avatar = auth.isLogged ?
        <Image source={require('../../../../assets/imgs/icon.png')} style={style.profile} /> :
        <Image source={require('../../../../assets/imgs/mao.png')} style={style.profile} />

    // const notificationIcon = this.props.notificationIcon ? 'bell-off' : 'bell'

    return (
        <View style={style.container}>
            <View style={style.infoContainer}>
                {avatar}                
                <Text style={style.title}>Helpfy</Text>
            </View>
            <View style={style.iconContainer}>
                <TouchableOpacity style={style.icon}>
                    <Icon name={'bell'} size={30} color={color1}/>
                </TouchableOpacity>
                <TouchableOpacity style={style.icon}>                    
                    <Icon name={'search'} size={30} color={color1}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header
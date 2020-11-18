import React, { useContext } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import AuthContext from '../../../../context/auth_context';
import Icon from 'react-native-vector-icons/Feather';
import style from './style'
import { color1 } from '../../../../global/constant/constant'
import { useNavigation } from '@react-navigation/native';
import TheAvatar from '../../../../global/components/Avatar/The_Avatar'

/**
 * # Cabeçalho
 * - Cabeçalho da tela Feed
 *  
 */


const Header = () => {
    const auth = useContext(AuthContext)
    const navigation = useNavigation()

    // const notificationIcon = this.props.notificationIcon ? 'bell-off' : 'bell'

    return (
        <View style={style.container}>
            <View style={style.infoContainer}>
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginRight: 20 }}>
                    <Icon name={'menu'} size={30} color={color1}/>
                </TouchableOpacity>
                <TheAvatar size={40}/>
                <Text style={style.title}>Helpfy</Text>
            </View>
            <View style={style.iconContainer}>
                <TouchableOpacity style={style.icon}
                onPress={()=> {navigation.navigate('Notifications')}}>
                    <Icon name={'bell'} size={30} color={color1}/>
                </TouchableOpacity>
                <TouchableOpacity style={style.icon} 
                    onPress={()=> {navigation.navigate('Search')}}>                    
                    <Icon name={'search'} size={30} color={color1}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header
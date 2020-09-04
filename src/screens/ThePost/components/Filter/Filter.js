import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/Feather';
import { color1 } from '../../../../global/constant/constant';
import style from './style'
import { getComentarios } from '../../../../firebase/comentarios';

export default Filter = ({ post, setComentarios }) => {
    const [menu, setMenu] = useState(null)

    const setMenuRef = ref => {
        setMenu(ref)
    };
     
    const hideMenu = () => {
        menu.hide()
    };
     
    const showMenu = () => {
        menu.show();
    };

    const buttonFilter = 
        <TouchableOpacity onPress={showMenu}>
            <Icon name={'sliders'} size={20} color={color1} />
        </TouchableOpacity>

    return (
        <View style={style.container}>
            <Menu
                ref={setMenuRef}
                button={buttonFilter}>
                <MenuItem textStyle={{ color: color1 }}
                    onPress={() => {
                    hideMenu(),
                    getComentarios(post.IdPost, 'asc').then(value => setComentarios(value))
                }}>Antigos</MenuItem>
                <MenuItem textStyle={{ color: color1 }}
                    onPress={() => {
                    hideMenu(),
                    getComentarios(post.IdPost, 'desc').then(value => setComentarios(value))
                }}>Recentes</MenuItem>
            </Menu>
        </View>
    )
}
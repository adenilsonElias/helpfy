import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/Feather';
import style from './style'
import { color1 } from '../../../global/constant/constant';
import { getPostList } from '../../../firebase/Post'


export default Filter = ({ setPost, category, setLoading }) => {
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
                        hideMenu()
                        setLoading(true)
                        getPostList({ category: category }, { limit: 3 }).then(value => {
                            setPost(value)
                            setLoading(false)
                        })
                }}>Antigos</MenuItem>
                <MenuItem textStyle={{ color: color1 }}
                    onPress={() => {
                        hideMenu()
                        setLoading(true)
                        getPostList({ category: category }, { limit: 2 }).then(value => {
                            setPost(value)
                            setLoading(false)
                        })
                }}>Recentes</MenuItem>
            </Menu>
        </View>
    )
}
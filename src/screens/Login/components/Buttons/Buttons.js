import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import style from './style'

export default Buttons = ({ login }) => {
    const navigation = useNavigation();
    return (
        <View style={style.container}>
            <View style={style.buttom}>
                <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
                    <Text style={style.buttomText}>Registrar</Text>
                </TouchableOpacity>
            </View>
            <View style={style.buttom}>
                <TouchableOpacity onPress={login}>
                    <Text style={style.buttomText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
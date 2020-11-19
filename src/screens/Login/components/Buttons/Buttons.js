import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import style from './style'

export default Buttons = ({ login , enabled }) => {
    const navigation = useNavigation();
    return (
        <View style={style.container}>
            <View style={style.buttom}>
                <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
                    <Text style={style.buttomText}>Registrar</Text>
                </TouchableOpacity>
            </View>
            <View style={enabled ? style.buttom : [style.buttom, { backgroundColor: 'rgba(84, 76, 126, 0.7)' }]}>
                <TouchableOpacity onPress={enabled ? login : null}>
                    <Text style={style.buttomText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
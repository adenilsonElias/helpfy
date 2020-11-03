import React, { useRef, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { color1 } from '../../global/constant/constant'
import Header from './components/Header/Header'
import Icon from 'react-native-vector-icons/Feather'
import style from './style'

export default ChangePassword = () => {
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
	const [confirmPass, setConfirmPass] = useState('')
    const [showPass, setShowPass] = useState(true)
    const [showNewPass, setNewShowPass] = useState(true)
    const [showPassConfirm, setShowPassConfirm] = useState(true)
    const ref2 = useRef(null)
    const ref3 = useRef(null)

    const showPassFuntion = () => {
		setShowPass(!showPass)
    }

    const showNewPassFuntion = () => {
		setNewShowPass(!showNewPass)
	}

	const showPassConfirmFuntion = () => {
		setShowPassConfirm(!showPassConfirm)
	}
    
    return (
        <>
            <Header />
            <View style={style.container}>
                <View style={style.inputContainer}>
                    <Icon name={'lock'} size={26} color={color1} style={style.icon} />
                    <TextInput style={[style.input, { paddingRight: '15%' }]}
                        placeholder='Senha atual'
                        placeholderTextColor={color1}
                        secureTextEntry={showPass}
                        value={password}
                        underlineColorAndroid='transparent'
                        onSubmitEditing={() => {
                            ref2.current.focus()
                        }}
                        returnKeyType={"next"}
                        onChangeText={password => setPassword(password)} />
                    <TouchableOpacity style={style.btnEye}
                        onPress={showPassFuntion}>
                        <Icon name={showPass === false ? 'eye' : 'eye-off'}
                            size={26} color={color1} />
                    </TouchableOpacity>
                </View>
                <View style={style.inputContainer}>
                    <Icon name={'lock'} size={26} color={color1} style={style.icon} />
                    <TextInput style={[style.input, { paddingRight: '15%' }]}
                        placeholder='Nova senha'
                        placeholderTextColor={color1}
                        secureTextEntry={showNewPass}
                        value={newPassword}
                        underlineColorAndroid='transparent'
                        ref={ref2}
                        onSubmitEditing={() => {
                            ref3.current.focus()
                        }}
                        returnKeyType={"next"}
                        onChangeText={password => setNewPassword(password)} />
                    <TouchableOpacity style={style.btnEye}
                        onPress={showNewPassFuntion}>
                        <Icon name={showNewPass === false ? 'eye' : 'eye-off'}
                            size={26} color={color1} />
                    </TouchableOpacity>
                </View>
                <View style={style.inputContainer}>
                    <Icon name={'lock'} size={26} color={color1} style={style.icon} />
                    <TextInput style={[style.input, { paddingRight: '15%' }]}
                        placeholder='Confirmar nova senha'
                        placeholderTextColor={color1}
                        secureTextEntry={showPassConfirm}
                        value={confirmPass}
                        underlineColorAndroid='transparent'
                        ref={ref3}
                        onChangeText={confirmPass => setConfirmPass(confirmPass)} />
                    <TouchableOpacity style={style.btnEye}
                        onPress={showPassConfirmFuntion}>
                        <Icon name={showPassConfirm === false ? 'eye' : 'eye-off'}
                            size={26} color={color1} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}
import React, { useContext, useState } from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	ScrollView
} from 'react-native'
import AuthContext from '../../context/auth_context'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'
import style from './style'
import User from '../../model/user'
import { CreateNewUser } from '../../firebase/Authentication'


export default Register = () => {
	const navigation = useNavigation()
	const auth = useContext(AuthContext);


	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [birth, setBirth] = useState('')
	const [local, setLocal] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPass, setConfirmPass] = useState('')

	function handleCreateUser() {
		const user = new User({ email, name, senha: password })
		auth.createUser(user)
	}

	return (
		<View style={style.container}>
			<View style={style.inputContainer}>
				<TextInput style={style.input}
					placeholder='E-mail'
					placeholderTextColor='#fff'
					autoFocus={true}
					keyboardType='email-address'
					value={email}
					underlineColorAndroid='transparent'
					onChangeText={email => setEmail(email)} />
			</View>
			<View style={style.inputContainer}>
				<TextInput style={style.input}
					placeholder='Nome'
					placeholderTextColor='#fff'
					autoFocus={true}
					keyboardType='email-address'
					value={name}
					underlineColorAndroid='transparent'
					onChangeText={name => setName(name)} />
			</View>
			<View style={style.inputContainer}>
				<TextInput style={style.input}
					placeholder='Data de Nascimento'
					placeholderTextColor='#fff'
					autoFocus={true}
					keyboardType='email-address'
					value={birth}
					underlineColorAndroid='transparent'
					onChangeText={birth => setBirth(birth)} />
			</View>
			<View style={style.inputContainer}>
				<TextInput style={style.input}
					placeholder='Estado'
					placeholderTextColor='#fff'
					autoFocus={true}
					keyboardType='email-address'
					value={local}
					underlineColorAndroid='transparent'
					onChangeText={local => setLocal(local)} />
			</View>
			<View style={style.inputContainer}>
				<TextInput style={style.input}
					placeholder='Senha'
					placeholderTextColor='#fff'
					secureTextEntry={true}
					value={password}
					underlineColorAndroid='transparent'
					onChangeText={password => setPassword(password)} />
			</View>
			<View style={style.inputContainer}>
				<TextInput style={style.input}
					placeholder='Confirmar senha'
					placeholderTextColor='#fff'
					secureTextEntry={true}
					value={confirmPass}
					underlineColorAndroid='transparent'
					onChangeText={confirmPass => setConfirmPass(confirmPass)} />
			</View>

			<View style={style.buttom}>
				<TouchableOpacity onPress={() => {
					if(password != confirmPass){
						//@ TODO Colocar error para quando senhas forem diferentes
						return
					}
					handleCreateUser()
				}}>
					<Text style={style.buttomText}>Salvar</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}
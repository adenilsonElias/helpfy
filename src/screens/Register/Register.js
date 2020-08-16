import React, { useContext, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import AuthContext from '../../context/auth_context'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import style from './style'
import User from '../../model/user'
import { CreateNewUser } from '../../firebase/Authentication'
import { color1 } from '../../global/constant/constant'


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
			<View style={style.titleContainer}>
				<Text style={style.title}>Registrar</Text>
			</View>	

			<View style={style.inputContainer}>
				<Icon name={'at-sign'} size={26} color={color1} style={style.icon}/>
				<TextInput style={style.input}
					placeholder='E-mail'
					placeholderTextColor={color1}					
					keyboardType='email-address'
					value={email}
					underlineColorAndroid='transparent'
					onChangeText={email => setEmail(email)} />
			</View>
			<View style={style.inputContainer}>
				<Icon name={'user'} size={26} color={color1} style={style.icon}/>
				<TextInput style={style.input}
					placeholder='Nome'
					placeholderTextColor={color1}					
					keyboardType='email-address'
					value={name}
					underlineColorAndroid='transparent'
					onChangeText={name => setName(name)} />
			</View>
			<View style={style.inputContainer}>
				<Icon2 name={'cake-variant'} size={26} color={color1} style={style.icon}/>
				<TextInput style={style.input}
					placeholder='Data de Nascimento'
					placeholderTextColor={color1}					
					keyboardType='email-address'
					value={birth}
					underlineColorAndroid='transparent'
					onChangeText={birth => setBirth(birth)} />
			</View>
			<View style={style.inputContainer}>
				<Icon name={'map-pin'} size={26} color={color1} style={style.icon}/>
				<TextInput style={style.input}
					placeholder='Estado'
					placeholderTextColor={color1}					
					keyboardType='email-address'
					value={local}
					underlineColorAndroid='transparent'
					onChangeText={local => setLocal(local)} />
			</View>
			<View style={style.inputContainer}>
				<Icon name={'lock'} size={26} color={color1} style={style.icon}/>
				<TextInput style={style.input}
					placeholder='Senha'
					placeholderTextColor={color1}
					secureTextEntry={true}
					value={password}
					underlineColorAndroid='transparent'
					onChangeText={password => setPassword(password)} />
			</View>
			<View style={style.inputContainer}>
				<Icon name={'lock'} size={26} color={color1} style={style.icon}/>
				<TextInput style={style.input}
					placeholder='Confirmar senha'
					placeholderTextColor={color1}
					secureTextEntry={true}
					value={confirmPass}
					underlineColorAndroid='transparent'
					onChangeText={confirmPass => setConfirmPass(confirmPass)} />
			</View>

			<View style={style.buttom}>
				<TouchableOpacity onPress={() => {
					if (password != confirmPass) {
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
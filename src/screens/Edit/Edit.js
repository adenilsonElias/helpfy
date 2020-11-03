import React, { useContext, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView, Button } from 'react-native'
import AuthContext from '../../context/auth_context'
import { useNavigation, useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import style from './style'
import User from '../../model/user'
import { CreateNewUser, updateUser } from '../../firebase/Authentication'
import { color1 } from '../../global/constant/constant'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { HeaderBackButton } from '@react-navigation/stack'
import EditImage from './components/Edit_Image/Edit_Image'
import EditBackground from './components/Edit_Background/Edit_Background'
import Header from './components/Header/Header'
import TheDatePicker from './components/TheDatePicker/TheDatePicker'
import { useSelector } from 'react-redux'
import { Overlay } from 'react-native-elements'

export default Edit = () => {
	const navigation = useNavigation()
	const usesrParam: User = useRoute().params.user;
	const user: User = useSelector(state => state.userState.user)
	const auth = useContext(AuthContext);
	const [visible, setVisible] = useState(false);
	const [email, setEmail] = useState(usesrParam ? usesrParam.email : '')
	const [name, setName] = useState(usesrParam ? usesrParam.name : '')
	const [birth, setBirth] = useState(usesrParam ? usesrParam.birthDay : '')
	const [state, setState] = useState(usesrParam ? usesrParam.state : '')
	const [city, setCity] = useState(usesrParam ? usesrParam.city : '')
	const [password, setPassword] = useState('')
	const [confirmPass, setConfirmPass] = useState('')
	const [showPass, setShowPass] = useState(true)
	const [showPassConfirm, setShowPassConfirm] = useState(true)

	const showPassFuntion = () => {
		setShowPass(!showPass)
	}

	const showPassConfirmFuntion = () => {
		setShowPassConfirm(!showPassConfirm)
	}

	const toggleOverlay = () => {
		setVisible(true);
	};

	function HandleEdit() {
		setVisible(false)
		let newUser = user
		newUser.name = name
		newUser.email = email
		newUser.birthDay = birth
		newUser.city = city
		newUser.state = state
		newUser.profileImage = null // aqui vai a nova imagem
		newUser.converImage = null // aqui vai a nova imagem de fundo

		updateUser(newUser, password, email, user).then(() => {
			console.info("usuario atualizado com sucesso")
			navigation.goBack()
		}).catch((error) => {
			console.debug(error)
			switch (error) {
				case 'Erro ao reautenticar':
					// senha errada provavelmente
					break
				case 'Erro ao atualizar email':
					// novo email invalido ou ja existe
					break
				default :
					"Erro aleatorio"
			}
			setPassword("")
		})

	}

	return (
		<>
			<Header alterUser={toggleOverlay} />
			<ScrollView style={style.container}
				showsVerticalScrollIndicator={false}>
				{/* <View style={style.container}> */}
				<EditImage />
				<EditBackground />
				<View style={style.inputContainer}>
					<Icon name={'user'} size={26} color={color1} style={style.icon} />
					<TextInput style={style.input}
						placeholder='Nome'
						placeholderTextColor={color1}
						keyboardType='email-address'
						value={name}
						underlineColorAndroid='transparent'
						onChangeText={name => setName(name)} />
				</View>
				<View style={style.inputContainer}>
					<Icon name={'at-sign'} size={26} color={color1} style={style.icon} />
					<TextInput style={style.input}
						placeholder='E-mail'
						placeholderTextColor={color1}
						keyboardType='email-address'
						value={email}
						underlineColorAndroid='transparent'
						onChangeText={email => setEmail(email)} />
				</View>
				<TheDatePicker birth={birth} setBirth={setBirth} />
				<View style={style.inputContainer}>
					<Icon name={'map-pin'} size={26} color={color1} style={style.icon} />
					<TextInput style={style.input}
						placeholder='Estado'
						placeholderTextColor={color1}
						keyboardType='email-address'
						value={state}
						underlineColorAndroid='transparent'
						onChangeText={state => setState(state)} />
				</View>
				<View style={style.inputContainer}>
					<Icon name={'map-pin'} size={26} color={color1} style={style.icon} />
					<TextInput style={style.input}
						placeholder='Cidade'
						placeholderTextColor={color1}
						keyboardType='email-address'
						value={city}
						underlineColorAndroid='transparent'
						onChangeText={city => setCity(city)} />
				</View>
				<Overlay isVisible={visible} onBackdropPress={() => setVisible(false)} >
					<>
						<Text>Insira sua senha</Text>
						<View style={style.inputContainer}>
							<TextInput style={[style.input, { paddingRight: '15%' }]}
								placeholder='Insira a senha'
								placeholderTextColor={color1}
								secureTextEntry={showPass}
								value={password}
								underlineColorAndroid='transparent'
								onChangeText={passwod => setPassword(passwod)} />
							<View style={{ marginTop: 10 }}>
								<Button onPress={HandleEdit} title="Confirmar" />
							</View>
						</View>
					</>
				</Overlay>
			</ScrollView>
		</>
	)
}

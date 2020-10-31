import React, { useContext, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import AuthContext from '../../context/auth_context'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import style, { placeHolderStyle, placeholderValue, placeholderValue2 } from './style'
import User from '../../model/user'
import { color1 } from '../../global/constant/constant'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { getCities, getStates } from '../../api/ibge'
import RNPickerSelect from 'react-native-picker-select';
import TheDatePicker from './components/The_Date_Picker/TheDatePicker'

// @TODO Conserta waning quando tem uma cidade selecionada e você altera o estado

export default Register = () => {
	const navigation = useNavigation()
	const auth = useContext(AuthContext);
	const [email, setEmail] = useState('')
	const [stateList, setStateList] = useState([])
	const [stateUF, setStateUf] = useState('')
	const [cityList, setCityList] = useState([])
	const [name, setName] = useState('')
	const [birth, setBirth] = useState('')
	const [state, setState] = useState('')
	const [city, setCity] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPass, setConfirmPass] = useState('')
	const [showPass, setShowPass] = useState(true)
	const [showPassConfirm, setShowPassConfirm] = useState(true)
	const [textInputRef, setTextInputRef] = useState(0)

	function handleCreateUser() {
		const user = new User({
			email, name, senha: password, birthDay: birth,
			state, city, profileImage: null, score: 0
		})
		auth.createUser(user)
	}

	const showPassFuntion = () => {
		setShowPass(!showPass)
	}

	const showPassConfirmFuntion = () => {
		setShowPassConfirm(!showPassConfirm)
	}

	useEffect(() => {
		async function getStatesFunction() {
			setStateList(await getStates())
		}
		getStatesFunction()
	}, [])

	async function getCitiesFunction(sigla: String) {
		setCityList(await getCities(sigla))
	}

	return (
		<KeyboardAwareScrollView
			showsVerticalScrollIndicator={false}
			scrollEnabled={true}			
			enableAutomaticScroll={true}
			contentContainerStyle={style.container}>
			{/* <View style={style.container}> */}
			<View style={style.titleContainer}>
				<Text style={style.title}>Registrar</Text>
			</View>
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
			<TheDatePicker birth={birth} setBirth={setBirth}/>
			<RNPickerSelect
				onValueChange={(value, index) => {
					setStateUf('')
					if (value != '') {
						setStateUf(value)
						setState(stateList[index - 1].nome);
						getCitiesFunction(value)
					}
					else {
						setStateUf('')
						setState('')
						setCity('')
						setCityList([])
					}
				}}
				items={stateList.map((e) => {
					return { label: e.nome, value: e.sigla }
				})}
				placeholder={placeholderValue}
				// placeholder={{
				// 	label: 'Selecione um estado',
				// 	value: '',
				// }}
				style={placeHolderStyle}
				useNativeAndroidPickerStyle={false}
				Icon={() => {
					return(
						<Icon name={'map-pin'} size={26} color={color1} style={style.pickerIcon} />
					)
				}}
			/>
			<RNPickerSelect
				value={stateUF != '' ? city : ''}
				onValueChange={(value, index) => {
					if (value != '') {
						setCity(value)
					}
					else {
						setCity('')
					}
				}}
				items={cityList.map((city) => {
					return { label: city, value: city }
				})}
				placeholder={placeholderValue2}
				style={placeHolderStyle}
				useNativeAndroidPickerStyle={false}
				Icon={() => {
					return <Icon name={'map-pin'} size={26} color={color1} style={style.pickerIcon} />
				}}
			/>
			<View style={style.inputContainer}>
				<Icon name={'lock'} size={26} color={color1} style={style.icon} />
				<TextInput style={[style.input, { paddingRight: '15%' }]}
					placeholder='Senha'
					placeholderTextColor={color1}
					secureTextEntry={showPass}
					value={password}
					underlineColorAndroid='transparent'
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
					placeholder='Confirmar senha'
					placeholderTextColor={color1}
					secureTextEntry={showPassConfirm}
					value={confirmPass}
					underlineColorAndroid='transparent'
					onChangeText={confirmPass => setConfirmPass(confirmPass)} />
				<TouchableOpacity style={style.btnEye}
					onPress={showPassConfirmFuntion}>
					<Icon name={showPassConfirm === false ? 'eye' : 'eye-off'}
						size={26} color={color1} />
				</TouchableOpacity>
			</View>
			<View style={style.buttomContainer}>
				<View style={style.buttom}>
					<TouchableOpacity onPress={() => {
						navigation.goBack()
					}}>
						<Text style={style.buttomText}>Voltar</Text>
					</TouchableOpacity>
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
			{/* </View> */ }
		</KeyboardAwareScrollView >
	)
}
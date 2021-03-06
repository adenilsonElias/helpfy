import React, { useContext, useEffect, useRef, useState } from 'react'
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
import Toast from 'react-native-simple-toast'

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
	const ref1 = useRef(null)
	const ref2 = useRef(null)

	function handleCreateUser() {
		let emailFormat = email.toLowerCase()
		const user = new User({
			email: emailFormat, name, senha: password, birthDay: birth,
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

	const renderCity = () => {
		if (stateUF == '') {
			return(
				<View />
			)
		} else {
			return(
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
			)
		}
	}

	const verifyCreateUser = () => {
		if (email.length == 0 || name.length <= 0 || password.length < 6 || birth.length == 0 ||
			state.length == 0 || city.length == 0){
            Toast.show("Verifique se todos os campos estão preenchidos corretamente", Toast.LONG)
        } else {
			if (password != confirmPass) {
				return Toast.show("Senhas não conferem", Toast.LONG)
			} else {
				handleCreateUser()
			}
		}
    }

	return (
		<View style={style.container}>
			<KeyboardAwareScrollView
				showsVerticalScrollIndicator={false}
				keyboardShouldPersistTaps={"always"}
				scrollEnabled={true}
				enableAutomaticScroll={true}
				// contentContainerStyle={style.container}
				>
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
						onSubmitEditing={() => {
							ref1.current.focus()
						}}
						returnKeyType={"next"}
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
						ref={ref1}
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
				{ renderCity() }
				<View style={style.inputContainer}>
					<Icon name={'lock'} size={26} color={color1} style={style.icon} />
					<TextInput style={[style.input, { paddingRight: '15%' }]}
						placeholder='Senha'
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
						placeholder='Confirmar senha'
						placeholderTextColor={color1}
						secureTextEntry={showPassConfirm}
						value={confirmPass}
						underlineColorAndroid='transparent'
						ref={ref2}
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
						<TouchableOpacity onPress={verifyCreateUser}>
							<Text style={style.buttomText}>Salvar</Text>
						</TouchableOpacity>
					</View>
				</View>
				{/* </View> */ }
				<View style={{ paddingTop: '5%' }}/>
			</KeyboardAwareScrollView>
		</View>
	)
}
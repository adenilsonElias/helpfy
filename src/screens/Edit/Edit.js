import React, { useContext, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView, Button } from 'react-native'
import AuthContext from '../../context/auth_context'
import { useNavigation, useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import style, { placeHolderStyle, placeholderValue, placeholderValue2 } from './style'
import User from '../../model/user'
import { CreateNewUser, updateUser } from '../../firebase/Authentication'
import { color1 } from '../../global/constant/constant'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { HeaderBackButton } from '@react-navigation/stack'
import EditImage from './components/Edit_Image/Edit_Image'
import EditBackground from './components/Edit_Background/Edit_Background'
import Header from './components/Header/Header'
import TheDatePicker from './components/TheDatePicker/TheDatePicker'
import { useDispatch, useSelector } from 'react-redux'
import { Overlay } from 'react-native-elements'
import RNPickerSelect from 'react-native-picker-select';
import { getCities, getStates } from '../../api/ibge'
import Toast from 'react-native-simple-toast'
import { setLoading } from '../../store/actions/loading'
import Loading from '../Loading/Loading'

export default Edit = () => {
	const navigation = useNavigation()
	const usesrParam: User = useRoute().params.user;
	const user: User = useSelector(state => state.userState.user)
	const auth = useContext(AuthContext);
	const [visible, setVisible] = useState(false);
	const [stateUF, setStateUf] = useState('')
	const [cityList, setCityList] = useState([])
	const [stateList, setStateList] = useState([])
	const [email, setEmail] = useState(user.email)
	const [name, setName] = useState(user.name)
	const [birth, setBirth] = useState(user.birthDay)
	const [state, setState] = useState(user.state)
	const [city, setCity] = useState(user.city)
	const [profileImage, setProfileImage] = useState(user.profileImage)
	const [coverImage, setCoverImage] = useState(user.converImage)
	const [password, setPassword] = useState("")
	const [showPass, setShowPass] = useState(true)
	const loading = useSelector(state => state.loadingState.loading)
    const dispatch = useDispatch()

	const toggleOverlay = () => {
		setVisible(true);
	};

	const showPassFuntion = () => {        
        setShowPass(!showPass)
	}

	useEffect(() => {
		async function getStatesFunction() {
			setStateList(await getStates())
		}
		getStatesFunction()
	}, [])

	useEffect(() => {
		if (stateList.length > 0) {
			const userState = stateList.filter((value) => {
				if (value.nome == user.state) {
					return value
				}
			})[0]
			setStateUf(userState.sigla)
			setState(userState.nome)
			getCitiesFunction(userState.sigla)
		}
	}, [stateList])

	async function getCitiesFunction(sigla: String) {
		setCityList(await getCities(sigla))
	}

	const renderCity = () => {
		if (stateUF == '') {
			return (
				<View />
			)
		} else {
			return (
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

	function HandleEdit() {
		if (name.length == 0 || email.length == 0 || birth.length == 0 || city.length == 0 || state.length == 0) {
			setVisible(false)
			Toast.show("Verifique se todos os campos estão preenchidos", Toast.LONG)
		} else {
			setVisible(false)
			let newUser = user
			newUser.name = name
			newUser.email = email
			newUser.birthDay = birth
			newUser.city = city
			newUser.state = state
			newUser.profileImage = profileImage // aqui vai a nova imagem
			newUser.converImage = coverImage // aqui vai a nova imagem de fundo
	
			dispatch(setLoading(true))
			updateUser(newUser, password, email, user).then(() => {
				console.info("usuario atualizado com sucesso")
				dispatch(setLoading(false))
				navigation.goBack()
			}).catch((error) => {
				switch (error) {
					case 'Erro ao reautenticar':
						// senha errada provavelmente
						Toast.show("Senha incorreta", Toast.LONG)
						break
					case 'Erro ao atualizar email':
						// novo email invalido ou ja existe
						Toast.show("E-mail invalido", Toast.LONG)
						break
					default:
						Toast.show("Não foi possivel fazer atualização dos dados", Toast.LONG)
						"Erro aleatorio"
				}
				setPassword("")
			})
		}
	}

	if(loading){
        return(
            <Loading />
        )
    }

	return (
		<>
			<Header alterUser={toggleOverlay} />
			<ScrollView style={style.container}
				keyboardShouldPersistTaps={"always"}
				showsVerticalScrollIndicator={false}>
				{/* <View style={style.container}> */}
				<EditImage profileImage={profileImage} setProfileImage={setProfileImage} />
				<EditBackground coverImage={coverImage} setCoverImage={setCoverImage} />
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
					// value= {{
					// 	label: state,
					// 	value : stateUF
					// }}
					// placeholder={placeholderValue}
					placeholder={{
						label: state,
						value: stateUF,
					}}
					style={placeHolderStyle}
					useNativeAndroidPickerStyle={false}
					Icon={() => {
						return (
							<Icon name={'map-pin'} size={26} color={color1} style={style.pickerIcon} />
						)
					}}
				/>
				{renderCity()}
				<Overlay isVisible={visible} onBackdropPress={() => setVisible(false)}
					overlayStyle={style.overlayContainer}>
					<>
						<Text style={style.titleText}>Insira sua senha para confirmar as atualizações</Text>
						<View style={style.inputContainer}>
							<TextInput style={[style.input, { paddingLeft: '5%', width: '100%', paddingRight: '17%' }]}
								placeholder='Senha'
								placeholderTextColor={color1}
								secureTextEntry={showPass}
								value={password}
								underlineColorAndroid='transparent'
								onChangeText={passwod => setPassword(passwod)} />
							<TouchableOpacity style={[style.btnEye, { right: '5%' }]}
								onPress={showPassFuntion}>
								<Icon name={showPass === false ? 'eye' : 'eye-off'}
									size={26} color={color1} />
							</TouchableOpacity>
						</View>
						<View style={style.buttom}>
							<TouchableOpacity onPress={password.length != 0 ? HandleEdit : null}>
								<Text style={style.buttomText}>Confirmar</Text>
							</TouchableOpacity>
						</View>
					</>
				</Overlay>
			</ScrollView>
		</>
	)
}

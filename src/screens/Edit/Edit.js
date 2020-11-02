import React, { useContext, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import AuthContext from '../../context/auth_context'
import { useNavigation, useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import style from './style'
import User from '../../model/user'
import { CreateNewUser } from '../../firebase/Authentication'
import { color1 } from '../../global/constant/constant'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { HeaderBackButton } from '@react-navigation/stack'
import EditImage from './components/Edit_Image/Edit_Image'
import EditBackground from './components/Edit_Background/Edit_Background'
import Header from './components/Header/Header'
import TheDatePicker from './components/TheDatePicker/TheDatePicker'

export default Edit = () => {
	const navigation = useNavigation()
	const usesrParam: User = useRoute().params.user;
	const auth = useContext(AuthContext);
	const [email, setEmail] = useState(usesrParam ? usesrParam.email : '')
	const [name, setName] = useState(usesrParam ? usesrParam.name : '')
	const [birth, setBirth] = useState(usesrParam ? usesrParam.birthDay : '')
	const [state, setState] = useState(usesrParam ? usesrParam.state : '')
	const [city, setCity] = useState(usesrParam ? usesrParam.city : '')
	const [profileImage, setProfileImage] = useState(usesrParam ? usesrParam.profileImage : null)
	const [coverImage, setCoverImage] = useState(usesrParam ? usesrParam.coverImage : null)
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

	useEffect(() => {
        navigation.setOptions({
            // Quando clicar em voltar, coloca novamente o bottomBar
            headerLeft: (props) => (
                < HeaderBackButton
					tintColor={color1}
                    onPress={() => {
                        navigation.setOptions({
                            tabBarVisible: true
                        }),
                        navigation.goBack()
                    }}
				/>),
			headerRight: () => (
				<TouchableOpacity style={style.save}
					onPress={() => {
						if (password != confirmPass) {
							//@ TODO Colocar error para quando senhas forem diferentes
							return
						}
					}}>
					<Icon name={'save'} size={25} color={color1} />
				</TouchableOpacity>
			)
        })
    }, [])

    return (
		<>
			<Header password={password} confirmPass={confirmPass}/>
			<ScrollView style={style.container} 
				showsVerticalScrollIndicator={false}>
				{/* <View style={style.container}> */}
				<EditImage profileImage={profileImage} setProfileImage={setProfileImage}/>
				<EditBackground coverImage={coverImage} setCoverImage={setCoverImage}/>
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
			</ScrollView>
		</>
    )
}

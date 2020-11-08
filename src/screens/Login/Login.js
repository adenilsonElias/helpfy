import React, { useContext, useRef, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import AuthContext from '../../context/auth_context'
import Icon from 'react-native-vector-icons/Feather'
import style from './style'
import { color1 } from '../../global/constant/constant'
import Buttons from './components/Buttons/Buttons'
import Lottie from 'lottie-react-native'

import animation from '../../assets/animations/box.json'
import { cos } from 'react-native-reanimated'

export default Login = () => {
    const auth = useContext(AuthContext);    
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showPass, setShowPass] = useState(true) 
	const [press, setPress] = useState(false)	
	const ref = useRef(null)
	    
    function handle_entrar_button_press(){
        auth.logIn(email,password);
    }

    const showPassFuntion = () => {        
        setShowPass(!showPass)
	}
	
    return(
		<ScrollView style={style.container}
			keyboardShouldPersistTaps={"always"}
			showsVerticalScrollIndicator={false}>
			<View style={style.animationContainer}>
				<Lottie resizeMode={"contain"} source={animation} autoPlay loop/>
			</View>
			<View style={style.titleContainer}>
				<Text style={style.title}>Helpfy</Text>
			</View>
			<View style={style.inputContainer}>
				<Icon name={'mail'} size={26} color={color1} style={style.icon}/>
				<TextInput style={style.input}
					placeholder='E-mail'
					placeholderTextColor={color1}
					keyboardType='email-address'
					value={email}
					underlineColorAndroid='transparent'
					onSubmitEditing={() => {
						ref.current.focus()
					}}
					returnKeyType={"next"}
					onChangeText={email => setEmail(email)} />
			</View>
			<View style={style.inputContainer}>
				<Icon name={'user'} size={26} color={color1} style={style.icon}/>
				<TextInput style={[style.input, { paddingRight: '15%' }]}
					placeholder='Senha' 
					placeholderTextColor={color1}
					secureTextEntry={showPass}
					value={password}
					underlineColorAndroid='transparent'
					ref={ref}
					onSubmitEditing={() => {
						if(email.length != 0 && password.length != 0){
							handle_entrar_button_press()
						}
					}}
					onChangeText={password => setPassword(password)} />                      
				<TouchableOpacity style={style.btnEye} 
					onPress={showPassFuntion}>
					<Icon name={showPass === false ? 'eye' : 'eye-off'} 
						size={26} color={color1}/>
				</TouchableOpacity>
			</View>
			<Buttons login={handle_entrar_button_press} enabled={email.length != 0 && password.length != 0} />
			<View style={{ flex: 1, paddingTop: '5%' }}/> 
        </ScrollView>
    )
}



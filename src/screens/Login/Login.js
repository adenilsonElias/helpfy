import React, { useContext, useState } from 'react'
import {
    View,
    Text,
	TouchableOpacity,
	TextInput
} from 'react-native'
import AuthContext from '../../context/auth_context'
import Icon from 'react-native-vector-icons/Feather'
import style from './style'
import { color1 } from '../../global/constant/constant'
import Buttons from './components/Buttons/Buttons'
import Lottie from 'lottie-react-native'

import animation from '../../assets/animations/box.json'

export default Login = () => {
    const auth = useContext(AuthContext);    
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showPass, setShowPass] = useState(true) 
	const [press, setPress] = useState(false)
	    
    function handle_entrar_button_press(){
        auth.logIn(email,password);
    }

    const showPassFuntion = () => {        
        setShowPass(!showPass)
    }
	
    return(
        <View style={style.container}>
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
					// autoFocus={true} 
					keyboardType='email-address'
					value={email}
					underlineColorAndroid='transparent'
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
					onChangeText={password => setPassword(password)} />                      
				<TouchableOpacity style={style.btnEye} 
					onPress={showPassFuntion}>
					<Icon name={showPass === false ? 'eye' : 'eye-off'} 
						size={26} color={color1}/>
				</TouchableOpacity>
			</View>
			<Buttons login={handle_entrar_button_press} />
        </View>
    )
}



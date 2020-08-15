import React, { useContext, useState } from 'react'
import {
    View,
    Text,
	TouchableOpacity,
	TextInput
} from 'react-native'
import AuthContext from '../../context/auth_context'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'
import style from './style'


export default Login = () => {
    const auth = useContext(AuthContext);
    const navigation = useNavigation();

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
			<View style={style.titleContainer}>
				<Text style={style.title}>Helpfy</Text>
			</View>
			
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
					placeholder='Senha' 
					placeholderTextColor='#fff'
					secureTextEntry={showPass}
					value={password}
					underlineColorAndroid='transparent'
					onChangeText={password => setPassword(password)} />                      
				<TouchableOpacity style={style.btnEye} 
					onPress={showPassFuntion}>
				<Icon name={press === false ? 'eye' : 'eye-off'} 
					size={26} color='rgba(255, 255, 255, 0.7)' />
				</TouchableOpacity>
			</View>
			<View style={style.buttom}>
				<TouchableOpacity onPress={handle_entrar_button_press}>
					<Text style={style.buttomText}>Entrar</Text>
				</TouchableOpacity>
        	</View>
			<View style={style.buttom}>
				<TouchableOpacity onPress={()=> navigation.navigate('Register')}>
					<Text style={style.buttomText}>Registrar</Text>
				</TouchableOpacity>
        	</View>
            

        </View>
    )
}



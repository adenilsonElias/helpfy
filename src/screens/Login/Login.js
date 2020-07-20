import React, { useContext, useState } from 'react';
import {
    View,
    Text,
    Button,
	StyleSheet,
	TouchableOpacity,
	TextInput
} from 'react-native'
import AuthContext from '../../context/auth_context';
import { useNavigation } from '@react-navigation/native';

export default Login = () => {
    const auth = useContext(AuthContext);
    const navigation = useNavigation();

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showPass, setShowPass] = useState(true) 
	const [press, setPress] = useState(false)

	//showPassFunction = () => {        
	//	if(press === false){
	//		setShowPass(false)
	//		setPress(true)
	//	} else {
	//		setShowPass(true)
	//		setPress(false)
	//	}
	//}
	
    return(
        <View style={styles.container}>
            { /* <Text>Login</Text>
            <Button title="fica false" onPress={()=> auth.setlogin(true)}></Button>
			<Button title="Register" onPress={()=> navigation.navigate('Register')}></Button>8 */ }
			<View style={styles.titleContainer}>
				<Text style={styles.title}>Helpfy</Text>
			</View>
			
			<View style={styles.inputContainer}>
				<TextInput style={styles.input}
					placeholder='E-mail'
					placeholderTextColor='#fff'                        
					autoFocus={true} 
					keyboardType='email-address'
					value={email}
					underlineColorAndroid='transparent'
					onChangeText={email => setEmail(email)} />
			</View>
			<View style={styles.inputContainer}>
				<TextInput style={styles.input}
					placeholder='Senha' 
					placeholderTextColor='#fff'
					secureTextEntry={showPass}
					value={password}
					underlineColorAndroid='transparent'
					onChangeText={password => setPassword(password)} />
				{/*<TouchableOpacity>
				</TouchableOpacity>*/}                        
			</View>
			
			<View style={styles.buttom}>
				<TouchableOpacity>
					<Text style={styles.buttomText}>Entrar</Text>
				</TouchableOpacity>
        	</View>
			<View style={styles.buttom}>
				<TouchableOpacity onPress={()=> navigation.navigate('Register')}>
					<Text style={styles.buttomText}>Registrar</Text>
				</TouchableOpacity>
        	</View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',        
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 40
    },
    title: {       
        fontSize: 50,
        color: 'black',
        textShadowColor: '#fff', 
        textShadowOffset: { width: 1, height: 0 },
        textShadowRadius: 10,        
    },
    buttom: {
        height: 45,
        marginBottom: 20,
        width: '45%',
        borderRadius: 25,                
        justifyContent: 'center',
		alignContent: 'center',
		backgroundColor: 'blue'
    },
    buttomText: {
        fontSize: 20,
        color: 'white',
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    input: {                
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        height: 45,
        borderRadius: 25,
        color: '#fff',
        fontSize: 16,
        paddingLeft: 45,
        marginHorizontal: 25,        
    },
    inputContainer: {
        marginBottom: 20,
        width: '100%',    
        justifyContent: 'center',        
    }
})
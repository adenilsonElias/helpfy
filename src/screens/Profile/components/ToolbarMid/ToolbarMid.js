import React, { useContext } from 'react';
import {
    View,
    Text,
	Button, 
	TouchableOpacity
} from 'react-native'
import style from './style'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';
import { color1 } from '../../../../global/constant/constant';
import ProfileContext from '../../Profile_Context';

export default ToolbarMid = () => {
	const navigation = useNavigation()
	const profileContext = useContext(ProfileContext)
    return(
        <View style={style.bodyIcons}>
    	    <TouchableOpacity style={style.buttonContainer}
				onPress={()=> {navigation.navigate('Rating',{user:profileContext.user})}}>
				<Icon name='message-square' size={30} color={color1}/>
			</TouchableOpacity>
			<TouchableOpacity style={style.buttonContainer}
				onPress={()=> {navigation.navigate('MyPosts',{user:profileContext.user})}}>
				<Icon name='grid' size={30} color={color1} /> 
			</TouchableOpacity>
		</View>
	)
}
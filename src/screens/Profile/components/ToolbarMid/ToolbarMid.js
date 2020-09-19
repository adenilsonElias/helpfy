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

export default ToolbarMid = () => {
	const navigation = useNavigation()
    return(
        <View style={style.bodyIcons}>
    	    <TouchableOpacity style={style.buttonContainer}
				onPress={()=> {navigation.navigate('Evaluation')}}>
				<Icon name='message-square' size={30} color={color1}/>
			</TouchableOpacity>
			<TouchableOpacity style={style.buttonContainer}
				onPress={()=> {navigation.navigate('MyPosts')}}>
				<Icon name='grid' size={30} color={color1} /> 
			</TouchableOpacity>
		</View>

	)

}
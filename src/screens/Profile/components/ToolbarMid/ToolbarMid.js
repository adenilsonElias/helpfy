import React, { useContext } from 'react';
import {
    View,
    Text,
	Button, 
	TouchableOpacity
} from 'react-native'
import style from './style'
import Icon from 'react-native-vector-icons/Feather'

export default ToolbarMid = () => {

    return(
        <View style={style.bodyIcons}>
    	    <TouchableOpacity style={style.buttonContainer}>
				<Icon name='message-square' size={30} color={'rgba(225, 22, 94, 1)'}/>
			</TouchableOpacity>
			<TouchableOpacity style={style.buttonContainer}>
				<Icon name='grid' size={30} color={'rgba(225, 22, 94, 1)'} /> 
			</TouchableOpacity>
		</View>

	)

}
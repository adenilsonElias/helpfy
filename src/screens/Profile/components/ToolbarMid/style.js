import { StyleSheet } from 'react-native'
import { color2 } from '../../../../global/constant/constant'

const style = StyleSheet.create({
	bodyIcons: {
		height: 50,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		backgroundColor: color2
	},
  	buttonContainer: {		    	
    	alignItems: 'center',
    	width:60,
		borderRadius:40,
	},
})


export default style
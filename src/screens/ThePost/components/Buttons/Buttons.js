import React, { useContext } from 'react'
import AuthContext from '../../../../context/auth_context'
import { TouchableOpacity, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import style from './style';

const Buttons = () => {
    const auth = useContext(AuthContext)
    const wantOrNoText = auth.isLogged ? 'Eu não quero!' : 'Eu quero!'

    const buttom = auth.isLogged ?
        <View style={style.container}>
            <TouchableOpacity style={style.buttonList}
                onPress={()=>{}}>
                <Text style={style.buttonText}>Lista de Pessoas</Text>
            </TouchableOpacity>
        </View> :
        <View style={[style.container, style.container2]}>
            <TouchableOpacity onPress={()=>{}}>
                <Icon name={'heart'} size={40} color={'red'} />
            </TouchableOpacity>
            <TouchableOpacity style={style.wantButton}
                onPress={()=>{}}>
                <Text style={style.buttonText}>{wantOrNoText}</Text>
            </TouchableOpacity>
        </View>
    
    return(
        <View>
            {buttom}
        </View>
    )
}

export default Buttons
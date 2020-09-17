import React, { useState } from 'react';
import { View, Image, Text, TextInput, ScrollView } from 'react-native';
import style, { placeHolderStyle, placeholderValue } from './style'
import Icon from 'react-native-vector-icons/Feather'
import RNPickerSelect from 'react-native-picker-select'
import { color2, color1 } from '../../global/constant/constant'


export default Edit = () => {
    const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [birth, setBirth] = useState('')
	const [local, setLocal] = useState()
    const [password, setPassword] = useState('')
    
    const placeholder = {
        label: 'Selecione a categoria do item',
        value: null,
        color: 'black',
    }

    const stateLocal = [
        { label: 'Acre', value: 'ac' },
        { label: 'Alagoas', value: 'al'},
        { label: 'Amapá', value: 'ap' },
        { label: 'Amazonas', value: 'am'},
        { label: 'Bahia', value: 'ba'},
        { label: 'Ceará', value: 'ce' },
        { label: 'Espírito Santo', value: 'es'},
        { label: 'Goiás', value: 'go' },
        { label: 'Maranhão', value: 'ma'},
        { label: 'Mato Grosso', value: 'mt'},
        { label: 'Mato Grosso do Sul', value: 'ms'},
        { label: 'Minas Gerais', value: 'mg'},
        { label: 'Pará', value: 'pa'},
        { label: 'Paraíba', value: 'pb'},
        { label: 'Paraná', value: 'pr'},
        { label: 'Pernambuco', value: 'pe'},
        { label: 'Rio de Janeiro', value: 'rj'},
        { label: 'Rio Grande do Norte', value: 'rn'},
        { label: 'Rio Grande do Sul', value: 'rs'},
        { label: 'Rondônia', value: 'ro'},
        { label: 'Roraima', value: 'rr'},
        { label: 'Santa Catarina', value: 'sc'},
        { label: 'São Paulo', value: 'sp'},
        { label: 'Sergipe', value: 'se'},
        { label: 'Tocantins', value: 'to'},
        { label: 'Distrito Federal', value: 'df'},

    ]
    return (
        <ScrollView>
            <View style={style.container}>
                    <View style={style.editPhoto}>
                        <View style={style.avatar} />
                        <View style={style.buttom}>
                        <Text style={style.buttomText}>Editar imagem</Text>
                    </View>
                </View>
                <Title title={'Nome'} />
                <View style={style.editInfo}>
                        <TextInput style={style.input}
                            placeholder='Nome'
                            placeholderTextColor={color1}
                            keyboardType='email-address'
                            value={name}
                            underlineColorAndroid='transparent'
                            onChangeText={name => setName(name)} />
                </View>
                <Title title={'E-mail'} />
                <View style={style.editInfo}>
                    <TextInput style={style.input}
                        placeholder='E-mail'
                        placeholderTextColor={color1}
                        keyboardType='email-address'
                        value={email}
                        underlineColorAndroid='transparent'
                        onChangeText={email => setEmail(email)} />

                </View>
                <Title title={'Data de Nascimento'} />
                <View style={style.editInfo}>
                    <TextInput style={style.input}
                        placeholder='Data de nascimento'
                        placeholderTextColor={color1}
                        keyboardType='email-address'
                        value={birth}
                        underlineColorAndroid='transparent'
                        onChangeText={birth => setBirth(birth)} />
                </View>
                <Title title={'Estado'} />
                <RNPickerSelect
                    onValueChange={value => {
                        setLocal(value)
                    }}
                    items={stateLocal}
                    placeholder={placeholderValue}
                    style={placeHolderStyle}
                    useNativeAndroidPickerStyle={false}
                />
                <Title title={'Senha'} />
                <View style={style.editInfo}>
                    <TextInput style={style.input}
                        placeholder='Senha'
                        placeholderTextColor={color1}
                        keyboardType='email-address'
                        value={password}
                        underlineColorAndroid='transparent'
                        onChangeText={password => setPassword(password)} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <View style={style.buttom}>
                        <Text style={style.buttomText}>Salvar</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

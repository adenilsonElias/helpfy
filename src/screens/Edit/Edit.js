import React, { useState } from 'react';
import { View, Image, Text, TextInput, ScrollView } from 'react-native';
import style from './style'
import Icon from 'react-native-vector-icons/Feather'
import RNPickerSelect from 'react-native-picker-select'


export default Edit = () => {
    const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [birth, setBirth] = useState('')
	const [local, setLocal] = useState('')
    const [password, setPassword] = useState('')
    
    const placeholder = {
        label: 'Selecione a categoria do item',
        value: null,
        color: 'black',
    }

    const stateLocal = [
        { label: 'Acre', value: 'Brinquedos' },
        { label: 'Alagoas', value: 'Calçados'},
        { label: 'Amapá', value: 'Eletrodomésticos' },
        { label: 'Amazonas', value: 'Higiene Pessoal'},
        { label: 'Livros', value: 'Livros' },
        { label: 'Bahia', value: 'Material de Contrução'},
        { label: 'Ceará', value: 'Material de Limpeza' },
        { label: 'Espírito Santo', value: 'Material Escolar'},
        { label: 'Goiás', value: 'Móveis' },
        { label: 'Maranhão', value: 'Roupas'},
        { label: 'Mato Grosso', value: 'Roupas'},
        { label: 'Mato Grosso do Sul', value: 'Roupas'},
        { label: 'Minas Gerais', value: 'Roupas'},
        { label: 'Pará', value: 'Roupas'},
        { label: 'Paraíba', value: 'Roupas'},
        { label: 'Paraná', value: 'Roupas'},
        { label: 'Pernambuco', value: 'Roupas'},
        { label: 'Rio de Janeiro', value: 'Roupas'},
        { label: 'Rio Grande do Norte', value: 'Roupas'},
        { label: 'Rio Grande do Sul', value: 'Roupas'},
        { label: 'Rondônia', value: 'Roupas'},
        { label: 'Roraima', value: 'Roupas'},
        { label: 'Santa Catarina', value: 'Roupas'},
        { label: 'São Paulo', value: 'Roupas'},
        { label: 'Sergipe', value: 'Roupas'},
        { label: 'Tocantins', value: 'Roupas'},
        { label: 'Distrito Federal', value: 'Roupas'},

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
                <View style={style.editInfo}>
                    <Text style={style.textInfo}> Nome </Text>
                        <TextInput style={style.input}
                            placeholder='Nome'
                            placeholderTextColor={'black'}
                            keyboardType='email-address'
                            value={name}
                            underlineColorAndroid='transparent'
                            onChangeText={name => setName(name)} />
                </View>
                <View style={style.editInfo}>
                    <Text style={style.textInfo}> E-mail </Text>
                    <TextInput style={style.input}
                        placeholder='E-mail'
                        placeholderTextColor={'black'}
                        keyboardType='email-address'
                        value={email}
                        underlineColorAndroid='transparent'
                        onChangeText={email => setName(email)} />

                </View>
                <View style={style.editInfo}>
                    <Text style={style.textInfo}> Data de nascimento </Text>
                    <TextInput style={style.input}
                        placeholder='Data de nascimento'
                        placeholderTextColor={'black'}
                        keyboardType='email-address'
                        value={birth}
                        underlineColorAndroid='transparent'
                        onChangeText={birth => setName(birth)} />
                </View>
                
                <View style={style.editInfo}>
                    <Text style={style.textInfo}> Estado </Text>
                    <View style={style.editPicker}>
                        <RNPickerSelect
                            onValueChange={local => setLocal({ local })}
                            useNativeAndroidPickerStyle={false}
                            placeholder={placeholder} items={stateLocal}
                            placeholderTextColor={'black'}
                        />
                    </View>
                </View>
                <View style={style.editInfo}>
                    <Text style={style.textInfo}> Senha </Text>
                    <TextInput style={style.input}
                        placeholder='Senha'
                        placeholderTextColor={'black'}
                        keyboardType='email-address'
                        value={password}
                        underlineColorAndroid='transparent'
                        onChangeText={password => setName(password)} />
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

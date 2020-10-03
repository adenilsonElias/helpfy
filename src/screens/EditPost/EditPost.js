import React, { useState, useEffect } from 'react';
import { View, Image, Text, TextInput, ScrollView } from 'react-native';
import style, { placeHolderStyle, placeholderValue } from './style'
import Icon from 'react-native-vector-icons/Feather'
import RNPickerSelect from 'react-native-picker-select'
import Header from '../../global/components/Header/Header'
import { color2, categorys, color1 } from '../../global/constant/constant'
import { useNavigation } from '@react-navigation/native'
import { HeaderBackButton } from '@react-navigation/stack'


export default Chat_List = () => {
    const navigation = useNavigation()
    const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [images, setImages] = useState(null)
	const [category, setCategory] = useState([])
    
    const placeholder = {
        label: 'Selecione a categoria do post',
        value: null,
        color: 'black',
    }

    const converToPickerItem = (category) => {
        let list = []
        for (let a in category) {
            list.push({
                label: category[a].title,
                value: category[a].title,
                color: color1
            })
        }
        setCategory(list)
    }

    useEffect(() => {
        converToPickerItem(categorys)
        navigation.setOptions({
            // Quando clicar em voltar, coloca novamente o bottomBar
            headerLeft: (props) => (
                < HeaderBackButton
                    onPress={() => {
                        navigation.setOptions({
                            tabBarVisible: true
                        }),
                            navigation.goBack()
                    }}
                />)
        })
    }, [])

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style.container}>
                <Title title={'Título da Postagem'} />
                <View style={style.editInfo}>
                        <TextInput style={style.input}
                            placeholder='Título do postagem'
                            placeholderTextColor={'black'}
                            keyboardType='email-address'
                            value={title}
                            underlineColorAndroid='transparent'
                            onChangeText={title => setTitle(title)} />
                </View>
                <Title title={'Categoria da postagem'} />
                <RNPickerSelect
                    onValueChange={value => {
                        setCategory(value)
                    }}
                    items={category}
                    placeholder={placeholderValue}
                    style={placeHolderStyle}
                    useNativeAndroidPickerStyle={false}
                />
                <Title title={'Título da Postagem'} />
                <View style={style.editInfo}>
                    <TextInput style={style.input}
                        placeholder='Insira a descrição...'
                        placeholderTextColor={color1}
                        multiline={true}
                        value={description}
                        onChangeText={setDescription} />
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
import React, { useState } from 'react'
import { FlatList, TouchableOpacity, Image, Text, View } from 'react-native'
import style from './style'

const Categorys = (props) => {
    const [category, setCategory] = useState([{
            id: Math.random(),
            image: require('../../../../assets/imgs/mao.png'),
            title: 'Brinquedos'
        },{
            id: Math.random(),
            image: require('../../../../assets/imgs/mao.png'),
            title: 'Calçados'
        },{
            id: Math.random(),
            image: require('../../../../assets/imgs/mao.png'),
            title: 'Eletrodomésticos'
        },{
            id: Math.random(),
            image: require('../../../../assets/imgs/mao.png'),
            title: 'Higiene Pessoal'
        },{
            id: Math.random(),
            image: require('../../../../assets/imgs/mao.png'),
            title: 'Livros'
        },{
            id: Math.random(),
            image: require('../../../../assets/imgs/mao.png'),
            title: 'Material de Construção'
        },{
            id: Math.random(),
            image: require('../../../../assets/imgs/mao.png'),
            title: 'Material de Limpeza'
        },{
            id: Math.random(),
            image: require('../../../../assets/imgs/mao.png'),
            title: 'Material Escolar'
        },{
            id: Math.random(),
            image: require('../../../../assets/imgs/mao.png'),
            title: 'Móveis'
        },{
            id: Math.random(),
            image: require('../../../../assets/imgs/mao.png'),
            title: 'Roupas'
        }
    ])

    return(
        <FlatList numColumns={2}
            data={category}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => {
                return (
                    <View style={style.container}>
                        <TouchableOpacity>
                            <Image source={item.image} style={style.iconCateogry} />
                        </TouchableOpacity>
                        <Text style={style.textCategory}>{item.title}</Text>
                    </View>
                )
            }}
        />
    )
}

export default Categorys

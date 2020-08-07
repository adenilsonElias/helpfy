import React, { useState } from 'react'
import { FlatList, TouchableOpacity, Image, Text, View } from 'react-native'
import style from './style'
import { categorys } from '../../../../global/constant/constant'

const Categorys = (props) => {
    const [category, setCategory] = useState(categorys)

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

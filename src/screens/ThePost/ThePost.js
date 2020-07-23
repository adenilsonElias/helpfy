import React from 'react'
import { SafeAreaView, View, Text, Image, ScrollView } from 'react-native'
import style from './style'
import Buttons from './Buttons/Buttons'

const ThePost = (props) => {    
    return (
        <SafeAreaView style={style.container}>
            <ScrollView>
                <Image source={require('../../assets/imgs/boat.jpg')}
                    style={style.image} />
                <View style={style.descriptionContainer}>
                    <Text style={style.descriptionText}>Testando Descricao</Text>
                </View>
                <Buttons />
                <View style={style.commentContainer}>
                    <Text style={style.descriptionText}>Testando Comentario</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export const title = 'Titulo'

export default ThePost
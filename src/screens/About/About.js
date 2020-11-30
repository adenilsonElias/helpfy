import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import Header from '../../global/components/Header/Header'
import style from './style'
import Collaborator from './components/Collaborator/Collaborator'

export default About = () => {
    return (
        <>
            <Header title={'Sobre'} icon={'info'} />
            <ScrollView style={style.container}
                showsVerticalScrollIndicator={false}>
                <Collaborator author={'Freepik'} type={'Ícone'} site={'www.flaticon.com'}/>
                <Collaborator author={'Iconixar'} type={'Ícone'} site={'www.flaticon.com'}/>
                <Collaborator author={'dDara'} type={'Ícone'} site={'www.flaticon.com'}/>
                <Collaborator author={'photo3idea_studio'} type={'Ícone'} site={'www.flaticon.com'}/>
                <Collaborator author={'Payungkead'} type={'Ícone'} site={'www.flaticon.com'}/>
                <Collaborator author={'prettycons'} type={'Ícone'} site={'www.flaticon.com'}/>
                <Collaborator author={'NorthSea'} type={'Animação'} site={'www.lottiefiles.com/'}/>
                <Collaborator author={'Thalia Tran'} type={'Animação'} site={'www.lottiefiles.com/'}/>
                <Collaborator author={'Daniela Stein'} type={'Animação'} site={'www.lottiefiles.com/'}/>
            </ScrollView>
        </>
    )
}
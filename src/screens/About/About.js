import React from 'react'
import { Text, View } from 'react-native'
import Header from '../../global/components/Header/Header'
import style from './style'
import Collaborator from './components/Collaborator/Collaborator'

export default About = () => {
    return (
        <>
            <Header title={'Sobre'} icon={'info'} />
            <View style={style.container}>
                <Collaborator author={'Freepik'} />
                <Collaborator author={'Iconixar'} />
                <Collaborator author={'dDara'} />
                <Collaborator author={'photo3idea_studio'} />
                <Collaborator author={'Payungkead'} />
            </View>
        </>
    )
}
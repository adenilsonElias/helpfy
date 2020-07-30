import React, { useState} from 'react'
import { SearchBar, ListItem } from 'react-native-elements'
import { ScrollView, View, FlatList } from 'react-native'
import style, { placeholderTextColor } from './style'

const TheSearchBar = (props) => {    
    const renderResultFunction = (text) => {
        if (props.parameter.renderResult === false) {
            props.parameter.setRenderResult(true)
        }
        if (text === '') {
            props.parameter.setRenderResult(false)
        }
    }

    const searchFilterFunction = text => {
        props.parameter.setValue(text)        
        const newData = props.parameter.arrayHolder.filter(item => {
            const itemData = `${item.title.toUpperCase()}`
            const textData = text.toUpperCase()        
            return itemData.indexOf(textData) > -1
        })
        props.parameter.setData(newData)        
    }

    const renderHeader = () => {        
        return (
            <SearchBar
                placeholder="Procurar..."
                placeholderTextColor={placeholderTextColor}
                platform={'android'}
                lightTheme
                round
                onChangeText={text => {                    
                    searchFilterFunction(text)
                    renderResultFunction(text)
                }}
                autoCorrect={false}
                value={props.parameter.value}                
                searchIcon={null}
                cancelIcon={null}
                // height fora do style porque o seu valor é adquirido em tempo de execulção
                containerStyle={{...style.containerSearchBar , height: props.headerSize}}                
                inputContainerStyle={style.inputContainer}
                inputStyle={style.input}
            />
        )
    }

    return (
        <View style={style.container}>
            { renderHeader() }
        </View>
        

    )
}

export default TheSearchBar
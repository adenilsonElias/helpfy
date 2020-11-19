import React, { useState} from 'react'
import { SearchBar, ListItem } from 'react-native-elements'
import { ScrollView, View, FlatList } from 'react-native'
import style, { placeholderTextColor } from './style'
import { color1 } from '../../../../global/constant/constant'

const TheSearchBar = ({parameter , headerSize}) => {    
    const renderResultFunction = (text) => {
        if (parameter.renderResult === false) {
            parameter.setRenderResult(true)
        }
        if (text === '') {
            parameter.setRenderResult(false)
        }
    }

    const searchFilterFunction = text => {
        parameter.setValue(text)        
        const newData = parameter.arrayHolder.filter(item => {
            const itemData = `${item.title.toUpperCase()}`
            const textData = text.toUpperCase()        
            return itemData.indexOf(textData) > -1
        })
         parameter.setData(newData)        
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
                value={parameter.value}                
                searchIcon={null}
                cancelIcon={null}
                // height fora do style porque o seu valor é adquirido em tempo de execulção
                containerStyle={{...style.containerSearchBar , height: headerSize}}                
                inputContainerStyle={style.inputContainer}
                inputStyle={style.input}
                clearIcon={{ color: color1 }}
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
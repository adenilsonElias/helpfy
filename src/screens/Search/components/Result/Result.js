import React from 'react'
import { FlatList, View } from 'react-native'
import { ListItem } from 'react-native-elements'
import style from './style'
import { useNavigation } from '@react-navigation/native'
import Post from '../../../../model/post_model'


const Result = ({ parameter, postsList}) => {
    const navigation = useNavigation()

    const renderSeparator = () => {
        return (
            <View style={style.containerSeparator} />
        )
    }

    return (
        <FlatList
            data={ postsList}
            renderItem={({ item, index }) => (
                <ListItem
                    leftAvatar={{ source: { uri: item.image } }}
                    title={`${item.title}`}
                    subtitle={item.author}
                    containerStyle={style.containerColor}
                    titleStyle={style.colorText}
                    subtitleStyle={style.colorText}
                    onPress={() => {
                        navigation.navigate('ThePost', {
                            post: postsList[index]
                        })
                    }}
                />
            )}
            keyExtractor={item => item.id}
        // ItemSeparatorComponent={renderSeparator}
        />
    )
}

export default Result
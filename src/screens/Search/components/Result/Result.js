import React from 'react'
import { FlatList, View } from 'react-native'
import { ListItem } from 'react-native-elements'
import style from './style'
import { useNavigation } from '@react-navigation/native'

const Result = (props) => {
    const navigation = useNavigation()

    const renderSeparator = () => {
        return (
            <View style={style.containerSeparator} />
        )
    }

    return(
        <FlatList
            data={props.parameter.data}
            renderItem={({ item }) => (
                <ListItem
                    leftAvatar={{ source: { uri: item.image } }}
                    title={`${item.title}`}
                    subtitle={item.author}
                    containerStyle={style.containerColor}
                    titleStyle={style.colorText}
                    subtitleStyle={style.colorText}
                    onPress={() => {
                        navigation.navigate('ThePost', {
                            title: item.title,
                            author: item.author,
                            image: item.image,
                            comments: item.comments,
                            description: item.description,
                            postId: item.id,
                            emailPost: item.emailPost,
                            timePost: item.timePost,
                            userId: item.userId
                        })
                    }}
                />
            )}
            keyExtractor={item => item.emailPost}
            // ItemSeparatorComponent={renderSeparator}
        />
    )
}

export default Result
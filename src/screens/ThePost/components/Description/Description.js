import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import OtherAvatar from '../../../../global/components/Other_Avatar/OtherAvatar'
import { color1 } from '../../../../global/constant/constant'
import style from './style'

export default Description = ({ post, author }) => {
    const navigation = useNavigation()

    function handleNavigation() {
        navigation.navigate("User-Profile", { user: author })
    }

    return (
        <View style={style.container}>
            <View style={style.titleContainer}>
                <Text style={style.titleText}>{post.title}</Text>
            </View>
            <View style={style.rowContainer}>
                <Text style={style.typeText}>Descrição: </Text>
                <Text style={style.descriptionInfo}>{post.description}</Text>
            </View>
            <View style={style.rowContainer}>
                <Text style={style.typeText}>Categoria: </Text>
                <Text style={style.descriptionInfo}>{post.category}</Text>
            </View>
            <View style={[style.rowContainer, { alignItems: 'center' }]}>
                <TouchableOpacity onPress={handleNavigation}>
                    <OtherAvatar size={'small'} image={author ? author.profileImage : null}/>
                </TouchableOpacity>
                <Text style={[style.descriptionInfo, { paddingHorizontal: 5, color: color1 }]}>
                    {author ? author.name : null}
                </Text>
            </View>
        </View>
    )
}
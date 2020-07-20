import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    Text,
    Button
} from 'react-native'

export default LikeList = () => {
    const navigation = useNavigation()

    return (
        <View style={{ flex: 1 }}>
            <Text>LikeList</Text>
            <Button title="LikeList" onPress={() => navigation.openDrawer()}></Button>
        </View>
    )
}
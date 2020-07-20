import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    Text,
    Button
} from 'react-native'

export default WishList = () => {
    const navigation = useNavigation()

    return (
        <View style={{ flex: 1 }}>
            <Text>WishList</Text>
            <Button title="WishList" onPress={() => navigation.openDrawer()}></Button>
        </View>
    )
}
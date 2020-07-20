import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    Text,
    Button
} from 'react-native'

export default LeaderBoard = () => {
    const navigation = useNavigation()

    return (
        <View style={{ flex: 1 }}>
            <Text>LeaderBoard</Text>
            <Button title="LeaderBoard" onPress={() => navigation.openDrawer()}></Button>
        </View>
    )
}
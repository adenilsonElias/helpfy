import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ImageBackground, TouchableOpacity, View, } from 'react-native'
import style from './style'
import Icon from 'react-native-vector-icons/Feather'
import { color1 } from '../../../../global/constant/constant'
import moment from 'moment';
import { setLoading } from '../../../../store/actions/loading'
import { useDispatch } from 'react-redux'

export default PreviewImage = ({ preview, onSend, image, video, user, setPreview, setImage }) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    const messageIdGenerator = () => {
        // generates uuid.
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
            let r = (Math.random() * 16) | 0,
                v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }

    const generateMessage = () => {        
        let createAt = new Date()
        return([
            {
                "_id": messageIdGenerator(),
                "createdAt": createAt,
                "text": '',
                "user": {
                    "_id": user.id,
                    "name": user.name
                },
                "image": image
            }
        ])
    }

    return (
        <View style={style.container}>
            <ImageBackground source={{ uri: preview }} style={style.image} />
            <TouchableOpacity style={style.backButton} 
                onPress={() => {
                    setPreview(null)
                    setImage(null)
                }}>
                <Icon name={'arrow-left'} size={35} color={color1} />
            </TouchableOpacity>
            <TouchableOpacity style={style.sendButton} 
                onPress={() => {
                    dispatch(setLoading(true))
                    onSend(generateMessage(), video, image)
                }}>
                <Icon name={'send'} size={35} color={color1} />
            </TouchableOpacity>
        </View>
    )
}
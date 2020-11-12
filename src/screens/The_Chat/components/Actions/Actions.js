import React from 'react'
import { TouchableOpacity } from 'react-native'
import { color1 } from '../../../../global/constant/constant'
import Icon from 'react-native-vector-icons/Feather'
import style from './style'
import ImagePicker from 'react-native-image-picker'

export default Actions = ({ setImage, setPreview }) => {
    return (
        <TouchableOpacity style={style.container}
            onPress={() => {
                ImagePicker.showImagePicker({
                    mediaType: 'photo'
                }, (response) => {
                    if (response.didCancel) {
                        return
                    }
                    if (response.error) {
                        return
                    }
                    setImage(response.path)
                    setPreview(response.uri)
                })
            }}>
            <Icon name={'plus'} size={26} color={color1} />
        </TouchableOpacity>
    )
}
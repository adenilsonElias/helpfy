import React from 'react'
import { FlatList, View, Image, Text, TouchableOpacity } from 'react-native'
import style from './style'
import Icon from 'react-native-vector-icons/Feather';
import { color1 } from '../../../../global/constant/constant';

export default SliderImages = ({ images, pickerImage, setImages, setVisible }) => {    

    const addImage = () => {
        const addImages = images.length < 5 ? 
            <TouchableOpacity onPress={() => pickerImage()}>
                <View style={[style.image, style.addImage]}>
                    <Icon name={'plus'} size={30} color={color1} />
                </View>
            </TouchableOpacity> : null


        return (
            <View>
                { addImages }
            </View>
        )
    }

    //remove a imagem da posicao X sobrescrevendo com um novo array
    function handleRemoveImage(indice){
        setImages(images.filter((image, index) => indice != index))
    }

    return (
        <FlatList horizontal
            data={images}
            style={style.container}
            keyExtractor={item => item}
            showsHorizontalScrollIndicator={false}
            ListFooterComponent={addImage}
            ListFooterComponentStyle={style.container}
            renderItem={({ item, index }) =>
            <TouchableOpacity style={style.containerImage} onPress={() => setVisible(true)}
                onLongPress={() => handleRemoveImage(index)}>
                    <Image style={style.image} source={{ uri: item }} />
            </TouchableOpacity>
            }
        />
    )
}

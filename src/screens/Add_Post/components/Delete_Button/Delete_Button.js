import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { color2 } from '../../../../global/constant/constant'
import style from './style'
import { deletePost } from '../../../../firebase/Post';
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-simple-toast'

export default DeleteButton = ({ post, setLoading, userId }) => {
    const navigation = useNavigation()

    const handleDelete = () => {
        setLoading(true)
        deletePost(post, userId).then(() => {
            console.info('Post deletado com sucesso')
            setLoading(false)
            navigation.navigate('Feed')
        }).catch ((error) => {
            setLoading(false)
            switch(error) {
                case 'Post em processo de doacao':
                    Toast.show("Postagem em processo de doação", Toast.LONG)
                    break
                case 'Post ja finalizado':
                    Toast.show("Postagem já foi finalizada", Toast.LONG)
                    break
                default: 
                    Toast.show("Erro ao deletar Postagem", Toast.LONG)
            }
        })
    }

    return(
        <TouchableOpacity style={style.container} onPress={handleDelete}>
            <Text style={style.textButton} numberOfLines={1}>Deletar</Text>
            <Icon name={'trash-2'} size={25} color={color2} />
        </TouchableOpacity>
    )
}
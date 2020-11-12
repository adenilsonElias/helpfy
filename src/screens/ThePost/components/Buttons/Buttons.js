import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../../../context/auth_context'
import { TouchableOpacity, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Feather';
import style from './style';
import { useDispatch, useSelector } from 'react-redux';
import { isLiked, addLike, removeLike, getPost, cancelDonation, upDonationStage } from '../../../../firebase/Post';
import { color4, color1, color2 } from '../../../../global/constant/constant';
import { addIWant, removeIWant, isWanted } from '../../../../firebase/eu_quero';
import { useNavigation } from '@react-navigation/native';
import Post from '../../../../model/post_model';
import { getUserByRef } from '../../../../firebase/Authentication';
import User from '../../../../model/user';
import { setBottomBar } from '../../../../store/actions/loading'

type Props = {
    post: Post,
    setPost: any
}

const Buttons = ({ post, setPost }: Props) => {
    const auth = useContext(AuthContext)
    const [notLiked, setNotLiked] = useState(true)
    const [notWant, setNotWant] = useState(true);
    const [loadingLike, setLoadingLike] = useState(true)
    const [loadingWant, setLoadingWant] = useState(true)
    const colorLike = notLiked ? color4 : color1
    const user: User = useSelector(state => state.userState.user)
    const navigation = useNavigation()
    const [donatario, setDonatario] = useState(new User({}))
    const dispatch = useDispatch()

    useEffect(() => {
        setLoadingLike(false)
        setLoadingWant(false)
    }, [])

    useEffect(() => {
        if (auth.isLogged) {
            isLiked(post, user.id).then((value) => {
                setNotLiked(value)
            })
            isWanted(post, user.id).then((value) => {
                setNotWant(value)
            })
        }
        if (post.donationStatus >= 2) {
            getUserByRef(post.donatarioRef).then((value) => {
                setDonatario(value)
            })
        }
    }, [post])

    function handleWants() {
        setLoadingWant(true)
        if (notWant) {
            addIWant(post, user.id).then(() => {
                getPost(post.IdPost).then((value) => {
                    setPost(value)
                    console.info('Post adicionado ao eu quero com sucesso')
                    setLoadingWant(false)
                })
            })
        } else {
            removeIWant(post, user.id).then(() => {
                getPost(post.IdPost).then((value) => {
                    setPost(value)
                    console.info('Post removido dos eu quero com sucesso')
                    setLoadingWant(false)
                })
            })
        }
    }

    function handleLikes() {
        setLoadingLike(true)
        if (notLiked) {
            addLike(post, user.id).then(() => {
                getPost(post.IdPost).then((value) => {
                    setPost(value)
                    console.info('Post atualizado com sucesso')
                    setLoadingLike(false)
                })
            })
        } else {
            removeLike(post, user.id).then(() => {
                getPost(post.IdPost).then((value) => {
                    setPost(value)
                    console.info('Post atualizado com sucesso')
                    setLoadingLike(false)
                })
            })
        }
    }

    function handleCancelDonation(){
        cancelDonation(post,user).then(()=>{
            console.info('Doação cancelada com sucesso')
        })
    }

    function handleAccept(){
        dispatch(setBottomBar(true))
        upDonationStage(post).then(()=>{
            console.info("donatario recebeu a doação")
            setTimeout(() => {
                dispatch(setBottomBar(false))
            }, 3000)
        })
    }

    function handlePostStatus() {
        switch (post.donationStatus) {
            case 1:
                //usuario nao esta logado
                if (!user) {
                    return
                }
                //usuario logado eh dono do post
                if (user && post.userId == user.id) {
                    return (
                        <View style={style.container}>
                            <TouchableOpacity style={style.buttonList}
                                onPress={() => navigation.navigate('ListChoosedPeople', {
                                    post: post
                                })}>
                                <Text style={style.buttonText}>Lista de Pessoas</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }
                //usuario logadao e nao eh dono do post
                return (
                    <View style={[style.container, style.container2]}>
                        <TouchableOpacity onPress={handleLikes}
                            disabled={loadingLike} >
                            <Icon name={'heart'} size={40} color={colorLike} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[style.wantButton, { backgroundColor: notWant ? color2 : color1 }]}
                            onPress={handleWants} disabled={loadingWant}>
                            <Text style={[style.buttonText, { color: notWant ? color1 : color2 }]}>Eu quero</Text>
                        </TouchableOpacity>
                    </View>
                )
            case 2:
                // Donatario e Doador visualizam o botao de cancelar
                // @TODO refatorar o if do doador e donatario para cobrir apenas o botão de confirma entrega
                // usuario é o doador
                if (user && user.id == post.authorRef.id) {
                    return (
                        <View style={[style.container, { justifyContent: "space-around" }]}>
                            <View style={style.infoContainer}>
                                <Text style={style.choosedPeopleText}>{donatario.name}</Text>
                                <Text style={style.choosedPeopleConfirmText}>Escolhido</Text>
                            </View>
                            <View style={style.buttonContainerAcecptOrRefuse}>
                                <TouchableOpacity onPress={handleCancelDonation} >
                                    <Icon2 name={'x'} size={40} color={color1} />
                                </TouchableOpacity>
                                <Text style={style.choosedPeopleConfirmText}>Cancelar</Text>
                            </View>
                        </View>
                    )
                // usuario é o donatario
                } else if (user && user.id == post.donatarioId) {
                    return (
                        <View style={[style.container, { justifyContent: "space-around" }]}>
                            <View style={style.infoContainer}>
                                <Text style={style.choosedPeopleText}>{donatario.name}</Text>
                                <Text style={style.choosedPeopleConfirmText}>Escolhido</Text>
                            </View>
                            <View style={style.buttonContainerAcecptOrRefuse}>
                                <TouchableOpacity onPress={handleCancelDonation}>
                                    <Icon2 name={'x'} size={40} color={color1} />
                                </TouchableOpacity>
                                <Text style={style.choosedPeopleConfirmText}>Cancelar</Text>
                            </View>
                            <View style={style.buttonContainerAcecptOrRefuse}>
                                <TouchableOpacity onPress={handleAccept}>
                                    <Icon2 name={'check'} size={40} color={color1} />
                                </TouchableOpacity>
                                <Text style={style.choosedPeopleConfirmText}>Confirmar</Text>
                            </View>
                        </View>
                    )
                // usuario não é nenhum do dois ou não esta logado
                } else {
                    return (
                        <View style={[style.container, { justifyContent: "space-around" }]}>
                            <View style={style.infoContainer}>
                                <Text style={style.choosedPeopleText}>{donatario.name}</Text>
                                <Text style={style.choosedPeopleConfirmText}>Escolhido</Text>
                            </View>
                        </View>
                    )
                }
            case 3:
                return (
                    <View style={[style.container, { flexDirection: 'column' }]}>
                        <Text style={style.choosedPeopleConfirmText}>{donatario.name}</Text>
                        <Text style={style.choosedPeopleConfirmText}>Escolhido</Text>
                    </View>
                )
            default:
                //@TODO Lembrar de remover antes de finalizar a aplicacao
                return <Text style={{ color: 'red' }}>Se caiu nessa condicao deu ruim</Text>
        }
    }

    return (
        <View>
            {handlePostStatus()}
        </View>
    )
}

export default Buttons
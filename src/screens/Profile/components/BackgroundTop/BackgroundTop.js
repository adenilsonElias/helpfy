import React, { useEffect } from 'react';
import { ImageBackground, TouchableOpacity, View, BackHandler } from 'react-native';
import style from './style'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';
import { color1 } from '../../../../global/constant/constant';
import ToolbarMid from '../ToolbarMid/ToolbarMid'
import OtherAvatar from '../../../../global/components/Other_Avatar/OtherAvatar';
import { useDispatch, useSelector } from 'react-redux';
import { setBottomBar } from '../../../../store/actions/loading'

export default BackgroundTop = ({ isMyProfile, user }) => {
    const navigation = useNavigation()
    const visibleBar = useSelector(state => state.loadingState.bottomBar)
    const dispatch = useDispatch()

    useEffect(() => {
        const backScreen = () => {
            navigation.goBack()
            dispatch(setBottomBar(false))
            return true
        }
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backScreen)
    }, [])
    
    return (
        <ImageBackground source={!user ? require('../../../../assets/imgs/coverDefault.png') : 
            user.converImage ? { uri: user.converImage} : require('../../../../assets/imgs/coverDefault.png')}
            style={style.imageBackground} imageStyle={style.backgroundStyle}>
                <View style={style.profileContainer}>
                    {
                        !isMyProfile ?
                        <TouchableOpacity style={style.buttonContainer}
                            onPress={() => {
                                navigation.goBack()
                                dispatch(setBottomBar(false))
                            }}>
                            <Icon name='arrow-left' size={30} color={color1} />
                        </TouchableOpacity> : null
                    }
                    <OtherAvatar size={'xlarge'} image={user ? user.profileImage : null}/>
                </View>            
            <ToolbarMid />
        </ImageBackground>
    )
}
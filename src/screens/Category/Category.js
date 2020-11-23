import React, { useEffect, useState } from 'react'
import { View, FlatList} from 'react-native'
import style from './style'
import { useNavigation, useRoute } from '@react-navigation/native'
import { color1 } from '../../global/constant/constant'
import { HeaderBackButton } from '@react-navigation/stack'
import { getPostList } from '../../firebase/Post'
import Filter from './Filter/Filter'
import CategoryCard from './Category_Card/category_card'
import Loading from '../Loading/Loading'

export default Category = (props) => {
    const navigation = useNavigation()
    const category = useRoute().params.title
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        navigation.setOptions({
            headerShown: !loading,
            title: category,
            // Quando clicar em voltar, coloca novamente o bottomBar
            headerLeft: (props) => (
                < HeaderBackButton
                    tintColor={color1}
                    onPress={() => {
                        navigation.setOptions({
                            tabBarVisible: true
                        }),
                            navigation.goBack()
                    }
                    }
                />),
            headerRight: () => (
                <Filter setPost={setPosts} category={category} setLoading={setLoading}/>
            )
        })
    }, [loading])

    useEffect(() => {
        setLoading(true)
        async function collectPost() {
            const post = await getPostList({ category: category }, { limit: 10 })
            setPosts(post)
            setLoading(false)
        }
        collectPost()
    }, [])

    if(loading){
        return(
            <Loading />
        )
    }

    return (
        <View style={style.container}>
            <FlatList
                data={posts}
                keyExtractor={item => `${item.IdPost}`}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <CategoryCard post={item} />
                    )
                }}
            />
        </View>
    )
}
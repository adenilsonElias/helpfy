import React from 'react'
import { FlatList, Dimensions } from 'react-native'
import style from './style'
import Post from '../../../../global/components/Post/Post'

// List<Post> post
<<<<<<< HEAD
const PostList = (props) => {    
=======
const PostList = (props) => {
>>>>>>> 03f57fbf09dbc900996e6d4999bd3603b1310452
    return (
        <FlatList horizontal
            data={props.postList}
            keyExtractor={post => `${post.IdPost}`}
            style={style.container}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) =>
                <Post key={item.id} 
                    post={item}
                    tamanho={{
                        width: Dimensions.get('window').width / (5 / 2),
                        height: Dimensions.get('window').width / (5 / 2),
                        resizeMode: "cover",
                        margin: 10,
                        borderRadius: 15
                    }}
                />
            }
        />
    )
}

export default PostList
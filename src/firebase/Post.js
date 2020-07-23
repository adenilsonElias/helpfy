import Firestore from '@react-native-firebase/firestore'
import Post from '../model/post_model';

const firestore = Firestore()


export async function createPost(Post) {
    try{
        let post = await firestore.collection('Post').add(Post.toJson())
    }
    catch (e){
        console.error(e)
        throw "Erro ao criar post"
    }
}

export async function getPost(id) {
    try{
        let post = await firestore.collection('Post').doc(id).get();
        return new Post(post.data())
    }
    catch (e) {
        console.error(e)
        throw "Erro ao coletar post"
    }

}

export async  function getPostList(filter = null,pagination = null) {
    // @TODO fazer filtros
    // @TODO fazer paginacao
    try{
        let post = await firestore.collection('Post').get()
        return post.docs.map(post => new Post(post._data))
    }
    catch (e){
        console.error(e)
        throw "Erro ao coletar posts"
    }
}

export function editPost() {
    // @TODO
}

export function deletePost() {
    // @TODO

}
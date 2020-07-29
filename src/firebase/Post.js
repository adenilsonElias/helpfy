import Firestore from '@react-native-firebase/firestore'
import Post from '../model/post_model';

const firestore = Firestore()


export async function createPost(Post: Post) {
    try {
        let post = await firestore.collection('Post').add(Post.toJson())
    }
    catch (e) {
        console.error(e)
        throw "Erro ao criar post"
    }
}

export async function getPost(id: String) {
    try {
        let post = await firestore.collection('Post').doc(id).get();
        return new Post({...post.data(),IdPost : post.id})
    }
    catch (e) {
        console.error(e)
        throw "Erro ao coletar post"
    }

}

interface filter {
    category: 'Brinquedos' | 'Calçados' | 'Eletrodomésticos' | 'Higiene Pessoal' | 
        'Livros' | 'Material de Construção' | 'Material de Limpeza' | 
        'Material Escolar' | 'Móveis' | 'Roupas',
    author: String,
    title: String,
    mostComments: Boolean,
}

interface pag {
    limit: Number,
    next(): Function,
}

export async function getPostList(filter: filter = null, pagination: pag = null) {
    try {
        let post = Firestore().collection('Post')
        let filtedPost = null
        let paginationPost = null
        if (filter) {
            for (let key in filter) {
                filtedPost = post.where(key, '==', filter[key])
            }
            console.log((await filtedPost.get()).docs)
        }
        post = filtedPost ? filtedPost : post
        if (pagination) {
            paginationPost = post.limit(pagination.limit)
        }
        post = paginationPost ? paginationPost : post
        const finalPost = await post.get()
        return finalPost.docs.map(post => new Post({ ...post._data, IdPost: post.id }))
    }
    catch (e) {
        console.error(e)
        throw "Erro ao coletar posts"
    }
}

export async function editPost(post: Post) {
    try {
        await firestore.collection('Post').doc(post.IdPost).update(post.toJson())
    }
    catch (e) {
        console.error(e)
        throw "Erro edit_post"
    }

}

export async function deletePost(id: String) {
    try {
        await firestore.collection('Post').doc(id).delete()
    }
    catch (e) {
        console.error(e)
        throw "Erro ao deletar post"
    }
}
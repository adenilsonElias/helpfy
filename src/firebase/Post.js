import Firestore from '@react-native-firebase/firestore'
import Post from '../model/post_model';
import Comentario from '../model/comments';
import SendNotification from '../model/notification'
import { IncrementComment, incrementLike } from './incremeters';

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
        return new Post({ ...post.data(), IdPost: post.id })
    }
    catch (e) {
        console.error(e)
        throw "Erro ao coletar post"
    }

}

interface filter {
    category: 'Brinquedos' | 'Calçados' | 'Eletrodomésticos' | 'Higiene Pessoal' |
    'Livros' | 'Material de Construção' | 'Material de Limpeza' |
    'Livros' | 'Material de Construção' | 'Material de Limpeza' |
    'Livros' | 'Material de Construção' | 'Material de Limpeza' |
    'Material Escolar' | 'Móveis' | 'Roupas',
    author: String,
    title: String,
}

interface pag {
    limit: Number,
    next(): Function,
}

interface sort {
    field: String,
    direction: 'asc' | 'desc'
}

export async function getPostList(filter: filter = null, pagination: pag = null, sort: sort = null) {
    try {
        let post = Firestore().collection('Post')
        let filtedPost = null
        let paginationPost = null
        let sortedPost = null;
        if (filter) {
            for (let key in filter) {
                filtedPost = post.where(key, '==', filter[key])
            }
        }
        post = filtedPost ? filtedPost : post
        if (pagination) {
            paginationPost = post.limit(pagination.limit)
        }
        post = paginationPost ? paginationPost : post
        if (sort) {
            sortedPost = post.orderBy(sort.field, sort.direction);
        }
        post = sortedPost ? sortedPost : post
        const finalPost = await post.get()
        return finalPost.docs.map(post => new Post({ ...post._data, IdPost: post.id }))
    }
    catch (e) {
        console.error(e)
        throw "Erro ao coletar posts"
    }
}

export async function getPostListLike(userId: String) {
    try {
        const postsRef = await Firestore().collection('User').doc(userId).collection('liked').get()
        let finalPost = [] 
        for(let item of postsRef.docs){
            const getedPost = await item.data().post.get()
            finalPost.push(getedPost)
        }
        return finalPost.map(post => new Post({ ...post._data, IdPost: post.id }))
    }
    catch (e) {
        console.error(e)
        throw "Erro ao coletar posts com likes do usuario"
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



export async function addLike(post: Post, userId: String) {
    try {

        const userRef = Firestore().collection('User').doc(userId).collection('liked').doc(post.IdPost)
        const postRef = Firestore().collection('Post').doc(post.IdPost).collection('likes').doc(userId)
        const counterRef = Firestore().collection('Post').doc(post.IdPost)

        await firestore.runTransaction(async (transaction) => {
            transaction.set(userRef, {
                post: Firestore().collection('Post').doc(post.IdPost)
            })
            transaction.set(postRef, {
                user: Firestore().collection('User').doc(userId)
            })
            transaction.update(counterRef, {
                likeNumber: Firestore.FieldValue.increment(1)
            })
        })
    }
    catch (e) {
        console.error(e)
        throw "Erro ao adicionar Like"
    }
}

export async function removeLike(post: Post, userId: String) {
    const userRef = Firestore().collection('User').doc(userId).collection('liked').doc(post.IdPost)
    const postRef = Firestore().collection('Post').doc(post.IdPost).collection('likes').doc(userId)
    const counterRef = Firestore().collection('Post').doc(post.IdPost)

    await firestore.runTransaction(async (transaction) => {
        transaction.delete(userRef)
        transaction.delete(postRef)
        transaction.update(counterRef, {
            likeNumber: Firestore.FieldValue.increment(-1)
        })
    })
}

/**
 * Função para verificar se o usuario deu like no post
 * Se estiver vazio usuario ainda não deu like
 */
export async function isLiked(post: Post, userId: String) {
    const liked = await Firestore().collection('Post').doc(post.IdPost).collection('likes').where('user', '==', Firestore().collection('User').doc(userId)).get()
    return liked.empty
}
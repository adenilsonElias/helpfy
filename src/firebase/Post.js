import Firestore from '@react-native-firebase/firestore'
import Post from '../model/post_model';
import Comentario from '../model/comments';

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
    mostComments: Boolean,
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

export async function adicionarComentarios(postId: String, comentario: Comentario) {
    try {
        const newComment = await Firestore().collection('Post').doc(postId).collection('comments').add(comentario.toJson())
    }
    catch (e) {
        console.error(e)
        throw "Erro ao criar comentario"
    }
}

export async function responderComentarios (postId: String, novoComentario: Comentario){
    try{
        if (novoComentario.depth <= 2){
            const alteredPost = await Firestore().collection('Post').doc(postId).collection('comments').doc(novoComentario.id).update(novoComentario)
            return
        }
        throw "Profundidade de resposta não pode ser maior que dois"

    }
    catch(e){
        console.error(e);
        throw "Erro ao adicionar resposta a comentario"
    }
}

export async function getComentarios (postid : String){
    try{
        const Comments = await Firestore().collection('Post').doc(postid).collection('comments').get()
        return Comments.docs.map(comentario => new Comentario({...comentario.data(),id: comentario.id}))
    }
    catch (e){
        console.error(e)
        throw "Erro ao coletar comentarios do post"
    }
}
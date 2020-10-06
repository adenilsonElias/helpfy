import Firestore from '@react-native-firebase/firestore'
import Storage from '@react-native-firebase/storage'
import Post from '../model/post_model';
import { addPoint } from './Gamification'

export async function createPost(post: Post ,userId: String) {
    try {
        let images = post.image; // cria copia das imagens
        delete post.image; // deleta imagens do objeto post
        const postReference = Firestore().collection('Post').doc() // coleta referencia do firebase
        let imagesUrl = []; // array que vai armazenar os url de download das imagens no firebase

        // for para salvar todas as imagens no store
        for (let i = 0; i < images.length; i += 1) {
            const bucketReference = Storage().ref(`Post/${postReference.id}/${i}`);
            await bucketReference.putFile(images[i]).then(async () => {
                imagesUrl.push(await bucketReference.getDownloadURL())
            })
        }

        await postReference.set({
            ...post.toJson(), image: imagesUrl
        }) // salva o post com o url de download das imagens do store

        addPoint(userId)
    }
    catch (e) {
        console.error(e)
        throw "Erro ao criar post"
    }
}

export async function getPost(id: String) {
    try {
        let post = await Firestore().collection('Post').doc(id).get();
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
    userId: String,
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
        if (postsRef.empty) {
            return []
        }
        const idList = postsRef.docs.map((value) => {
            return value.id
        })
        const finalPost = await Firestore().collection('Post').where(Firestore.FieldPath.documentId(), 'in', idList).get();
        return finalPost.docs.map(post => new Post({ ...post._data, IdPost: post.id }))
    }
    catch (e) {
        console.error(e)
        throw "Erro ao coletar posts com likes do usuario"
    }
}

export async function editPost(post: Post) {
    try {
        await Firestore().collection('Post').doc(post.IdPost).update(post.toJson())
    }
    catch (e) {
        console.error(e)
        throw "Erro edit_post"
    }

}

export async function deletePost(id: String) {
    try {
        await Firestore().collection('Post').doc(id).delete()
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

        await Firestore().runTransaction(async (transaction) => {
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

    await Firestore().runTransaction(async (transaction) => {
        transaction.delete(userRef)
        transaction.delete(postRef)
        transaction.update(counterRef, {
            likeNumber: Firestore.FieldValue.increment(-1)
        })
    })
}

export async function upDonationStage(post: Post, donatarioId: String = null, jumpStatus: Number = 0) {
    if (jumpStatus != 0) {
        post.donationStatus = jumpStatus
        post.donatarioId = donatarioId
    }
    try {
        switch (post.donationStatus) {
            case 1:
                // Donatario foi escolhido pelo doador
                post.donatarioId = donatarioId;
                post.donatario = Firestore().collection("User").doc(donatarioId)
                await Firestore().collection('Post').doc(post.IdPost).update(
                    { ...post.toJson(), donationStatus: Firestore.FieldValue.increment(1) }
                )
                console.info("Post foi para o estado: Aguardando confimação do donatario (2)")
                return;
            case 2:
                // Donatario aceitou a doação e está esperando receber
                await Firestore().collection('Post').doc(post.IdPost).update(
                    { ...post.toJson(), donationStatus: Firestore.FieldValue.increment(1) }
                )
                console.info("Post foi para o estado: Aguardando receber (3)")
                return;
            case 3:
                // Donatario confirmou que recebeu a doação recebeu a doação
                await Firestore().collection('Post').doc(post.IdPost).update(
                    { ...post.toJson(), donationStatus: Firestore.FieldValue.increment(1) }
                )
                console.info("Post foi para o estado: Doado (4)")
                return;
            default:
                throw `Post com status invalido (Revise o firebase ) \n postId: ${post.IdPost}`
        }
    }
    catch (e){
        console.error(e)
        throw "Falha ao alterar estado do post " + post.IdPost
    }
    
}

export function createPostListener(post : Post ,onChange : Function){
    return Firestore().collection('Post').doc(post.IdPost).onSnapshot(onChange)
}

/**
 * Função para verificar se o usuario deu like no post
 * Se estiver vazio usuario ainda não deu like
 */
export async function isLiked(post: Post, userId: String) {
    const liked = await Firestore().collection('Post').doc(post.IdPost).collection('likes').where('user', '==', Firestore().collection('User').doc(userId)).get()
    return liked.empty
}
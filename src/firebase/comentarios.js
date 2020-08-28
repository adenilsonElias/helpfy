import Firestore from '@react-native-firebase/firestore'
import Comentario from "../model/comments"
import Post from "../model/post_model"
import SendNotification from '../model/notification'

export async function adicionarComentarios(comentario: Comentario, post: Post) {
    try {
        const commentRef = Firestore().collection('Post').doc(post.IdPost).collection('comments').doc()
        const NotificationRef = Firestore().collection('User').doc(post.userId).collection('Notification').doc()
        const commentCounterRef = Firestore().collection('Post').doc(post.IdPost)

        const notificationClass = new SendNotification({
            senderName: comentario.author,
            type: 'comment',
            postId: post.IdPost,
            senderId: comentario.creatorId
        }, post)

        await Firestore().runTransaction(async(transaction) =>{
            transaction.set(commentRef,{
                ...comentario.toJson()
            })
            transaction.update(commentCounterRef,{
                commentNumber : Firestore.FieldValue.increment(1)
            })
            transaction.set(NotificationRef,{
                ...notificationClass.toJson()
            })
        })
    }
    catch (e) {
        console.error(e)
        throw "Erro ao criar comentario"
    }
}

export async function responderComentarios(post: Post, novoComentario: Comentario) {
    try {
        if (novoComentario.depth <= 2) {
            const commentRef = Firestore().collection('Post').doc(post.IdPost).collection('comments').doc(novoComentario.id)
            const commentCouter = Firestore().collection('Post').doc(post.IdPost)
            
            await Firestore().runTransaction(async(transaction) =>{
                transaction.update(commentRef,novoComentario)
                transaction.update(commentCouter,{
                    commentNumber : Firestore.FieldValue.increment(1)
                })
            })
            return
        }
        throw "Profundidade de resposta não pode ser maior que dois"

    }
    catch (e) {
        console.error(e);
        throw "Erro ao adicionar resposta a comentario"
    }
}

export async function getComentarios(postId: String, orderBy: 'asc' | 'desc') {
    try {
        const Comments = await Firestore().collection('Post').doc(postId).collection('comments').orderBy('timeCreated', orderBy).get()
        return Comments.docs.map(comentario => new Comentario({ ...comentario.data(), id: comentario.id }))
    }
    catch (e) {
        console.error(e)
        throw "Erro ao coletar comentarios do post"
    }
}
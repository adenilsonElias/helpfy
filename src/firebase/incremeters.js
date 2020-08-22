import Firestore from '@react-native-firebase/firestore'

export async function IncrementComment(postId : String){
    try{
        await Firestore().collection('Post').doc(postId).update({
            commentNumber : Firestore.FieldValue.increment(1)
        })
        console.info("Numero de comentarios incrementado com sucesso")
    }
    catch (e){
        console.error(e)
        throw "Erro ao incrementar o numero de comentarios"
    }
}

export async function DecrementComment(postId : String){
    try{
        await Firestore().collection('Post').doc(postId).update({
            commentNumber : Firestore.FieldValue.increment(-1)
        })
        console.info("Numero de comentarios decrementado com sucesso")
    }
    catch (e){
        console.error(e)
        throw "Erro ao decrementar o numero de comentarios"
    }
}

export async function incrementLike(postId : String){
    try{
        await Firestore().collection('Post').doc(postId).update({
            likeNumber : Firestore.FieldValue.increment(1)
        })
        console.info("Numero de Likes incrementado com sucesso")
    }
    catch (e){
        console.error(e)
        throw "Erro ao incrementar o numero de likes"
    }
}

export async function decrementLike(postId : String){
    try{
        await Firestore().collection('Post').doc(postId).update({
            likeNumber : Firestore.FieldValue.increment(-1)
        })
        console.info("Numero de Likes decrementado com sucesso")
    }
    catch (e){
        console.error(e)
        throw "Erro ao decrementar o numero de likes"
    }
}

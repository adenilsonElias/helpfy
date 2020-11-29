import Firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'
import Post from "../model/post_model"
import User from "../model/user"

export async function getPostListWant(userId: String) {
    try {
        const postsRef = await Firestore().collection('User').doc(userId).collection('wanted').get()
        if (postsRef.empty) {
            return []
        }
        const idList = postsRef.docs.map((value) => {
            return value.id
        })
        const finalPost :FirebaseFirestoreTypes.DocumentSnapshot[] = [];
        for(let i = 0; i < idList.length; i+= 1){
            finalPost.push(await Firestore().collection('Post').doc(idList[i]).get())
        }
        return finalPost.filter((value)=>value.exists).map(post => new Post({ ...post.data(), IdPost: post.id }))
    }
    catch (e) {
        console.error(e)
        throw "Erro ao coletar posts no eu quero"
    }
}

export async function addIWant(post: Post, userId: String) {
    try {
        const userRef = Firestore().collection('User').doc(userId).collection('wanted').doc(post.IdPost)
        const postRef = Firestore().collection('Post').doc(post.IdPost).collection('want').doc(userId)
        const counterRef = Firestore().collection('Post').doc(post.IdPost)

        await Firestore().runTransaction(async (transaction) => {
            transaction.set(userRef, {
                post: Firestore().collection('Post').doc(post.IdPost)
            })
            transaction.set(postRef, {
                user: Firestore().collection('User').doc(userId)
            })
            transaction.update(counterRef, {
                wantNumber: Firestore.FieldValue.increment(1)
            })
        })
    }
    catch (e) {
        console.error(e)
        throw "Erro ao adicionar Like"
    }
}

export async function removeIWant(post: Post, userId: String) {
    const userRef = Firestore().collection('User').doc(userId).collection('wanted').doc(post.IdPost)
    const postRef = Firestore().collection('Post').doc(post.IdPost).collection('want').doc(userId)
    const counterRef = Firestore().collection('Post').doc(post.IdPost)

    await Firestore().runTransaction(async (transaction) => {
        transaction.delete(userRef)
        transaction.delete(postRef)
        transaction.update(counterRef, {
            wantNumber: Firestore.FieldValue.increment(-1)
        })
    })
}

export async function getWantPeople(post: Post) {
    try {
        const userListReference = await Firestore().collection('Post').doc(post.IdPost).collection('want').get()
        let userList: User[] = []
        for (let userRefence of userListReference.docs) {
            let reference = await userRefence.data()['user'].get()
            userList.push(new User(reference._data))
        }
        console.info("Usuarios que querem o item coletados com sucesso")
        return userList
    } catch (e) {
        console.error(e)
        throw "Erro ao coletar usuario que querem o item"
    }
}

/**
 * Função para verificar se o usuario deu like no post
 * Se estiver vazio usuario ainda não deu like
 */
export async function isWanted(post: Post, userId: String) {
    const wanted = await Firestore().collection('Post').doc(post.IdPost).collection('want').where('user', '==', Firestore().collection('User').doc(userId)).get()
    return wanted.empty
}

export function wantListListener(post : Post, callBack : Function){
    return Firestore().collection('Post').doc(post.IdPost).collection('want').onSnapshot(callBack);
}
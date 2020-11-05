import Firestore from '@react-native-firebase/firestore';
import Storage from '@react-native-firebase/storage';
// import { Message } from 'react-native-gifted-chat';
import User from '../model/user';

interface Message {
    "_id": String,
    "createdAt": Date,
    "text": String,
    "user": {
        "_id": String,
        "name": String
    },
    "image" : String
}

export async function sendMessage(sender: User, receiver: User, message: Message[]) {
    try {
        const [maior, menor] = [sender.id, receiver.id].sort().reverse()
        const messageReference = Firestore().collection('Messages').doc(maior).collection(menor).doc()
        const senderReference = Firestore().collection('User').doc(sender.id).collection('Chat').doc(receiver.id)
        const receiverReference = Firestore().collection('User').doc(receiver.id).collection('Chat').doc(sender.id)
        Firestore().runTransaction(async (ts) => {
            const newMessageReference = ts.set(messageReference, message[0]);
            ts.set(senderReference, { user: Firestore().collection('User').doc(receiver.id) })
            ts.set(receiverReference, { user: Firestore().collection('User').doc(sender.id) })
        })

    }
    catch (e) {
        console.error(e)
        throw "Erro ao enviar mensagem"
    }
}

export async function sendMessageWithImage(sender: User, receiver: User, message: Message[],image : String) {
    const [maior, menor] = [sender.id, receiver.id].sort().reverse()

    // tentar manda imagem pro storage
    let bucketReference = null
    try {
        bucketReference = Storage().ref(`chatImage/${maior}/${menor}/${image.split('/').pop()}`);
        let imageUrl = "";
        await bucketReference.putFile(image).then(async () => {
            imageUrl = await bucketReference.getDownloadURL()
        })
        message[0].image = imageUrl
    }
    catch (e) {
        console.error(e)
        throw "Erro ao enviar imagem para o storage"
    }
    // tentar manda messagem pro firestore
    try {
        const messageReference = Firestore().collection('Messages').doc(maior).collection(menor).doc()
        const senderReference = Firestore().collection('User').doc(sender.id).collection('Chat').doc(receiver.id)
        const receiverReference = Firestore().collection('User').doc(receiver.id).collection('Chat').doc(sender.id)
        Firestore().runTransaction(async (ts) => {
            const newMessageReference = ts.set(messageReference, message[0]);
            ts.set(senderReference, { user: Firestore().collection('User').doc(receiver.id) })
            ts.set(receiverReference, { user: Firestore().collection('User').doc(sender.id) })
        })
    }
    catch (e) {
        await bucketReference.delete()
        console.error(e)
        throw "Erro ao enviar messagem"
    }
}

export async function sendMessageWithVideo(sender: User, receiver: User, message: Message[],video : String) {
    const [maior, menor] = [sender.id, receiver.id].sort().reverse()

    // tentar manda video pro storage
    let bucketReference = null
    try {
        bucketReference = Storage().ref(`chatVideo/${maior}/${menor}/${video.split('/').pop()}`);
        let videoUrl = "";
        await bucketReference.putFile(video).then(async () => {
            videoUrl = await bucketReference.getDownloadURL()
        })
        message[0].video = videoUrl
    }
    catch (e) {
        console.error(e)
        throw "Erro ao enviar imagem para o storage"
    }
    // tentar manda messagem pro firestore
    try {
        const messageReference = Firestore().collection('Messages').doc(maior).collection(menor).doc()
        const senderReference = Firestore().collection('User').doc(sender.id).collection('Chat').doc(receiver.id)
        const receiverReference = Firestore().collection('User').doc(receiver.id).collection('Chat').doc(sender.id)
        Firestore().runTransaction(async (ts) => {
            const newMessageReference = ts.set(messageReference, message[0]);
            ts.set(senderReference, { user: Firestore().collection('User').doc(receiver.id) })
            ts.set(receiverReference, { user: Firestore().collection('User').doc(sender.id) })
        })
    }
    catch (e) {
        await bucketReference.delete()
        console.error(e)
        throw "Erro ao enviar messagem"
    }
}

// @TODO fazer tratativa de error dos listener

export function messageListener(senderId: String, receiverId: String, callback: Function) {
    const [maior, menor] = [senderId, receiverId].sort().reverse()
    return Firestore().collection('Messages').doc(maior).collection(menor).onSnapshot(callback);
}

export function chatListener(user: User, callback: Function) {
    return Firestore().collection('User').doc(user.id).collection('Chat').onSnapshot(callback)
}
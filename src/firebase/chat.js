import Firestore from '@react-native-firebase/firestore';
import User from '../model/user';

interface Message {
    "_id": String,
    "createdAt": Date,
    "text": String,
    "user": {
        "_id": String,
        "name": String
    }
}

export async function sendMessage(sender: User, receiver: User, message: Message[]) {
    try {
        const [maior, menor] = [sender.id, receiver.id].sort().reverse()
        const messageReference = Firestore().collection('Messages').doc(maior).collection(menor).doc()
        const senderReference = Firestore().collection('User').doc(sender.id).collection('Chat').doc(receiver.id)
        const receiverReference = Firestore().collection('User').doc(receiver.id).collection('Chat').doc(sender.id)
        Firestore().runTransaction(async (ts) => {
            const newMessageReference = ts.set(messageReference,message[0]);
            ts.set(senderReference,{user: Firestore().collection('User').doc(receiver.id)})
            ts.set(receiverReference,{user: Firestore().collection('User').doc(sender.id)})
        })

    }
    catch (e) {
        console.error(e)
        throw "Erro ao enviar mensagem"
    }
}

// @TODO fazer tratativa de error dos listener

export function messageListener(senderId: String, receiverId: String, callback: Function) {
    const [maior, menor] = [senderId, receiverId].sort().reverse()
    return Firestore().collection('Messages').doc(maior).collection(menor).onSnapshot(callback);
}

export function chatListener(user : User, callback:Function){
    return Firestore().collection('User').doc(user.id).collection('Chat').onSnapshot(callback)
}
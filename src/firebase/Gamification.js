import Firestore from '@react-native-firebase/firestore'
import User from '../model/user'

export async function getPeople() {
    try {
        const userList = await Firestore().collection('User').orderBy('score', 'desc').get()
        let userLists: User[] = []
        for (let user of userList.docs) {
            userLists.push(new User(user.data()))
        }
        console.info("Usuarios do placar geral coletados com sucesso")
        return userLists
    } catch (e) {
        console.error(e)
        throw "Erro ao coletar usuarios do placar geral"
    }
}

export async function addPoint(userId: String) {
    try {
        const userRef = Firestore().collection('User').doc(userId)

        await Firestore().runTransaction(async (transaction) => {
            transaction.update(userRef, {
                score: Firestore.FieldValue.increment(1)
            })
        })
    }
    catch (e) {
        console.error(e)
        throw "Erro ao adicionar pontos"
    }
}
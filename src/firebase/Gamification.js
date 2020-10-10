import Firestore from '@react-native-firebase/firestore'
import User from '../model/user'

export async function getPeople() {
    try {
        const userList = await Firestore().collection('User').orderBy('score', 'desc').get()
        console.info("Usuarios do placar geral coletados com sucesso")
        return userList.docs.map((user) => new User(user.data()))
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
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

export async function getScoreBar(userId){
    try {
        const userRef = await (await Firestore().collection('User').doc(userId).get()).data()        
        let score = userRef.score        
        let values = [1]
        values[0] = (score % 10 ) * 0.1

        if(Math.floor(score / 10) !== 0){
            values[1] = Math.floor(score / 10) 
        } else {
            values[1] = 1
        }
        return values
    } catch(e) {
        console.log(e)
    }    
}
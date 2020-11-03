// @flow

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import Firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'
import User from '../model/user';

const authentication = auth();

/**
 * # CreateNewUser
 * Função para criar Um novo usuario no firebase e faz login do usuario  
 * ## parametros :  
 * user {  
 *   username : string,   
 *   password : string,  
 * }
 * 
 * ## retornos :   
 *  se usuario não for criado ele retorna false,  
 *  se usuario for criado retorna um userCredential
 */

export async function CreateNewUser(user: User, setUserReduxCallback: Function = null) {
    try {
        // Cria um usuario e pega como retorno a referencia para este usuario
        const userCredential = await authentication.createUserWithEmailAndPassword(user.email, user.senha)
        // salva o usuario no firestore
        await Firestore().collection("User").doc(userCredential.user.uid).set({ ...user.ToJson(), senha: "", id: userCredential.user.uid })
        // coleta o usuario salvo no firestore
        const newUser = await Firestore().collection("User").doc(userCredential.user.uid).get()
        // adiciona o usuario no redux 
        setUserReduxCallback(new User({ ...newUser.data(), id: userCredential.user.uid }))
        //retorno qualquer 
        return userCredential;
    }
    catch (e) {
        // @Todo - Separar os tipos de erros 
        console.error(e)
        throw "Erro ao criar usuario"
    }
}

export function createAuthObserver(functionAuth) {
    try {
        authentication.onAuthStateChanged(functionAuth);
    }
    catch (e) {
        console.error("Erro ao inicializar o Auth Observer")
        throw "Erro createAuthObserver"
    }
}

export async function MakeLogin(username: String, password: String) {
    try {
        const userCredential = await authentication.signInWithEmailAndPassword(username, password);
        return userCredential;
    }
    catch (e) {
        // @Todo - separar os erros
        console.error("ERRO AO FAZER LOGIN");
        throw "Erro ao fazer login"
    }
}

export async function updateUser(newUser: User, password : String ,newEmail: String, oldUser: User) {
    const rollback = new User(oldUser.ToJson())
    try{
        await authentication.currentUser.reauthenticateWithCredential(auth.EmailAuthProvider.credential(authentication.currentUser.email,password))
    }
    catch (e){
        console.debug(e[0])
        throw "Erro ao reautenticar"
    }
    try{
        await authentication.currentUser.updateEmail(newEmail)
    }
    catch (e){
        console.error(e)
        throw "Erro ao atualizar email"
    }
    try {
        await Firestore().collection("User").doc(newUser.id).update(newUser.ToJson())
    } catch (e) {
        console.error(e)
        await authentication.currentUser.updateEmail(rollback.email)
        await Firestore().collection("User").doc(oldUser.id).set(rollback.ToJson())
        throw "Erro ao editar usuario"
    }

}

export async function MakeLogout() {
    await authentication.signOut()
}

export async function getUser(id: String) {
    const user = await Firestore().collection('User').doc(id).get()
    return new User(user.data())
}

export async function getUserByRef(ref: FirebaseFirestoreTypes.DocumentReference) {
    const user = await ref.get();
    return new User(user.data())
}

export function setUserListener(user: User, setUser: Function) {
    const userRef = Firestore().collection('User').doc(user.id).onSnapshot(setUser)
}
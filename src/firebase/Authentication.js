// @flow

import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
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

export async function CreateNewUser(user : User , setUserReduxCallback : Function = null){
    try{
        // Cria um usuario e pega como retorno a referencia para este usuario
        const userCredential = await authentication.createUserWithEmailAndPassword(user.email,user.senha)
        // salva o usuario no firestore
        await firestore().collection("User").doc(userCredential.user.uid).set({...user.ToJson() , senha:""})
        // coleta o usuario salvo no firestore
        const newUser = await firestore().collection("User").doc(userCredential.user.uid).get()
        // adiciona o usuario no redux 
        setUserReduxCallback(new User(newUser.data()))
        //retorno qualquer 
        return userCredential;
    }
    catch (e){
        // @Todo - Separar os tipos de erros 
        console.error(e)
        throw "Erro ao criar usuario"
    }
}

export function createAuthObserver(functionAuth){
    try{
        authentication.onAuthStateChanged(functionAuth);
    }
    catch(e){
        console.error("Erro ao inicializar o Auth Observer")
        throw "Erro createAuthObserver"
    }
}

export async function MakeLogin(username : String ,password : String){
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

export async function MakeLogout(){
    await authentication.signOut()
}

export async function getUser(id : String){
    const user = await firestore().collection('User').doc(id).get()
    return new User(user.data())
}
import firebase from './firebase_base'

const authentication = firebase.auth()

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

export async function CreateNewUser(user){
    try{
        const userCredential = await authentication.createUserWithEmailAndPassword(user.username,user.password)
        return userCredential;
    }
    catch (e){
        console.error("Erro ao Criar um usuario")
        console.log(e)
        return false;
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

export async function MakeLogin(username,password){
    try {
        const userCredential = authentication.signInWithEmailAndPassword(username, password);
        return userCredential;
    }
    catch (e) {
        console.error("ERRO AO FAZER LOGIN");
        return false;
    }
}

export async function MakeLogout(){
    await authentication.signOut()
}
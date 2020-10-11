import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore"

export default class Comentario {
    id: String = null
    message : String = null
    creatorId : String = null
    authorRef : FirebaseFirestoreTypes.DocumentReference = null
    response : Comentario[] = []
    depth : number = null
    timeCreated : number = null

    constructor (comentario : Comentario) {
        for(let key in comentario){
            this[key] = comentario[key]
        }
    }

    toJson (){
        return Object.getOwnPropertyNames(this).reduce((objeto,key)=>{
            if(key != 'id'){
                objeto[key] = this[key];
            }
            return objeto;
        },{})
    }

}
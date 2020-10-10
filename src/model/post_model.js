import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore"
import { getUserByRef } from "../firebase/Authentication"
import { createPostListener } from "../firebase/Post"


class Post {

    authorRef: FirebaseFirestoreTypes.DocumentReference = null
    description: String = null
    image: String[] = null
    timePost: Date = null
    title: String = null
    userId: String = null
    IdPost: String = null
    category: String = null
    commentNumber: Number = 0
    likeNumber: Number = 0
    donationStatus: Number = 1
    donatarioRef: FirebaseFirestoreTypes.DocumentReference = null
    donatarioId: String = null
    wantNumber :Number = 0

    constructor(postJSON: Post) {
        for (let key in postJSON) {
            this[key] = postJSON[key];
        }
    }

    fromJson(postJson) {
        for (let key in postJson) {
            this[key] = postJson[key];
        }
    }

    toJson() {
        return Object.getOwnPropertyNames(this).reduce((json, index) => {
            if(index != 'IdPost'){
                json[index] = this[index]
            }
            return json
        }, {})
    }

    async getUser(){
        return await getUserByRef(this.authorRef)
    }

    // retorna a função para desligar o listener e não sobrecarregar a memoria do celular
    listener(onUpdate: Function) {
        return createPostListener(this, onUpdate);
    }

}

export default Post
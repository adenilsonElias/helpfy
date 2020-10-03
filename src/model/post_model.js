import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore"
import { createPostListener } from "../firebase/Post"


class Post {

    author: String
    comments: Comentario[]
    description: String
    emailPost: String
    image: String[]
    postDonated: String
    timePost: Date
    title: String
    userId: String
    IdPost: String
    category: String
    commentNumber: Number
    likeNumber: Number
    donationStatus: Number
    donatarioRef: FirebaseFirestoreTypes.DocumentReference
    donatarioId: String

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
            json[index] = this[index]
            return json
        }, {})
    }

    // retorna a função para desligar o listener e não sobrecarregar a memoria do celular
    listener(onUpdate: Function) {
        return createPostListener(this, onUpdate);
    }

}

export default Post
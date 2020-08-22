import { getComentarios } from "../firebase/Post"


class Post {

    author: String
    comments: Comentario[]
    description: String
    emailPost: String
    image: String
    postDonated: String
    timePost: Date
    title: String
    userId: String
    IdPost: String
    category : String
    commentNumber : Number
    likeNumber : Number


    constructor(postJSON : Post) {
        for (let key in postJSON) {
            this[key] = postJSON[key];
        }
    }

    toJson() {
        return Object.getOwnPropertyNames(this).reduce((json, index) => {
            json[index] = this[index]
            return json
        }, {})
    }

    async getComments(){
        return await getComentarios(this.IdPost);
    }

}

export default Post


class Post {

    author: String
    comments: String
    description: String
    emailPost: String
    image: String
    postDonated: String
    timePost: Date
    title: String
    userId: String
    IdPost: String
    category : String

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

}

export default Post
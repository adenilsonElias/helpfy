
interface IPost {
    author: String;
    comments: String;
    description: String;
    emailPost: String;
    image: String;
    postDonated: String;
    timePost: Date;
    title: String;
    userId: String;
    IdPost?: String
}

class Post {
    constructor(postJSON : IPost) {
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
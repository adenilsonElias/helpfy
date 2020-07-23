
class Post {
    constructor(postJSON) {
        // if (postJSON.)
        for(let key in postJSON){
            this[key] = postJSON[key];
        }
    }

    toJson() {
        return Object.getOwnPropertyNames(this).reduce((json,index) =>{
            json[index] = this[index]
            return json
        }, {})
    }

}

export default Post
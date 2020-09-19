// @flow

export default class User {
    id : String
    name: String
    email : String
    senha : String
    birthDay : String
    state : String
    city : String
    profileImage: String

    constructor(user : User){
        for(let key in user){
            this[key] = user[key];
        }
    }

    ToJson(){
        return Object.getOwnPropertyNames(this).reduce((json,value)=>{
            json[value] = this[value]
            return json
        },{})
    }
}
// @flow

export default class User {
    id : String = null
    name: String = null
    email : String = null
    senha : String = null
    birthDay : String = null
    state : String = null
    city : String = null
    profileImage: String = null
    score: Number = null

    constructor(user : User){
        for(let key in user){
            this[key] = user[key];
        }
    }

    ToJson(){
        return Object.getOwnPropertyNames(this).reduce((json,value)=>{
            if(value != 'id'){
                json[value] = this[value]
            }
            return json
        },{})
    }
}
// @flow

export default class User {
    email : String
    senha : String
    id : String

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

export default class Comentario {
    id: String
    message : String
    creatorId : String
    author : String
    response : Comentario[]
    depth : number
    timeCreated : number

    constructor (comentario : Comentario) {
        for(let key in comentario){
            this[key] = comentario[key]
        }
    }

    toJson (){
        return Object.getOwnPropertyNames(this).reduce((objeto,key)=>{
            objeto[key] = this[key];
            return objeto;
        },{})
    }

}
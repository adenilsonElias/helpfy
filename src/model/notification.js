import Post from "./post_model"
import { ThemeConsumer } from "react-native-elements"


export default class SendNotification {
    id: String
    senderId: String
    type: 'like' | 'wishlist' | 'chat' | 'comment' | 'evaluation' | 'response'
    message: String 
    senderName: String
    postId: String

    constructor(notificationJSON : SendNotification, post: Post) {
        for (let key in notificationJSON) {
            this[key] = notificationJSON[key];
        }
        switch (this.type) { 
            case 'like':
                this.message = `${this.senderName} deu like no seu post: ${post.title}`
                break;

            case 'wishlist':
                this.message = `${this.senderName} tem interesse no seu item: ${post.title}`
                break

            case 'chat':
                this.message = `${this.senderName}te chamou no chat`
                break

            case 'comment':
                this.message = `${this.senderName} comentou no seu post: ${post.title}`
                break

            case 'evaluation':
                this.message = `${this.senderName} comentou no seu perfil`
                break

            case 'response':
                this.message = `${this.senderName} respondeu seu comentário`
                break
            
            default:
                throw 'Tipo incorreto'
        }
    }
    
    toJson() {
        return Object.getOwnPropertyNames(this).reduce((json, index) => {
            json[index] = this[index]
            return json
        }, {})
    }
    
}

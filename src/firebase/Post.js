import firebase from './firebase_base'


const firestore = firebase.firestore()



export async function createPost(Post) {
    try{
        console.log(Post.toJson())
        let post = await firestore.collection('Post').add(Post.toJson())
        console.log("oi")
    }
    catch (e){
        console.error(e)
    }
}

export async function getPost(id) {
    let post = await firestore.collection('Post').get();
    console.log(post)
}

export function getPostList() {

}

export function editPost() {

}

export function deletePost() {

}

function Post(postJSON) {
    this.title = postJSON['title']
    this.author = postJSON['author']
    this.image = postJSON['image']
    this.comments = postJSON['comments']
    this.description = postJSON['description']
    this.postId = postJSON['postId']
    this.emailPost = postJSON['emailPost']
    this.timePost = postJSON['timePost']
    this.userId = postJSON['userId']
    this.postDonated = postJSON['postDonated']
}

export default Post

class Post  {
    constructor(post) {
        this.title = post.title;
        this.text = post.body;
        this.authorId = post.userId;
        this.postId = post.id
    }
}

export default Post;
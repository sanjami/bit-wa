class Blog {
    constructor(title, text){
        this.id = Math.random();
        this.title = title;
        this.text = text;
    }
}

module.exports = Blog;


class Author {
    constructor(author) {
        this.name = author.name;
        this.username = author.username;
        this.email = author.email;
        this.phone = author.phone;
        this.street = author.address.street;
        this.city = author.address.city;
        this.zipcode = author.address.zipcode;
        this.company = author.company.name;
        this.slogan = author.company.catchPhrase;
        this.authorId = author.id;
        this.authorsPosts = []
    }
    addPost = (post) => {
        this.authorsPosts.push(post)
    }

}

export default Author;

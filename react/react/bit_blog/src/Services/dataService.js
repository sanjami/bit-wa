import Post from '../Entities/Post'
import Author from '../Entities/Author'

class GetAllPost {
    allPostFunction = () => {
        return fetch('https://jsonplaceholder.typicode.com/posts') 
            .then((response) => response.json())
            .then((postList) => {
                return postList.map((post) => {
                    return new Post(post)
                })
            })
       } 
    }
 
    class GetOnePost {
        onePostFunction = (id) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`) 
                .then((response) => response.json())
                .then((post) => {
                    return new Post(post)
                })
           } 
        }

    class GetAllAuthors {
        allAuthorsFunction = () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => response.json())
                .then((authorsList) => {
                    return authorsList.map((author) => {
                        return new Author(author)
                    })
                })
        }
    }

    class GetOneAuthor {
        oneAuthorFunction = (id) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${id}`) 
                .then((response) => response.json())
                .then((author) => {
                    console.log(author)
                    return new Author(author)
                })
           } 
        }


    class GetPostsForAuthor {
        postForAuthorFunction = (id) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response) => response.json())
        }
    }

   
const allPostService = new GetAllPost(); 
const onePostService = new GetOnePost();
const allAuthorsService = new GetAllAuthors();
const oneAuthorService = new GetOneAuthor();
const authorsPosts = new GetPostsForAuthor();

export  {allPostService, onePostService, allAuthorsService, oneAuthorService, authorsPosts}

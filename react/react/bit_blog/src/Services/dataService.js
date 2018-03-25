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

    class AddPost {
        addPostFunction = (post) => {
            return fetch ('https://jsonplaceholder.typicode.com/posts', {
                body: JSON.stringify(post), // must match 'Content-Type' header
                headers: {
                  'content-type': 'application/json'
                },
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
              })
              .then(response => response.json()) // parses response to JSON
            }
        }

   
const allPostService = new GetAllPost(); 
const onePostService = new GetOnePost();
const allAuthorsService = new GetAllAuthors();
const oneAuthorService = new GetOneAuthor();
const authorsPostsService = new GetPostsForAuthor();
const newPostService = new AddPost();

export  {allPostService, onePostService, allAuthorsService, oneAuthorService, authorsPostsService, newPostService}

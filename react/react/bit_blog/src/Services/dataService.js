import Post from '../Entities/Post'
import Author from '../Entities/Author'

class GetData {
    allPostFunction = () => {
        return fetch('http://localhost:3000/posts')
            .then((response) => response.json())
            .then((postList) => {
                return postList.map((post, i) => {
                    return new Post(post);
                })
            })
    };

    onePostFunction = (postId) => {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((response) => response.json())
            .then((post) => {
                return new Post(post);
            })
    };

    allAuthorsFunction = () => {
        return fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response.json())
            .then((authors) => {
                return authors.map((author) => {
                    return new Author(author);
                })
            })
    };

    oneAuthorFunction = (userId) => {
        return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((response) => response.json())
            .then((author) => {
                return new Author(author);
            })
    };

    authorPostsFunction = (id) => {
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((response) => response.json())
            .then((postList) => {
                return postList.map((post, i) => {
                    return new Post(post);
                })
            })

    };

    newPostFunction = (data) => {
        return fetch('http://localhost:3000/posts', {
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',

        })
            .then(response => response.json())
    }

}


export const dataService = new GetData();

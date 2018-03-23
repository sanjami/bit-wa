import Post from '../Entities/Post'
import Author from '../Entities/Author'

class GetAllPost {
    allPostFunction = () => {
        return fetch('https://jsonplaceholder.typicode.com/posts') 
            .then((response) => response.json())
            .then((postList) => {
                return postList.map((post, i) => {
                    return new Post(post)
                })
            })
       } 
    }
 

   
export const allPostService = new GetAllPost(); 
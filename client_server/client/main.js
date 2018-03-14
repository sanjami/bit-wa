import Blog from './data.js';
import showBlog from './UImodule.js';

const url =  'http://127.0.0.1:3001/'
fetch(url)
.then((response) => response.json())
.then((resJson) => {
    console.log(resJson);
    let blogs = [];
    resJson.forEach(element => {
        let title = element.title;
        let text = element.text;
        let blog = new Blog(title, text)
        blogs.push(blog);
    });
    return blogs;
}).then((blogs) => {
    showBlog(blogs);
} )
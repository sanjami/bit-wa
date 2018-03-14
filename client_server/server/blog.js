const lorem = require('lorem-ipsum');
const Blog = require('./data.js')


const createTitle = () => {
    let title = lorem({
        count: 3,
        units: 'words'
    });
    return title;
}

const createText = () => {
    let text = lorem({
        count: 2,
        units: 'sentences'
    });
    return text;
}

const createBlog = (number) => {
    let blogs = [];
    for (let i = 0; i < number; i++) {
        let oneBlog = new Blog(createTitle(), createText());
        blogs.push(oneBlog);

    }
    return blogs;
}

module.exports = createBlog;
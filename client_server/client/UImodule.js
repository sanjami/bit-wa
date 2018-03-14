
const showBlog = (blogs) => {
    let container = $('#container');
    blogs.forEach(element => {

    let blogDiv = $('<div class="card-panel blue-grey darken-1 white-text"></div>');
        let titleElement = $(`<h2>${element.title}</h2>`);
        let textElement = $(`<p>${element.text}</p>`);
        blogDiv.append(titleElement);
        blogDiv.append(textElement);
        container.append(blogDiv);
    });

}

export default showBlog;
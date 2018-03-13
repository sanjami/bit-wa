
const getMovie = (url, responseMovie) => {
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            var movie = data[0].name;
            responseMovie(movie)
        })
}

export default getMovie;


var getMovie = (url, showMovie) => {
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            var movie = data[0].name;
            showMovie(movie)
        })
}

export default getMovie;
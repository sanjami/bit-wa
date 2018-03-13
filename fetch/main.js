import  getMovie  from "./data.js";

var responseMovie = (movie) => {
    console.log(movie);
}

let url = 'http://api.tvmaze.com/shows'
getMovie(url, responseMovie);


import getMovie from './data.js'

var showMovie = (movie) => {
    console.log(movie);
}

getMovie('http://.....' ,showMovie);
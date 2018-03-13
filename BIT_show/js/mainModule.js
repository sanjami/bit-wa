import {
    Season,
    Cast,
    AKA,
    Crew,
    Show,
    TvShows
} from './dataModule.js';
import {
    makeListOfMovies,
    makeOneMovie,
    selectors,
    makeSearchList
} from './UIModule.js';

function init() {

    var tvShows;


    const url = 'http://api.tvmaze.com/shows';
    const request = new Request(url, {
        method: 'GET'
    });

    fetch(request)
        .then(function (response) {
            return response.json();
        })
        .then(function (msg) {

            let firsFifty = msg.slice(0, 50);
            tvShows = new TvShows();
            firsFifty.forEach(element => {
                let show = new Show(element.name, element.image.medium, element.id, element.summary);

                tvShows.addShow(show);
            });

            makeListOfMovies(tvShows.showsList)
        })

    // search box

    $('#search_box').keyup(function (event) {
        let value = (this).value;


        const url = `http://api.tvmaze.com/search/shows?q=${value}`,

            request = new Request(url, {
                method: 'GET'
            });

        fetch(request)
            .then(function (response) {
                return response.json();
            })
            .then(function (msg) {
                $("#serch_list").empty();
                let tenMsg = msg.slice(0, 10);
                tenMsg.forEach(element => {
                    let movieName = element.show.name;
                    let id = element.show.id;
                    makeSearchList(movieName, id);
                })
            })

    })

    $('#search_box').change(function (event) {
        var value = $('#search_box').val();
        var element = $(`*[value='${value}']`);
        var id = element.attr("data-id");
        window.location.href = `showInfoPage.html#${id}`
    })

}



function initSinglePage() {

    var show;

    $('#search_box').keyup(function (event) {
        let value = (this).value;

        const url = `http://api.tvmaze.com/search/shows?q=${value}`,
        request = new Request(url, {
            method: 'GET'
        });
            fetch(request)
            .then(function (response) {
                return response.json();
            })

            .then(function (msg) {
                $("#serch_list").empty();
                let tenMsg = msg.slice(0, 10);
                tenMsg.forEach(element => {
                    let movieName = element.show.name;
                    let id = element.show.id;
                    makeSearchList(movieName, id);
                })
            })

    })

    $('#search_box').change(function (event) {
        var value = $('#search_box').val();
        var element = $(`*[value='${value}']`);
        var id = element.attr("data-id");
        window.location.href = `showInfoPage.html#${id}`
        location.reload();
    })

    let id = window.location.hash.slice(1);


    const url = `http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast&embed[]=crew&embed[]=akas`;
    const request = new Request(url, {
            method: 'GET'
        });
        fetch(request)
        .then(function (response) {
            return response.json();
        })
        .then(function (msg) {

            show = new Show(msg.name, msg.image.original, msg.id, msg.summary);

            msg._embedded.seasons.forEach((element) => {
                const season = new Season(element.premiereDate, element.endDate);
                show.addSeason(season);
            })

            msg._embedded.cast.forEach((element) => {
                const cast = new Cast(element.person.name);
                show.addCast(cast);
            })

            msg._embedded.akas.forEach((element) => {
                const aka = new AKA(element.country.name, element.name);
                show.addAKA(aka);
            })

            msg._embedded.crew.forEach((element) => {
                const crew = new Crew(element.type, element.person.name);
                show.addCrew(crew);
            })

            makeOneMovie(show);

        })

}

export {
    init,
    initSinglePage
}

import { Season, Cast, AKA, Crew, Show, TvShows } from './dataModule.js';
import { makeListOfMovies, makeOneMovie, selectors, makeSearchList } from './UIModule.js';

    function init() {

        var tvShows;

        let request = $.ajax({

            url: 'http://api.tvmaze.com/shows',
            method: 'GET'

        })

        request.done(function (msg) {
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

            let request = $.ajax({
                url: `http://api.tvmaze.com/search/shows?q=${value}`,
                method: 'GET'

            })

            request.done(function (msg) {
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

        $('#search_box').keyup(function (event) {
            let value = (this).value;

            let request = $.ajax({
                url: `http://api.tvmaze.com/search/shows?q=${value}`,
                method: 'GET'

            })

            request.done(function (msg) {
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

        let request = $.ajax({

            url: `http://api.tvmaze.com/shows/${id}`,
            method: 'GET',
            data: {
                embed: ['seasons', 'cast', 'crew', 'akas']
            }

        })
        let show;
        request.done(function (msg) {
console.log(msg);
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
console.log(show);
            makeOneMovie(show);

        })

    }

    export {
        init,
        initSinglePage
    }

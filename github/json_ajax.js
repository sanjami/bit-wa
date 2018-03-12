
import presentData from './data.js'


$('#search-box').click(function (event) {

    var username = $('#search-box').val();

    var request = $.ajax({
        url: `https://api.github.com/search/users?q=${username}`,
        method: "GET",
    });

    request.done(function (msg) {
        presentData(msg);
    });

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

})
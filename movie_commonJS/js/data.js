function Genre(genreName) {
    // properties
    this.name = genreName;
}

// methods
Genre.prototype.getData = function () {
    var name = this.name;
    var firstIndex = 0;
    var lastIndex = name.length - 1
    var output = name.charAt(firstIndex) + name.charAt(lastIndex);

    return output.toUpperCase();
};





function Movie(title, genreObj, length) {
    // properties
    this.title = title;
    this.genre = genreObj; // This is object
    this.length = length;

}

// methods
Movie.prototype.getData = function () {
    return this.title + ", " + this.length + "min, " + this.genre.getData();
};





function Program(date) {
    // properties
    this.date = date;
    this.listOfMovies = [];
}

// methods
Program.prototype.getProgramDuration = function () {
    var programLength = 0;

    // Alternative way to loop arrays
    this.listOfMovies.forEach(function (movie) {
        programLength += movie.length;
    }, this);

    return programLength;
};

Program.prototype.addMovie = function (movie) {
    this.listOfMovies.push(movie);
};

Program.prototype.getData = function () {
    var date = this.date;
    var movies = this.listOfMovies;
    var programDuration = this.getProgramDuration();
    var dateStr = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

    var outputStr = dateStr + ", program duration " + programDuration + "min\n";

    for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        outputStr += "\t\t" + movie.getData() + "\n";
    }

    return outputStr;
};





function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
};

/**
 * Adds program to the list of programs
 */
Festival.prototype.addProgram = function (program) {
    this.listOfPrograms.push(program);
};

/**
 * Returns movie count in all programs
 * @returns {number}
 */
Festival.prototype.getMoviesCount = function () {
    var programs = this.listOfPrograms;
    var moviesCount = 0;

    for (var i = 0; i < programs.length; i++) {
        var program = programs[i];
        moviesCount += program.listOfMovies.length;
    }

    return moviesCount;
};

Festival.prototype.getData = function () {
    var festivalName = this.name;
    var programs = this.listOfPrograms;
    var totalMovieCount = this.getMoviesCount();

    var outputStr = festivalName + " has " + totalMovieCount + " movie titles\n"

    for (var i = 0; i < programs.length; i++) {
        var program = programs[i];
        outputStr += "\t" + program.getData();
    }

    return outputStr;
};

module.exports = {
    Genre,
    Movie,
    Program,
    Festival
}
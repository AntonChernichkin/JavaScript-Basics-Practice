"use strict";

let i = 0;
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');




const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


do {
    
        const lastFilmName = prompt('Один из последних просмотренных фильмов?', '');
        const lastFilmRaiting = prompt('На сколько оцените его?', '');
        i++;
        personalMovieDB.movies[lastFilmName] = lastFilmRaiting;
}
while (i < 2);


if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ) {
    alert('Вы классический зритель');
} else {
    alert('Вы киноман');
}

// personalMovieDB.movies[lastFilmName2] = lastFilmRaiting2;

console.log(personalMovieDB);
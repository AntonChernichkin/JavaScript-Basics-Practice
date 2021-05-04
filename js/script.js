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

// do {

//     const lastFilmName = prompt('Один из последних просмотренных фильмов?', '');
//     const lastFilmRaiting = prompt('На сколько оцените его?', '');
//     i++;
//     if (lastFilmName != null && lastFilmRaiting != null && lastFilmName != '' && lastFilmRaiting != '' && lastFilmName.length < 50) {
//         personalMovieDB.movies[lastFilmName] = lastFilmRaiting;
//     } else {
//         i--;
//     }
// }
// while (i < 2);

for (let i = 0; i < 2; i++) {
    const lastFilmName = prompt('Один из последних просмотренных фильмов?', '');
    const lastFilmRaiting = prompt('На сколько оцените его?', '');
    if (lastFilmName != null && lastFilmRaiting != null && lastFilmName != '' && lastFilmRaiting != '' && lastFilmName.length < 50) {
        personalMovieDB.movies[lastFilmName] = lastFilmRaiting;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
} else {
    alert('Вы киноман');
}

// personalMovieDB.movies[lastFilmName2] = lastFilmRaiting2;

console.log(personalMovieDB);
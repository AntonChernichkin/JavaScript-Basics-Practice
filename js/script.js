"use strict";

let i = 0;
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

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

// for (let i=0; i<2; i++) {
//     const lastFilmName = prompt('Один из последних просмотренных фильмов?', '');
//     const lastFilmRaiting = prompt('На сколько оцените его?', '');
//     if (lastFilmName != null && lastFilmRaiting != null && lastFilmName != '' && lastFilmRaiting != '' && lastFilmName.length < 50) {
//         personalMovieDB.movies[lastFilmName] = lastFilmRaiting;
//     } else {
//         i--;
//     }
// }



function rememberMyFilms() {
    while (i < 2) {
        const lastFilmName = prompt('Один из последних просмотренных фильмов?', '');
        const lastFilmRaiting = prompt('На сколько оцените его?', '');
        i++;
        if (lastFilmName != null && lastFilmRaiting != null && lastFilmName != '' && lastFilmRaiting != '' && lastFilmName.length < 50) {
            personalMovieDB.movies[lastFilmName] = lastFilmRaiting;
        } else {
            i--;
        }
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB > 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    switch (hidden) {
        case false:
            console.log(personalMovieDB);
            break;
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
    }
}

writeYourGenres();
// personalMovieDB.movies[lastFilmName2] = lastFilmRaiting2;
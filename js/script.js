"use strict";

let i = 0;
// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    showMyDB: function (hidden) {
        switch (hidden) {
            case false:
                console.log(personalMovieDB);
                break;
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {

            // let genre = prompt(`Ваш любимый жанр под номером ${i+1}`);
            
            // if (genre == '' || genre == null) {
            //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
            //     i--
            // } else {
            //     personalMovieDB.genres[i] = genre;
            // }

            while (personalMovieDB.genres[i] == "" || personalMovieDB.genres[i] == null) {
                personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
            }
        }
        personalMovieDB.genres.forEach(function(item, n) {
            console.log(`Любимый жанр #${n+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        switch (personalMovieDB.privat) {
            case false:
                personalMovieDB.privat = true;
                break;
            case true:
                personalMovieDB.privat = false;
                break;
        }
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
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

// function rememberMyFilms() {
//     while (i < 2) {
//         const lastFilmName = prompt('Один из последних просмотренных фильмов?', '');
//         const lastFilmRaiting = prompt('На сколько оцените его?', '');
//         i++;
//         if (lastFilmName != null && lastFilmRaiting != null && lastFilmName != '' && lastFilmRaiting != '' && lastFilmName.length < 50) {
//             personalMovieDB.movies[lastFilmName] = lastFilmRaiting;
//         } else {
//             i--;
//         }
//     }
// }

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         alert('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//         alert('Вы классический зритель');
//     } else if (personalMovieDB > 30) {
//         alert('Вы киноман');
//     } else {
//         alert('Произошла ошибка');
//     }
// }

// function showMyDB(hidden) {
//     switch (hidden) {
//         case false:
//             console.log(personalMovieDB);
//             break;
//     }
// }

// function writeYourGenres() {
//     for (let i = 0; i < 3; i++) {
//         personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
//     }
// }

// personalMovieDB.movies[lastFilmName2] = lastFilmRaiting2;
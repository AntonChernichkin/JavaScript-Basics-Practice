"use strict";

const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');
const lastFilmName = prompt('Один из последних просмотренных фильмов?', '');
const lastFilmRaiting = prompt('На сколько оцените его?', '');
const lastFilmName2 = prompt('Один из последних просмотренных фильмов?', '');
const lastFilmRaiting2 = prompt('На сколько оцените его?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {}, 
    genres: [],
    privat: false
};

personalMovieDB.movies[lastFilmName] = lastFilmRaiting;
personalMovieDB.movies[lastFilmName2] = lastFilmRaiting2;

console.log(personalMovieDB);
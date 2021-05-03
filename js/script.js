"use strict";

let numberOfFilms = prompt ('Сколько фильмов вы уже посмотрели', '');
let moviesObj = {};
let actorsObj = {};
let genresArr = [];


const personalMovieDB = {
    count: numberOfFilms,
    movies: moviesObj,
    actors: actorsObj, 
    genres: genresArr,
    privat: false
};


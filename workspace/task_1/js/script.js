"use strict";

const numberOfFilms  = +prompt("Скольkо фильмов ты посмотрел?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for(let i=0; i<2; i++) {
    const a  = prompt("Последний фильм?", "");
    if(a == "" || a == null || a.length >=50) {
        i--;
        continue;
    }

    const b  = prompt("На сколько оцените фильм?", "");
    if(b == "" || b == null || b.length >=50) {
        i--;
        continue;
    } 
    personalMovieDB.movies[a] = b;
}

let mess;

    if(personalMovieDB.count<10) {
        mess = alert("Просмотрено мало фильмов");
    } else if(personalMovieDB.count>=10 && personalMovieDB.count<=30) {
        mess = alert("Вы класический зритель");
    } else if(personalMovieDB.count>30) {
        mess = prompt("Вы киноман!");
    } else {
        mess = prompt("ERROR");
    }



console.log(personalMovieDB);
const numberOfFilms  = +prompt("Скольkо фильмов ты посмотрел?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a  = prompt("Последний фильм?", ""),
      b  = prompt("На сколько оцените фильм?", ""),
      c  = prompt("Последний фильм?", ""),
      d  = prompt("На сколько оцените фильм?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
/* Задание на урок 1:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// const a = prompt("Один из последних просмотренных фильмов?",""),
// 	b = prompt("На сколько оцените его?",""),
// 	c = prompt("Один из последних просмотренных фильмов?",""),
// 	d = prompt("На сколько оцените его?","");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


/* Задание на урок 2:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// do{
// 	numderOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
// }
// while (numderOfFilms === "" || !numderOfFilms || isNaN(numderOfFilms));

// for (let i = 0; i < 2; i++){
// 	const a = prompt("Один из последних просмотренных фильмов?","").trim(),
// 		b = prompt("На сколько оцените его?","").trim();   
// 	if (a != null && b != null && a != "" && b != "" && a.length < 50) {
// 		personalMovieDB.movies[a] = b;
// 		console.log("done");
// 	} else {
// 		console.log("error");
// 		i--;
// 	}
// }



/* Задание на урок 3:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

/* Задание на урок 4:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";

let numderOfFilms;

function start(){
	numderOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

	while(numderOfFilms == "" || numderOfFilms === null || isNaN(numderOfFilms)){
		numderOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
	}
}

start();

const personalMovieDB = {
	count : numderOfFilms,
	movies : {},
	actors : {},
	genres : [],
	privat : false,
	writeYourGenres: function writeYourGenres(){
		let yourGenres = "";
		let i = 1;
		
		do{
			yourGenres = prompt(`Ваш любимый жанр под номером ${i}`);
			if (!yourGenres){
				continue;
			}
			this.genres.push(yourGenres);
			i++;
		}
		while(i <= 3);
		
		this.genres.forEach((value, index) => {
			console.log(`Любимый жанр #${index + 1} - это ${value}`);
		});

		
	
	},
	rememberMyFilms: function rememberMyFilms(){
	
		let viewedFilm = "";
		let filmRating = "";
		let i = 0;
	
		do{
			viewedFilm = prompt("Один из последних просмотренных фильмов?","");
			if (!viewedFilm){
				continue;
			}
			filmRating = prompt("На сколько оцените его?","");
			if (!filmRating){
				continue;
			}
			personalMovieDB.movies[viewedFilm] = filmRating;
			i++;
		}
		while(i < 2);
	},
	detectPersonalLevel: function detectPersonalLevel(personalLevel){
		if (personalLevel < 10){
			console.log("Просмотрено довольно мало фильмов");
		} else if(personalLevel >=10 && personalLevel < 30 ){
			console.log("Вы классический зритель"); 
		} else if (personalLevel >=30){
			console.log("Вы киноман");
		} else {
			console.log("Произошла ошибка");
		}
	},
	showMyDB: function showMyDB(hidden){
		if (!hidden){
			console.log(this);
		}
	},
	toggleVisibleMyDB: function toggleVisibleMyDB() {
		if (this.privat == false) {
			this.privat = true;
		} else {
			this.privat = false;
		}
	}
};

personalMovieDB.writeYourGenres();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel(numderOfFilms);
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
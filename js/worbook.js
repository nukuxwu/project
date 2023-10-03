//Переменные 
// a = 15;
// console.log(a);

// let number = 5;
// const leftBorderWeith = 1;

// number = 10;
// console.log(number);    

// const obj = {
// 	a:50
// };

// obj.a = 10;

// console.log (obj);
// console.log(name);
// var name = "Chervyak";

// {
// 	var result = 50;
// }

// console.log(result);

// alert (5);
// [].push ("a");

// let userName = "John";
// let userNumber = 25;

// userNumber=24;

// console.log (userNumber,userName);

// let number = 4.6;

// console.log(-4/0);
// console.log("string"*9);

// const persone = "Chervyak";

// const bool = false;

// // console.log(something); null

// let und;
// console.log(und); undefined;

// const obj = {
// 	name:"Chervyak",
// 	age:25,
// 	isMarried: false
// };

// // console.log(obj.name);
// console.log(obj["name"]);

// let arr = ["plun.png", "red.jpg", 6,"apple.bmp"];
// console.log(arr[1]);

// Объекты и массивы

// const arr = ["a", "b", "c"];

// arr[10] = "1233";

// console.log(arr);

// const arrObj = {
//     a: "a",
//     "1": "b",
//     2: "c",
//     abc: {
//         df:[{}, {}],
//         def: {

//         }
//     }
// }

// const b = "b";

// // arrObj.b = "12434";
// arrObj["b"] = "12434";

// console.log(arrObj["b"]);
// console.log(arrObj.b);

// const obj = {
//     Chervyak:1000,
//     "Perchik":500
// };

// Общение с пользователем

// alert("Hello");

// const result = confirm("Are you hear?");
// console.log(result);

// const answer = prompt("Вам есть 18?", "18");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt("Как ваше имя?", "");
// answers[1] = prompt("Как ваша фамилия?", "");
// answers[3] = prompt("Сколько вам лет?", "");

// console.log(typeof(answers)); 
// console.log(typeof(null)); 

// Интерполяция

// const category = "toys";

// console.log(`https://someurl.com/${category}/5`);

// const user = "chervyak";

// alert (`Привет,${user}`);   

// Операторы

// console.log("arr" + " - object");
// console.log(4 + +"5");

// let incr = 10,
// 	decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2*4 === 8);

// console.log(2 + 2 * 2 === 8);

// console.log(2 + 2 * 2 != 8);

// const isCheked = false,
// 	isClose = false;
      
// console.log(isCheked || !isClose);

// Условия 

// if (4 == 9){
// 	console.log("OK!");
// } else {
// 	console.log("Erorr!");
// }

// const num = 50;

// if (num < 49){
// 	console.log("Erorr");
// } else if (num > 100){
// 	console.log("Много");
// } else {
// 	console.log("Ok");
// }

// (num === 50) ? console.log("Ok"): console.log("Erorr");

// const num = 5;

// switch(num){
//     case 49:
//         console.log("erorr");
//         break;  
//     case 100:
//         console.log("erorr");
//         break;
//     case 50:
//         console.log("Ok");
//         break;
//     default:
//         console.log("not now")
//         break;                         
// }
// Логические операторы

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
// 	console.log("я сыт");
// }

// console.log(hamburger && fries);


// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log((hamburger === 3 && cola && fries === 1));

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null &&  5);
// console.log(0 && "sadsadaf");

// if (hamburger === 3 && cola ===1 && fries === 1) {
// 	console.log("все сыты");
// } else {
//     console.log("мы уходим");
// }


// const hamburger = 0;
// const fries = 0;
// const cola = 0;


// if (hamburger || cola || fries) {
// 	console.log("все довольны");
// } else {
//     console.log("мы уходим");
// }

// console.log(hamburger || cola || fries);

// let johnReport, alexReport, samReport, mariaReport = "done";

// console.log(johnReport  || alexReport || samReport || mariaReport);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets === 1) {
// 	console.log("все довольны");
// } else {
//     console.log("мы уходим");
// }
// Циклы

// let num = 50;

// while(num < 55){
// 	console.log(num);
// 	num++;
// }

// do{
// 	console.log(num);
// 	num++;
// }
// while(num < 55);

// for(let i = 1; i < 8; i++){
// 	console.log(num);
// 	num++;
// }

// for(let i = 1; i < 10; i++){
// 	if(i === 6){
// 		break;
// 	}
// 	console.log(i);
// }

// for(let i = 1; i < 10; i++){
// 	if(i === 6){
// 		continue;
// 	}
// 	console.log(i);
// }

// Вложенные циклы

// for (let i = 0; i < 3; i++){
// 	console.log(i);
// 	for (let j = 0; j < 3; j++){
// 		console.log(j);
// 	}    
// }

// let result = "";
// const length = 7;

// for(let i = 1; i < length; i++){

// 	for( let j = 0; j < i; j++){
// 		result +="*";
// 	}

// 	result += "\n"; 
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++){
// 	console.log(`First level: ${i}`);
// 	for (let j = 0; j < 3; j++){
// 		console.log(`Second level: ${j}`);
// 	    for (let k = 0; k < 5; k++) {
// 			if (k === 2) break first;
// 			console.log(`Third level: ${k}`);
// 		}
// 	}  
// }

// Упражнения по циклам

// let num = 5;

// while (num < 11){
// 	console.log(num);
// 	num++;
// }

// for (let i = 20; i >= 10; i--){
// 	if (i === 13) 
// 		break;
// 	console.log(i);
    
// }

// for (let j = 2; j <= 10; j++ ){
// 	if (j % 2 === 0){
// 		console.log(j);
// 	}
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let num = 2;

// while (num <= 16){
//     if (num % 2 === 0) {
//         num++;
//         continue;
//     } else {
//         console.log(num);
//     }
//     num++;
// }



//     const arrayOfNumbers = [];

//     for ( let i = 5; i <= 10; i++){
//         arrayOfNumbers[i - 5] = i
//     }

//     console.log(arrayOfNumbers);

// Функции

// function showFirstMessage(text){
// 	console.log(text);
// }

// showFirstMessage("Hello world");

// let num = 20;

// function showFirstMessage(text){
// 	console.log(text);
// 	num = 10;
// 	console.log(num);
// }

// showFirstMessage("Hello world");
// console.log(num);


// let num = 20;

// function showFirstMessage(text){
// 	console.log(text);
// 	console.log(num);
// }

// showFirstMessage("Hello world");
// console.log(num);

// function calc(a, b){
// 	return(a + b);
// }

// console.log(calc(2, 7));
// console.log(calc(4, 8));
// console.log(calc(3, 9));

// function ret(){
// 	let num = 50;
// 	return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function(){
// 	console.log("Hello")
// };

// logger();

// const calc = (a, b) => {
// 	console.log("1");
// 	return a + b;
// };

// console.log(calc(2, 7));

// Аргументы функций

// const usdCurr = 28;

// function convert(amount, curr){
// 	console.log(curr * amount);
// }

// convert (500, usdCurr);


// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr){
// 	console.log(curr * amount);
// }

// convert (500, usdCurr);
// convert (500, eurCurr);



// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr){
// 	return curr * amount;
// }

// function promotion(result){
// 	console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);
// promotion(convert(500, usdCurr));

// function test(){
// 	for(let i = 0; i < 5; i++){
// 		console.log(i);
// 		if (i === 3) return;
// 	}
// 	console.log("Done");
// }

// test();
// function doNothing() {}
// console.log(doNothing() === undefined);

// Методы и свойства строк и чисел

// const arr = [1,2,3,4];

// console.log(arr.length);

// const str = "tESt";

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// const fruit = "Some fruit";

// console.log(fruit.indexOf("q"));

// const logg = "Hello world";

// console.log(logg.slice(6,11));(вырезает от указанного до указанного элемента)

// console.log(logg.slice(6));(вырезает с указанного элемента)

// console.log(logg.substring(6,11));(не использует отрицательные значения)

// console.log(logg.substr(6,5));(сколько символов необходимо вырезать)

// const num = 12.2;

// console.log(Math.round(num));(округление числа)

// const test = "12.2px";

// console.log(parseInt(test));(переводит число в другую систему исчисления)
// console.log(parseFloat(test));(переводит число либо строку в десятичное значение(переводит строку в число))

// Callback - функции

// function first(){
// 	// Do something
// 	setTimeout(function(){
// 		console.log(1);
// 	}, 600);
// }

// function second(){
// 	console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback){
// 	console.log(`Я учу: ${lang}`);
// 	callback();
// }


//// function done(){
//// 	console.log("Я прошел этот урок");
//// }

//// learnJS ("JavaScript", done);

// learnJS ("JavaScript", function() {
// 	console.log("Я прошел этот урок");
// });

// Объекты,деструктуризация объектов

// const options = {
// 	name: "test",
// 	width: 1024,
// 	height: 1024,
// 	colors: {
// 		border: "black",
// 		bg: "red"
// 	},
// 	makeTest: function(){
// 		console.log("test");
// 	}
// };

// console.log(options.name);

// delete options.name;

// console.log(options.colors.bg);

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);
// Получение ключей из объекта в массив +.length - получение количества элементов этого массива

// console.log(options);

// let counter = 0;

// for (let key in options){
// 	if (typeof(options[key]) === "object"){
// 		for (let i in options[key]){
// 			console.log(`Свойство ${i} имеет значение ${options[key][i]}`); => (options["colors"]["border"])		
// 			counter++;
// 		} 
// 	} else {
// 		console.log(`Свойство ${key} имеет значение ${options[key]}`);
// 		counter++;
// 	}
// }

// console.log(counter);

// Методы массивов и методы перебора массивов 

// const arr = [12, 24, 5, 8, 38];	
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b){
// 	return a - b;
// }

// arr.forEach(function (item, i, arr){
// 	console.log(`${i}: ${item} внутри массива ${arr}`);
// });


// arr[99] = 0; 
// console.log(arr.length);
// console.log(arr);

// const poped = arr.pop();(удаляет последний элемент массива и возращает его значение)

// arr.push(9);(добавляет заданный элемент в конец массива)

// console.log(arr);
// console.log(poped);

// for(let i = 0; i < arr.length; i++){
// 	console.log(arr[i]);
// }

// for (let value of arr){
// 	console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// console.log(products);

// console.log(products.join("; "));


// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));

//Передача данных по ссылке и по значению

// let a = 5,
// 	b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
// 	a: 5,
// 	b: 1
// };

// const copy = obj; //передача ссылки на существуюший объект

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj){
// 	let objCopy = {};

// 	let key;
// 	for(key in mainObj){
// 		objCopy[key] = mainObj[key];
// 	}

// 	return objCopy;
// }

// const numbers = {
// 	a: 2,
// 	b: 5,
// 	c:{
// 		x:7,
// 		y:4
// 	}
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
// 	d: 17,
// 	e: 20
// };

// console.log(Object.assign(numbers, add));
// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone); 

// const oldArr = ["a", "b", "c"];
// const newArr = oldArr.slice();

// newArr[1] = "asdasd"; 
// console.log(newArr);
// console.log(oldArr);

// const video = ["youtube", "vimeo", "rutube"],
// 	blogs = ["wordpress", "livejournal", "blogger"],
// 	internet = [...video, ...blogs, "instagram", "facebook"];

// console.log(internet);

// function log(a, b, c){
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }

// const num = [2, 4, 9];

// log(...num);

// const array = ["a", "b"];

// const newArray = [...array];

// const q = {
// 	one: 1,
// 	two: 2
// };

// const newObj = {...q};


// let str = "some";	
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// const soldier = {
// 	health: 400,
// 	armor: 100,
// 	sayHello: function() {
// 		console.log("Hello");
// 	}
// };

// const jonh = Object.create(soldier);

// // const jonh = {
// // health: 100
// // };

// // jonh.__proto__ = soldier;

// Object.setPrototypeOf(jonh, soldier);

// // console.log(jonh.armor); 
// jonh.sayHello();


// // To string

// // 1) 
// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

// // 2)
// console.log(typeof(5 + ""));

// const num = 5;

// console.log("https://instagram.com/catalog/" + num);

// const fontSize = 26 + "px";

// // To number

// // 1)
// console.log(typeof(Number("4")));

// // 2)
// console.log(typeof(+"5"));

// // 3)
// console.log(typeof(parseInt("15px", 10)));

// let answer = +prompt("Hello", "");

// // To boolean

// // 0, "", null, undefined, NaN;

// // 1)
// let switcher = null;

// if (switcher) {
// 	console.log("Working...");
// }

// switcher = 1;


// if (switcher) {
// 	console.log("Working...");
// }

// // 2
// console.log(typeof(Boolean("4")));

// // 3)
// console.log(typeof(!!"asdasd"));

// Задачи с собеседований на понимание основ 

// let x = 5;
// alert( x++ );
// 5

// console.log([ ] + false - null + true) ;
// NaN

// let y = 1; 
// let x = y = 2; 
// alert(x); 
// 2

// console.log([ ] + 1 + 2);
// 12

// alert( "1"[0] );
// 1

// console.log(2 && 1 && null && 0 && undefined);
// null
//"И" запинается на лжи 
 
// alert( null || 2 && 3 || 4 ); 
// "Или" запинается на правде

// const a = [1, 2, 3]; 
// const b = [1, 2, 3]; 

// console.log(a === b);
// false

// alert( +"Infinity" ); 
// Infinity (number)

// console.log("Ёжик" > "яблоко");
// false

// console.log(0 || "" || 2 || undefined || true || falsе );
// 2

// const box = document.getElementById("box");

// console.log(box);

// const btns = document.getElementsByTagName("button");

// console.log(btns[1]);

// const btns = document.getElementsByTagName("button")[1];

// console.log(btns);

// const circles = document.getElementsByClassName("circle");

// console.log(circles);

// const hearts = document.querySelectorAll(".heart");

// hearts.forEach(item => {
// 	console.log(item);
// });

// const oneHeart = document.querySelector(".heart");

// console.log(oneHeart);

// Действия с элементами на странице

// const box = document.getElementById("box"),	
// 	btns = document.getElementsByTagName("button"),	
// 	circles = document.getElementsByClassName("circle"),	
// 	hearts = document.querySelectorAll(".heart"),	
// 	oneHeart = document.querySelector(".heart"),
// 	wrapper = document.querySelector(".wrapper");

// box.style.backgroundColor = "blue";
// box.style.width = "500px";

// box.style.cssText = "background-color: purple; width: 350px";

// btns[1].style.borderRadius = "100%";
// circles[0].style.backgroundColor = "red";

// for (let i = 0; i < hearts.length; i++) {
// 	hearts[i].style.backgroundColor = "pink";
// }

// hearts.forEach(item => {
// item.style.backgroundColor = "pink";
// });

// const div = document.createElement("div");
// const text = document.createTextNode("Тут был я");

// div.classList.add("black");

// wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]); старый метод 

// circles[0].remove();

// wrapper.removeChild(hearts[1]); старый метод

// hearts[0].replaceWith(circles[0]);

// wrapper.replaceChild(circles[0], hearts[0]);

// div.innerHTML = "<h1>Hello world</h1>";

// div.textContent = "Hello";

// div.insertAdjacentHTML("afterend", "<h2>Hello</h2>");

// События и их обработчики 

// const btns = document.querySelectorAll("button"),
// 	overlay = document.querySelector(".overlay");

// btn.onclick = function() {
// 	alert("click");
// };

// btn.addEventListener("click", () => {
// 	alert("click");
// });


// btn.addEventListener("click", () => {
// 	alert("Second click");
// });

// btn.addEventListener("mouseenter", (e) => {
// 	console.log(e.target);
// 	e.target.remove();
// 	// console.log("click");
// });

// let i = 0;
// const deleteElement =  (e) => {
// 	console.log(e.target);
// 	i++;
// 	if (i == 1){
// 		btn.removeEventListener("click", deleteElement);
// 	}
// };

// btn.addEventListener("click", deleteElement);

// const deleteElement = (e) => {
// 	console.log(e.currentTarget);
// 	console.log(e.type);
// };

// btn.addEventListener("click", deleteElement);
// overlay.addEventListener("click", deleteElement);

// btns.forEach(btn => {
// 	btn.addEventListener("click", deleteElement, {once: true});
// });

// const link = document.querySelector("a");

// link.addEventListener("click", (event) => {
// 	event.preventDefault();

// 	console.log(event.target);
// });

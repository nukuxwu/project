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
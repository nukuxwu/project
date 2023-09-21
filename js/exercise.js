"use strict";

let totalSum = 0; 
for(let i = 1; i <= 100; i++){
	totalSum +=i;
}

console.log(totalSum);

function sayHello(name) {
	return `Привет, ${name}!`;
}

console.log(sayHello("Pisun"));

function returnNeighboringNumbers(num){
	return [num - 1, num, num + 1];
}

console.log(returnNeighboringNumbers(5));	



function getMathResult(num, times){
	if (typeof(times) !== "number" || times <= 0) {
		return num;
	} 
	let str ="";

	for(let i = 1; i <= times; i++){
		// console.log(`choto ${i}`);
		// console.log(`choto${str}`);
		if(i === times){
			str += `${num *i}`;
		} else {
			str = str + num * i + "---";
		}		
	}
	return str;
}
console.log(getMathResult(10, 5));	



function squareSum(num){
	return num.map(x => x ** 2).reduce((a, b) => a + b, 0);
}

const numbers = [1, 2, 4];
const result = squareSum(numbers);
console.log(result);

console.log(Math.pow(3, 3));

function trueNum (num){
	if(num % 2 === 0){
		return true;
	} else{
		return false;
	}

}

console.log(trueNum(7));

// Number.isInteger(a)(определяет является ли переданное значение целым числом)

function calculateVolumeAndArea(a){
	if(typeof(a) == "string" || a <= 0 ){
		// console.log("При вычеслении произошла ошибка");
		return "При вычеслении произошла ошибка";
	}else {
		// console.log(`Объем куба:${Math.pow(a,3)}`);
		// console.log(`Площадь всей поверхности:${Math.pow(a,2) * 6}`);
		return `Объем куба:${Math.pow(a,3)}, площадь всей поверхности:${Math.pow(a,2) * 6}`;
	} 
}

console.log(calculateVolumeAndArea(12.3));

function getCoupeNumber(seatNumber){
	if(typeof(seatNumber) == "string" || seatNumber < 0 || !Number.isInteger(seatNumber)){
		return "Ошибка. Проверьте правильность введенного номера места";
	} else if (seatNumber === 0 || seatNumber > 36){
		return "Таких мест в вагоне не существует";
	}
	if(seatNumber >= 1 && seatNumber <=36){
		const coupeNumber = Math.ceil(seatNumber / 4);
		return coupeNumber;
	}
}

console.log(getCoupeNumber(15));



function getTimeFromMinutes(minutes){
	if( minutes < 0 || !Number.isInteger(minutes)){
		console.log("Ошибка, проверьте данные");
		return "";
	}
	
	const hours = Math.round(minutes / 60); 
	let str_hours;

	if (hours >= 5 && hours <= 10) {
		str_hours = `${hours} часов`;
	} else if (hours === 1) {
		str_hours = `${hours} час`;
	} else if (hours > 1 && hours < 5) {
		str_hours = `${hours} часа`;
	}
	
	if (minutes >= 0 && minutes <= 600){
		console.log(`Это ${str_hours} и ${minutes % 60} минут`);
	} else {
		console.log("Слишком много времени");
	}

}

getTimeFromMinutes(564);

function findMaxNumber(a, b, c, d){
	if(typeof(a) !== "number" ||
	typeof(b) !== "number" ||
	typeof(c) !== "number" ||
	typeof(d) !== "number"){
		return 0;
	}else {
		return Math.max(a, b, c, d);
	}	
}

console.log(findMaxNumber(4, 7.1, 7, 5));

function fib(n){
	if(typeof(n) == "string" || !Number.isInteger(n)){
		return "";
	}

	const  fibonacciSequence = [0,1] ;

	for (let i = 2; i < n; i++){
		const nextFibonacci = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
		fibonacciSequence.push(nextFibonacci);
	}

	return fibonacciSequence.join(" ");
} 

const n = 5;
const fibNumbers = fib(n);

console.log(fibNumbers);
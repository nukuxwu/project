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
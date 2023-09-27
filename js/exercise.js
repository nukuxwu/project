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

const n = 7;
const fibNumbers = fib(n);

console.log(fibNumbers);


const personalPlanPeter = {
	name: "Peter",
	age: "29",
	skills: {
		languages: ["ru", "eng", "de", "fr"],
		programmingLangs: {
			js: "20%",
			php: "10%",
			java: "50%"
		},
		exp: "1 month"
	},
	showAgeAndLangs: function(plan){
		const {age} = plan;
		const {languages} = plan.skills;
		let str = `Мне ${age} и я владею языками: `;

		languages.forEach(function(lang){
			str += `${lang.toUpperCase()} `;
		});
		return str;
	}
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan){
	const {exp} = plan.skills;
	return exp;
}	

showExperience(personalPlanPeter);

function showProgrammingLangs(plan){
	let str = "";
	const {programmingLangs} = plan.skills;
	for ( let key in programmingLangs){
		str += `Язык ${key} изучен на ${programmingLangs[key]}\n`; 
	}

	return str;

}

console.log(showProgrammingLangs(personalPlanPeter));

const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {

	if(arr.length == 0){
		return "Семья пуста";
	}

	let str = "Семья состоит из: ";

	for (let i = 0; i < arr.length; i++){
		str += `${arr[i]} `;
	}

	return str;
}

console.log(showFamily(family));

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
	return arr.forEach(value =>{
		console.log(value.toLowerCase());
	});
}

standardizeStrings(favoriteCities);	

const someString = "This is some strange string";

function reverse(str) {
	let new_str = str.split("").reverse().join("");
	console.log(new_str);
}

reverse(someString);

const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "CNY"];

function availableCurr(arr, missingCurr) {
	let str = "Доступные валюты: \n";
	
	if(arr.length === 0){
		return "Нет доступных валют";
	}

	for(let i = 0; i < arr.length; i++){
		if (arr[i] == missingCurr){
			continue;
		}
		str += `${arr[i]}\n`;
	}
	return str;
}

console.log(availableCurr(baseCurrencies.concat(additionalCurrencies), "CNY"));
// availableCurr([...baseCurrencies, ...additionalCurrencies], "CNY");

const shoppingMallData = {
	shops: [
		{
			width: 10,
			length: 5
		},
		{
			width: 15,
			length: 7
		},
		{
			width: 20,
			length: 5
		},
		{
			width: 8,
			length: 10
		}
	],
	height: 5,
	moneyPer1m3: 30,
	budget: 40000,
	isBudgetEnough: function isBudgetEnough(){
		// this.shops.forEach( value => {
		// 	const area = value.width * value.length;
		// 	console.log(area);
		// });

		// let sum = 0;

		// this.shops.forEach( value => {
		// 	sum += value.length * value.width;
		// });
		// console.log(sum);

		// let totalVolume = 0;

		// this.shops.forEach( value => {
		// 	const area = value.length * value.width;
		// 	const shopVolume = area * this.height;
		// 	totalVolume += shopVolume;
		// });

		
		let actualBudget = 0;

		this.shops.forEach( value => {
			const area = value.length * value.width;
			const shopVolume = area * this.height;
			const shopsBudget = shopVolume * this.moneyPer1m3;
			actualBudget += shopsBudget;
		});

		if (actualBudget <= this.budget){
			console.log("Бюджета достаточно");
		} else {
			console.log("Бюджета недостаточно");
		}

	}
};

shoppingMallData.isBudgetEnough();

const students = ["Peter", "Andrew", "Ann", "Mark", "Josh", "Sandra", "Cris", "Bernard", "Takesi", "Sam" ];

function sortStudentsByGroups(arr) {
	arr.sort();
	const a = [], b = [], c = [], rest = []; 	

	for (let i = 0; i < arr.length; i++){
		if(i < 3){
			a.push(arr[i]);
		} else if (i < 6){
			b.push(arr[i]);
		} else if (i < 9){
			c.push(arr[i]);
		} else {
			rest.push(arr[i]);
		}
	} 

	return [a, b, c, `Оставшиевся студенты: ${rest.length === 0 ? "-" : rest.join(", ")}`];

}
	
console.log(sortStudentsByGroups(students));

const restorantData = {
	menu: [
		{
			name: "Salad Caesar",
			price: "10$"
		},
		{
			name: "Pizza Diavola",
			price: "9$"
		},
		{
			name: "Beefsteak",
			price: "17$"
		},
		{
			name: "Napoleon",
			price: "7$"
		}
	],
	waitors: [
		{name: "Alice", age: 22}, {name: "John", age: 24}
	],
	averageLunchPrice: "20$",
	openNow: false
};

function isOpen(prop) {
	let answer = "";
	prop ? answer = "Закрыто" : answer = "Открыто";

	return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
	if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0,-1)) {
		return "Цена ниже средней";
	} else {
		return "Цена выше средней";
	}
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
	const copy = Object.assign({}, data);

	copy.waitors = [{name: "Mike", age: 32}];
	return copy;
}

console.log(transferWaitors(restorantData));
console.log(restorantData);
'use strict';

// Затримки

// 1. Напишіть функцію, яка приймає рядок і виводить його в консоль затримкою у 2 секунди.
// let str =
// 	'Напишіть функцію, яка приймає рядок і виводить його в консоль затримкою у 2 секунди.';
// let outputString = str => str;
// setTimeout(() => {
// 	console.log(outputString(str));
// }, 2000);

// 2. Створіть таймер, який відлічує час у зворотному напрямку від 10 до 0. Виведіть кожне число затримкою у 1 секунду.
// let timer = () => {
// 	for (let i = 10; i >= 0; i--) {
// 		setTimeout(() => {
// 			console.log(i);
// 		}, (10 - i) * 1000);
// 	}
// };
// timer();

// 3. Створіть функцію, яка випадковим чином виводить одне з трьох повідомлень в консоль кожні 2 секунди.

let massages = ['один', 'два', 'три'];

let randomMessage = massages => {
	setInterval(() => {
		let randomIndex = Math.floor(Math.random() * massages.length);
		console.log(massages[randomIndex]);
	}, 2000);
};
randomMessage(massages);

// 4. Всі завдання зі статті: https://uk.javascript.info/settimeout-setinterval

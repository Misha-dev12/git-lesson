'use strict';

// Затримки

// 1. Напишіть функцію, яка приймає рядок і виводить його в консоль затримкою у 2 секунди.
let str =
	'Напишіть функцію, яка приймає рядок і виводить його в консоль затримкою у 2 секунди.';
let outputString = str => {
	return str;
};
setTimeout(() => {
	console.log(outputString(str));
}, 2000);

// 2. Створіть таймер, який відлічує час у зворотному напрямку від 10 до 0. Виведіть кожне число затримкою у 1 секунду.
// 3. Створіть функцію, яка випадковим чином виводить одне з трьох повідомлень в консоль кожні 2 секунди.
// 4. Всі завдання зі статті: https://uk.javascript.info/settimeout-setinterval

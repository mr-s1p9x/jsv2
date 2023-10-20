// Массивы
const role1 = 'admin';
const role2 = 'user';
const role3 = 'superuser';

// Объявляем некую константу, в которую помещаем массив строк наших пользователей (их роли)
const roles = ['admin', 'user', 'superuser'];
const userInfo = ['Anna', 25]; // Массив с объектами различных типов
console.log(roles);
console.log(roles[0]); // Вызываем 0 элемент массива - admin

console.log(roles.length); // Вычисляем длину массива
console.log(roles[roles.length - 1]); // Не зная длины массива, можем получить последний из его элементов


// Как же получить последний элемент более современным синтаксисом
console.log(roles.at(0)); // Синтаксис вышел недавно, поддерживается не всеми браузерами 
console.log(roles.at(-1)); // Последний элемент массива

const usersAge = [2040 - 2023, 10 > 0 ? 5 : 0];
console.log(usersAge);

// Еще один пример синтаксиса
const userNames = new Array('Вася', 'Петя', 'Катя');
console.log(userNames);

// А как же нам оперировать этими массивами? 
function square(el) {
    return el * el;
}
console.log(square(5));
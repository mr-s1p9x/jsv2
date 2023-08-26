// Типы данных

/* Все данные в JS делятся на 2 типа, это:
- Объекты
    const user = {
        name: 'Vasia',
        age: 18
    }

- Примитивы
    const age = 18
*/

// Примитивные типы
const age_2 = 18; // числа
const surname = 'Ivanov'; // строки
const isAdmin = true; // true / false
const isAdmin2 = undefined; // не заданное значение
let data; // не заданное значение

let data2 = null; // пустое значение
const admin = Symbol('Admin'); // уникальное неизменное значение
const big = BigInt(999999999999999); // Работа с большими числами

// Практика
let a23 = 5;
let b23 = 5.6;
console.log(typeof(a23)); // спец оператор, который позволяет вывести тип данных переменной (number)
a23 = 'строка';
console.log(typeof(a23));

let isAdmin3 = false;
console.log(typeof(isAdmin3));


// undefined
let k; // на моменте первичного объявления - это будет undefined
console.log(typeof k); // undefined
// Когда мы уже присвоим значение - тогда выведется нужный тип данных
k = 5;
console.log(typeof k); // number

// null
// если undefined - это явно то, что мы не задали,
// то null - это пустота, ничего (черная дыра)
let j = null; 
console.log(typeof(j)); // object
// Самое интересное при выводе типа данных - будет object
// Ибо примитивного типа null как такового не существует, это объект
// Но в некоторых случаях о не будет объектом, но при выводе typeof - это объект
console.log(j == null); // true









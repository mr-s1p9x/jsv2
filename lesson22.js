// Операторы равенства

/* 
Тройное равенство определяет и тип, и значение
В то время как двойное - только значение.

*/

const secretNumber = '7';
/* Если мы, например, заменим число 7 строкой, 
то будет выполняться только 1 условие, не строгое.
Либо же взять и привести строку к числу: Number(secretNumber) */


if (secretNumber == 7) {
    console.log('Угадал не строго');
}

if (secretNumber === 7) {
    console.log('Угадал строго');
}

// Хорошее правило - не использовать строгое равно. От него зачастую больше вреда.

// Также можно сделать проверку на ввод
// const q = prompt('Введите число: ');
// if (q == 7) {
//     console.log('Угадал не строго');
// } else {
//     console.log('Не угадал');
// }

/* 
Пример выше всегда возвращает строку. 
Поэтому при строгой проверке
обзятально нужно возводить строку к числу
*/



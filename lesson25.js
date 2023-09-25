/*
    Методом prompt получите ответ пользователя 
    на вопрос "Сколько будет 7 + или - 15?". Если ответ верен
    выведите в консоли "Успех", если нет - "Вы робот!",
    а если он введет "Я не робот", то тоже "Успех".
*/

// Мое решение
// let res;
// let final;
// res = (prompt('Сколько будет 7 + или - 15? '));

// if (res == 22 || res == -8) {
//     final = 'Успех!';
// } else if (res === 'Я не робот') {
//     final = 'Успех!';
// } else {
//     final = 'Вы робот!';
// }

// console.log(final);

// Решение преподавателя
// const res = prompt('Сколько будет 7 + или - 15?');
// switch(true) {
//     case res === 'Я не робот':
//     case Number(res) === 22:
//     case Number(res) === -8:
//         console.log('Успех!');
//         break;
//     default:
//         console.log('Вы робот!');
// }

// Альтернативный вариант:
// if (res === 'Я не робот') {
//     console.log('Успех!');
// } else {
//     const resNum = Number(res);
//     switch(resNum) {
//         case 22:
//         case -8:
//             console.log('Успех!');
//             break;
//         default:
//             console.log('Вы робот!');
//     }
// }
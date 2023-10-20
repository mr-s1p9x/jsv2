/*
    Пользователь:
    - Возраст
    - Наличие работы
    - Деньги
    
    Нужно проверить может ли он купить новый MacBook за 2000$?
    Он может брать не только свои деньги, но и взять кредит.
    Ему дадут 500$, только если ему больше 24-х лет и он
    имеет работу, 100$ если ему просто больше 24-х лет и 0 в 
    ином случае.
    Напишите функцию, которая принимает данные пользователя
    и товара и возвращает true или false;
    test test
    // test// test
*/

// // Проверка возраста
// function userAge (age) {
//     if (age > 24) {
//         return true;
//     } else
//         return false;
// }

// // Проверка работы
// function hasJob (job) {
//     if (job === 1) {
//         return true;
//     } else
//         return false;
// }

// // Проверка денег
// function hasMoney (money) {
//     if (money >= 2000) {
//         return true;
//     } else
//         return false;
// }

// // Основная функция
// function mainT (age, job, money) {
//     let aage = userAge (age);
//     let jjob = hasJob (job);
//     let mmoney = hasMoney (money);

//     if (mmoney === true) {
//         console.log('Congrats! You have enough money and you can buy a new MacBook!');
//     } else {
//         console.log(`Sorry, but you ${2000 - money}$ short.`);
//         console.log(`Lets check, maybee we can figure out something....

//         * If your age is over 24, and you have a job: we can offer you 500$ loan.
//         * If your age is over 24, and you DO NOT have a job: we can offer only 100$ loan.
//         * If you under 24: we cannot offer you a loan.`);

//         if (aage === true && (jjob === true || jjob === false)) {
//             console.log(`You can get a loan within ${jjob ? 500 : 100}$`);
//         } else {
//             console.log(`Sorry, we cannot offer you a loan. Your age is only ${age}. Try within ${25 - age} year(s).`)
//         }
//     }
// }
// // Вызов функции
// mainT(25, 1, 12000);


// Решение преподавателя

function computerCredit(age, hasJob = false) { // если hasJob мы не передали, то по умолчанию будет false
    switch(true) {
        case age > 24 && hasJob:
            return 500;
        case age > 24:
            return 100;
        default:
            return 0;
    }
}

function canBuy1(productPrice, age, money, hasJob = false) { 
    /* Лучше всего дефолтное значение ставить в конце. 
    И лучше в каждой функции использовать его, тк мы наверняка не знаем, 
    где будет использоваться наш computerCredit */
    const creditMoney = computerCredit(age, hasJob);
    return productPrice <= money + creditMoney;
}

// Вызываем основную функцию
console.log(canBuy1(2000, 25, 1500, true));

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
*/



 //console.log(userStat(25, 0));

function userMoney (money) {
    if (money > 2000) {
        return console.log(`You can buy a MacBook!`)
    }
    return console.log(`Sorry. Not enough money to buy a Macbook. You are missing ${2000 - money} $`)
}


function userStat (usrAge, hasJob) {
    if (usrAge > 24 && (hasJob === 1 || hasJob === 0)) { // 1 - есть работа, 0 - нет работы
        return console.log (true, `Your age is ${usrAge}. And you can get a loan within ${hasJob ? 500 : 100} $`);
    } 
     return console.log(false, `Sorry, your age is ${age}. It is under 24. You cannot get a loan`);
}















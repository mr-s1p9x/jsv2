// Введение в функции
// function logName() {
//     console.log(`Мое имя Артем`);
// }

// const ax = logName(); // Вызов функции
// console.log(typeof ax);
// В данном случае у нас будет undefined
// Мы присвоили тип а, и он у нас undefined

// Мы можем несколько раз вызывать одну и ту же функцию


// Теперь немного усложним нашу функцию
function logName(name, surname) { // Функция будет передавать имя и фамилию
    console.log(`Мое имя ${name}, ${surname}`);
}

logName('Артем', 'Бурдыга'); // Вызываем функцию и передаем параметры 


// Функция расчета депозита
function countDepositSum(depositInUSD, month, rate) {
    const sum = depositInUSD * (1 + rate / 12) ** month;
    return sum;
    // return depositInUSD * (1 + rate / 12) ** month; // более сокращенный пример
}

const example1 = countDepositSum(1000, 24, 0.12);
console.log(example1);

const example2 = countDepositSum(1000, 48, 0.10);
console.log(example2);
// console.log(countDepositSum(1000, 48, 0.10)); // более сокращенный пример

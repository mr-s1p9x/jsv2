// Упрощение функции

/* Переписать функцию в стрелочную */

function toPower(num, power) {
    const res = num ** power;
    return res;
}

console.log(toPower(2, 3)); // 8

// В строчной функции return можно вызывать, в случае если мы не делаем код блоком
const toPowerArrow = (num, p0wer) => num ** p0wer;
console.log(toPowerArrow(2, 3));


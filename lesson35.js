// Параметры по умолчанию

function powerDe (num, power) {
    const power2 = power ?? 2; // Если мы не указали по какой-то из причин power - по умолчанию будет 2
    // power = power ?? 2 // куда более короткий аналог
    const res = num ** power2;
    return res;
}

// Значения по умолчанию можно записывать сразу в аргументах функции:
function powerDe2 (num, power = 2) {
    return num ** power;
}

// Если будет момент, что мы опечатаемся, передав только 1 аргумент - мы получим NaN
console.log(powerDe(2, 3));
console.log(powerDe(2)); // NaN ; сюда по умолчанию проставится 2, если не задали power, и того будет 4

console.log(powerDe2(2));
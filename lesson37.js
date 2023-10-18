// Функции внутри функции
// test

const KG_IN_USD = 7;
const KM_IN_USD = 5;

// Функция (шаблон) расчета веса подарка. За один кг = 7 $
function calculateWeight(present) {
    return present * KG_IN_USD;
}

// Функция (шаблон) расчета расстояния доставки. За один км = 5$
function calculateKm(distance) {
    return distance * KM_IN_USD;
}

// Основаня функция
function getExchangePrice(present1, present2, distance) {
    const price1 = calculateWeight(present1); // подарок 1, вес
    const price2 = calculateWeight(present2); // подарок 2, вес
    const distancePrice = calculateKm(distance); // расчет расстояния
    return price1 + price2 + distancePrice; // цена цена подарка 1, 2 + цена за расстояние
}

console.log(getExchangePrice(3, 4, 10)) // Вывод

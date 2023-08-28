// Шаблонные строки
const projectName = 'сайт магазина:';
const price = 2000;
const author = 'Василий';

const template = author + ' заказал ' + projectName + ' по цене ' + price + '$';
console.log(template);

//Пример шаблонной строки. Позволяет встроить какую-то динамическую часть переменной шаблоном
const template2 = `${author} заказал ${projectName} по цене ${price}$`
console.log(template2);
// Строка получилась короче, очень удобно и пробелы ставить удобнее

// \n позволяет переносить содержимое на новую строку
const template3 = 'Проект \n' + 'Цена: ' + price + '$';
console.log(template3);

// Перенос с помощью шаблонов
const template4 = `Проект
Цена: ${price}$`;
console.log(template4);
// Все тоже самое, что и template3, но намного работает намного удобнее
// Каждый отступ будет полноценным, учитывается любой символ

// Практикуюсь

const car = 'Nissan Skyline R32';
const car2 = 'Toyota AE86 Trueno';
const car3 = 'Delorian';
const car4 = 'Nissan 180SX';

const carValue = '6000';
const carValue2 = '3000';
const carValue3 = '2500';
const carValue4 = '4500';

const market = `1. Price for ${car} is ${carValue}$
2. Price for ${car2} is ${carValue2}$
3. Price for ${car3} is ${carValue3}$
4. Price for ${car4} is ${carValue4}$`
console.log(market);


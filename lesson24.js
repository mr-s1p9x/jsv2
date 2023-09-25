// Тернарные операторы

const bmwX3Price = 100000;
const fordFocusPrice = 10000;
const nissanJukePrice = 15000;

const budget = 120000;
let message;

if (budget > bmwX3Price) {
     message = 'BMW';
} else if (budget > nissanJukePrice) {
     message = 'Nissan Juke';
} else {
     message = 'Ford Focus';
}

console.log(`I want buy a ${message}`);

// Но есть еще более краткая запись подобных ситуаций
// С помощью тернарных операторов
15 > 2 ? console.log('Больше 2') : console.log('Не больше');
/* Равносильно:

   if (15 > 2) {
    console.log('Больше 2');
 } else {
    console.log('Не больше');
 }
 
*/

console.log(`I want buy a ${budget >= bmwX3Price ? 'BMW' : 'Ford Focus'}`);

// Мы можем унаследовать тернарные операторы, вкладывая их друг в друга
let message2 = budget >= bmwX3Price 
? 'BMW' : budget >= nissanJukePrice 
? 'Nissan Juke' : budget >= fordFocusPrice ? 'Ford Focus' : 'Велосипед';

// Но лучше не злоупотреблять вложенными тернарными операторами, т.к их тяжело воспринимать, если несколько условий - да
// Но если больше - будет тяжко

let message3 = budget > bmwX3Price ? 'BMW' : 'Велосипед';
console.log(message3);
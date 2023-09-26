// Операторы с другими типами

console.log('Вася' || 'Олег');
console.log(false || 'Олег');
console.log('Вася' || false);
console.log(false || false);

console.log('Вася' && 'Олег');
console.log(false && 'Олег');
console.log('Вася' && false);
console.log(false && false);

/* В данном случае, если мы пропишем или usr или 'Петя', то 
выполнится 'Петя', т.к usr не содержит значения.
Но, если мы зададим значение usr, то выведется usr */
let usr = 'Джон';
const username = usr || 'Петя';
console.log(username);

// Небольшой пример простой проверки
// при И если true - будет выводиться имя файла, если false - выведется false
const isAdminD = true;
const filename = isAdminD && 'file.mp4';
console.log(filename);


// Управление массивами
const users = ['Аня', 'Вика', 'Катя'];
console.log(users);

// Например, нам нужно кого-то заменить на кого-то
users[2] = 'Кристина';
console.log(users);

// Добавление пользователей в массив
const arrLenght = users.push('Никита'); // Грубо говоря с push добавляем элемент массива, не определяя его длину
console.log(users);
// На случай же, если нам нужно сразу же получить длину нашего массива
// Мы используем отдельную переменную, например константу
console.log(arrLenght);

users.unshift('Вася'); // Добавляет элемент в начало массива, смещая индексы остальных
console.log('Смещенные индексы из-за unshift:', users);

// Удаление пользователей из массива
users.pop([3]); // Если не указать индекс - он удалит последний
console.log(users);

const el = users.pop(); /* В отличии от примера с длиной массива выше, 
pop в данном случае возвращает удаленный элемент массива */
console.log(el); // Видим удаленный элемент 'Кристина'
console.log(users); // Вывод юзеров уже без элемента 'Кристина'

const el2 = users.shift(); // Удаляет первый индекс массива
console.log(el2); // Выводим удаленный индекс массива 'Вася'
console.log(users); // Вывод списка пользователей без индекса 'Вася'
// False из других типов
// Частые случаи конвертации чего-то в true или false
console.log(Boolean(0));
console.log(Boolean(''));

// Конвертация явно не заданной переменной (undefined) - будет false
let ba;
console.log(Boolean(ba)); // false

console.log(Boolean(null)); // тоже всегда будет давать false
console.log(Boolean(Number('sx'))); // Boolean от числа и строки
// Сначала будет преобразование строки к числу, далее в булев тип 

/* Пример по шагам из строки выше
Т.е сначала мы преобразовываем строку к числу - получаем Not a Number
Далее NaN приводим к булеву типу данных и получаем false */
let gj = 'sx';
kk = console.log(Number('sx')); // NaN
console.log(Boolean(kk));

/* Основыне случаи, когда мы будем получать false при той или иной проверке:
0, пустая строка, undefined и NaN */
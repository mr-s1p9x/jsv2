// Оператор нулевого слияния

let usernameD = 'Вася';
console.log(usernameD || 'Default Username');

// Пример с нулевым оператором ??
// Например, у нас есть строка, в которой ничего не задано,
// и нам нужно вывести именно ту пустую строку, не прибегая к параметру Default
// Использоуем оператор нулевого слияния ??
let usernmaeDD = ''; // та самая пустая строка
console.log(usernmaeDD ?? 'Default Username_m');
// Если usernameDD null или undefined - окей, выводим Default Username_m
// Если же просто '' - выводим 'пустоту'

// Это используется для корректного определения null и undefined
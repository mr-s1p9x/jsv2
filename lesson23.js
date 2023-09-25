// Switch

const role = 'manager';

// if (role === 'manager') {
//     console.log('Manager');
// } else if (role === 'admin') {
//     console.log('Admin');
// } else if (role === 'seo') {
//     console.log('SEO');
// } else {
//     console.log('Unauthorized user');
// }

// Пример switch стейтмента
// В switch кейсах всегда строгое равенство ===
// Если строка будет числом - кейс не сработает
// Важным аспектом также будет ставить break, чтобы сразу завершать кейс после совпадения
// Также есть кейс default, который отработает, если нет точного совпадения
switch (role) {
    case 'manager': // role === 'manager'
        console.log('Manager');
        break;
    case 'admin': // role === 'admin'
        console.log('Admin');
        break;
    case 'ceo':
        console.log('CEO');
        break;
    default:
        console.log('Unauthorized user!');
}

/* 
Такие кейсы встречаются, со стройко manager,
например, если нам нужно вывести что-то специфическое,
не останавливаясь, прописав break, и выполнить условия дальше
*/
switch (role) {
    case 'manager':
        console.log('Manager')
    case 'admin':
        console.log('Not a supervisor');
        break;
    case 'ceo':
        console.log('Supervisor');
        break;
    default:
        console.log('Unauthorized user!');
}


// Пример проверки числа на положительное или отрицательное, итд
const num = 1;

switch(true) {
    case num > 0: // true === num > 0
        console.log('Positive number');
        break;
    case num < 0: // true === num < 0
        console.log('Negative number');
    default: // true === num === 0
        console.log('Zero!');
}
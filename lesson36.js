
// return'ов может быть несколько в функции, и не обязательно в конце
let ag9; // = prompt ('Enter your age: ');

function canAccessWebsite(ag9) {
    // Первый вариант
    // if (ag9 < 18) {
    //     return false;
    // } else {
    //     return true;
    // }

    // Мой вариант
    return ag9 > 18 ? 'You are allowed to use this site' : 'Sorry. You are not allowed to use this site';

    // Еще один вариант
    // if (ag9 < 18) {
    //     return false;
    // }
    // return true;
}
console.log(canAccessWebsite(ag9));
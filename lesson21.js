/*
    Упражнение - Размещение депозита
    
    Вася положил 12 000$ на вклад 7% годовых с 
    капитализацией 1 раз в месяц.
    Вывести в консоль, сможет ли он купить дом за 13 500$
    через 2 года после снятия вклада. И остаток после покупки.

    Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах
*/

const deposit = 12000;
const rate = 0.07; // фактически 7% годовых
const period = 24;
const houseCost = 13500;

finalSum = deposit * (1 + rate / 12) ** period; // делим на 12, т.к возводим 7% за год

if (finalSum > houseCost) {
    console.log(`You earn: ${deposit}\nCan buy house.\nRest of the deposit ${finalSum - houseCost}`)
} else {
    console.log(`Not enough money to buy a house.\nHouse cost: ${houseCost},\nYour deposit: ${finalSum}`)
}
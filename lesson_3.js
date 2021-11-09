"use strict";

// Задание №1 ===================================================>


// Функция, для нахождения простых чисел, в промежутке о 2 до 100

function arrSimpleNumber(){
let arrSim = [2];  // Изначальное значение в массиве
let num = 3;       // Значение, с которого мы начинаем обход

for(num; num <= 100; num++){
if(simpleCheck(num, arrSim)){ // функция в if вернет либо true либо false
arrSim.push(num);
}
}
return arrSim;
}

function simpleCheck(n, arr) {
    let mark = true;

    arr.forEach(elm => {
    if(!(n % elm)) mark = false;
    })
    return mark;
}

console.log(arrSimpleNumber());


// Задание №2 / 3 ===================================================>

/*

function getCounts(arr) {        // Функция, которая будет считать общее количество товара в корзине
    let totalCount = 0;
    for (let q of arr) {
        totalCount += Number(q.count);
    }
    return totalCount;
}

function getPrice(arr) {   // Функция, которая будет считать общюю сумму товара в корзине
    let totalPrice = 0;
    for (let q of arr) {
        totalPrice += Number(q.price);
    }
    return totalPrice;
}

function countBasketPrice(pr, cou) {  // Функция, которая суммирует количество товаров и их стоимость
    console.log('Общее количество товаров в корзине: ' + cou);

    return console.log('Сумма заказа: ' + cou * pr + " $");
}

let goods = [
    {
        title: "Товар 1",
        price: 100,
        count: 1
    },
    {
        title: "Товар 2",
        price: 200,
        count: 2
    },
    {
        title: "Товар 3",
        price: 300,
        count: 3
    },
    {
        title: "Товар 4",
        price: 400,
        count: 4
    }
]


let totalCheck = countBasketPrice(getPrice(goods), getCounts(goods));


*/


// Задание №4 ===================================================>


/*
4.Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.

for (let i = 0; i <= 9; console.log(i++));
*/


// Задание №5 ===================================================>


/*
5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

function createPir(num) {
    let pir = "";
    for (let i = 1; i <= num; ++i) {
        for (let q = 1; q <= i; ++q) {
            pir += "*";
        }
        console.log(pir);
        pir = "";
    }
}
createPir(20);

*/
/*
for (let num = 0; num <= 100; num++) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}
*/
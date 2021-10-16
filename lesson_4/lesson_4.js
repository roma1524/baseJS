"use strict";

// ======================================  Задание № 1 ================================================>

/*
function transformation() { // Функция принимает число от 0 до 999 и сортирует сотни/десятки/единицы
    let askNum = prompt("Введите число от 0 до 999");  // запрашивает у пользователя число
    let numbers = {};
    if (askNum < 0 || askNum > 999 || isNaN(askNum)) { // сравнивает корректность вводимых пользователем данных
        alert('Вы ввели недопустимое значение!');
        console.log(numbers);
        console.log("Не сдавайся бро, я в тебя верю!:)")
    } else {
        if (askNum[0] && askNum[1] && askNum[2]) {   // Если в каждый индекс даёт true, добавляет в объект
            numbers.num_100 = ("Сотни : " + askNum[0]);
            numbers.num_10 = ("Десятки " + askNum[1]);
            numbers.num_1 = ("Единицы " + askNum[2]);
        } else if (askNum[0] && askNum[1]) {
            numbers.num_10 = ("Десятки " + askNum[0]);
            numbers.num_1 = ("Единицы " + askNum[1]);
        } else {
            numbers.num_1 = ("Единицы " + askNum[0]);
        }
        console.log(numbers);
    }
    return numbers;
}
transformation(); */





/* Пример ниже, я сделал для практики, он взят с разбора ДЗ.
 Интересно то, что если в вводимом числе, написать "2в1", то функция добавит такой ввод в obj, а пример выше - нет, там есть проверка каждого индекса на true.
 */


/* let lis = prompt("Введите число о 0 до 999");
let los = lis.length;
let obj = {};


function transf(num) {
    if ((lis <= 0 || lis >= 999) || (isNaN(parseInt(lis)))) {
        alert("Число " + lis + " некорректное")
    } else {
        switch (los) {
            case 3:
                obj.hun = lis[0],
                    obj.ten = lis[1],
                    obj.unit = lis[2]
                break;
            case 2:
                obj.ten = lis[0],
                    obj.unit = lis[1]
                break;
            case 1:
                obj.unit = lis[0]
                break;
        }
        console.log(obj);
    }
    return obj;
}

transf(los); */

// Еще один пример для усвоения. Но он тоже ведёт себя не корректно, если ввести "1у3".

/* let obj = {};

let num = parseInt(prompt('введите число от 0 до 999'));

function cutNum() {
    if (num > 0 && num < 1000) {
        obj.ed = num % 10;
        obj.dec = Math.floor(num / 10 % 10);
        obj.hund = Math.floor(num / 100);
        return obj;
    } else {
        console.log("Введены некорректные данные");
    }
}
cutNum();
console.log(obj); */


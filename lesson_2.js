"use strict";

/*

// Задание №1 ===================================================>

var a = 1, b = 1, c, d;
c = ++a; alert(c);            // 2      префиксный инкремент, к тому же переменной "а" присвоено значение "1"
d = b++; alert(d);            // 1      переменной d, присваеваится значение переменной b, к тому же постфиксный инкремент, который не отработает при первом вызове alert.
c = (2 + ++a); alert(c);      // 5      переменная "а" была переопределена в переменной "с" (первый alert)
d = (2 + b++); alert(d);      // 4      переменная "b" была переопределена в переменной "d" (второй alert)
alert(a);                    // 3       перевенная "а" переопределена итерациями
alert(b);                    // 3       перевенная "b" переопределена итерациями

// Задание №2 ===================================================>

var a = 2;
var x = 1 + (a *= 2);
// Переменная "х" будет равна 5, потому как, в переменной "x" переменную "а" умножают на 2. (а *= 2)

// Задание №3 ===================================================>


let a = Number((Math.random() * 100).toFixed() - (Math.random() * 100).toFixed());
let b = Number((Math.random() * 100).toFixed() - (Math.random() * 100).toFixed());
let result = 0;
let multiplication = 0;
let sum = 0;

if (a > 0 && b > 0) {    // Тут правильнее наверное было бы добавить сравние большего из чисел, и от большего вычетать меньшее, чтобы итог был более правильным...
    result = a - b;
    console.log(result);
} else if (a < 0 && b < 0) {
    multiplication = a * b;
    console.log(multiplication);
} else if (a < 0 && b >= 0 || a >= 0 && b < 0) {
    sum = a + b;
    console.log(sum);
} else {
    alert('Что-то пошло не так');
}

// Задание №4 ===================================================>


let a = +prompt('Введите число от 0 до 15');
switch (a) {
    case 1:
        console.log('Переменная "а" равна : 1');
    case 2:
        console.log('Переменная "а" равна : 2');
    case 3:
        console.log('Переменная "а" равна : 3');
    case 4:
        console.log('Переменная "а" равна : 4');
    case 5:
        console.log('Переменная "а" равна : 5');
    case 6:
        console.log('Переменная "а" равна : 6');
    case 7:
        console.log('Переменная "а" равна : 7');
    case 8:
        console.log('Переменная "а" равна : 8');
    case 9:
        console.log('Переменная "а" равна : 9');
    case 10:
        console.log('Переменная "а" равна : 10');
    case 11:
        console.log('Переменная "а" равна : 11');
    case 12:
        console.log('Переменная "а" равна : 12');
    case 13:
        console.log('Переменная "а" равна : 13');
    case 14:
        console.log('Переменная "а" равна : 14');
    case 15:
        console.log('Переменная "а" равна : 15');
    default:
        console.log('Число не из диапазона!')
}


// Задание №5 ===================================================>


/*  Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.Обязательно использовать оператор return.
  */

/*100
function first(arg1, arg2) {
    let sum = "";
    arg1 = +prompt('Введите число');
    arg2 = +prompt('Введите число');
    sum = Number(arg1 + arg2);
    return sum;
}
console.log(first());




function second(arg1, arg2) {
    let minus = "";
    arg1 = +prompt('Введите число');
    arg2 = +prompt('Введите число');
    minus = Number(arg1 - arg2);
    return minus;
}
console.log(second());



function third(arg1, arg2) {
    let divide = "";
    arg1 = +prompt('Введите число');
    arg2 = +prompt('Введите число');
    divide = Number(arg1 / arg2);
    return divide;
}
console.log(third());



function fourth(arg1, arg2) {
    let multiply = "";
    arg1 = +prompt('Введите число');
    arg2 = +prompt('Введите число');
    multiply = Number(arg1 * arg2);
    return multiply;
}
console.log(fourth());


// Задание №6 ===================================================>


/* Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции.В зависимости от переданного значения операции выполнить одну из арифметических операций(использовать функции из пункта 3) и вернуть полученное значение(использовать switch).
*/
/*
function calc(arg1, arg2, operation) {
    let totalOfArgument = "";
    arg1 = +prompt('Введите число');
    arg2 = +prompt('Введите число');
    let action = prompt('Желаемое математическое действие?').toLocaleLowerCase();
    switch (action) {
        case "+":
            totalOfArgument = Number(arg1 + arg2);
            return totalOfArgument;
            break;
        case "плюс":
            totalOfArgument = Number(arg1 + arg2);
            return totalOfArgument;
            break;
        case "сложить":
            totalOfArgument = Number(arg1 + arg2);
            return totalOfArgument;
            break;
        case "-":
            totalOfArgument = Number(arg1 - arg2);
            return totalOfArgument;
            break;
        case "минус":
            totalOfArgument = Number(arg1 - arg2);
            return totalOfArgument;
            break;
        case "отнять":
            totalOfArgument = Number(arg1 - arg2);
            return totalOfArgument;
            break;
        case "/":
            totalOfArgument = Number(arg1 / arg2);
            return totalOfArgument;
            break;
        case "разделить":
            totalOfArgument = Number(arg1 / arg2);
            return totalOfArgument;
            break;
        case "поделить":
            totalOfArgument = Number(arg1 / arg2);
            return totalOfArgument;
            break;
        case "*":
            totalOfArgument = Number(arg1 * arg2);
            return totalOfArgument;
            break;
        case "умножить":
            totalOfArgument = Number(arg1 * arg2);
            return totalOfArgument;
            break;
        case "памножить":
            totalOfArgument = Number(arg1 * arg2);
            return totalOfArgument;
            break;
        default:
            alert('Что-то пошло не так');
    }

}
console.log(calc());*/

/*
        // Задание №7 ===================================================>


         * Сравнить null и 0. Попробуйте объяснить результат.

            Насколько я понимаю, null не равен ничему, это как "ничего".Поправьте меня пожалуйста, если я ошибаюсь.



         // Задание №8 ===================================================>


         * С помощью рекурсии организовать функцию возведения числа в степень.Формат: function power(val, pow), где val – заданное число, pow – степень.  // Этот вопрос решить я не успел
*/
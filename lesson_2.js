"use strict";

/*

// Задание №1 ===================================================>

1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3
Почему код даёт именно такие результаты?

var a = 1, b = 1, c, d;
c = ++a; alert(c);            // 2      префиксный инкремент, к тому же переменной "а" присвоено значение "1"
d = b++; alert(d);            // 1      переменной d, присваеваится значение переменной b, к тому же постфиксный инкремент, который не отработает при первом вызове alert.
c = (2 + ++a); alert(c);      // 5      переменная "а" была переопределена в переменной "с" (первый alert)
d = (2 + b++); alert(d);      // 4      переменная "b" была переопределена в переменной "d" (второй alert)
alert(a);                    // 3       перевенная "а" переопределена итерациями
alert(b);                    // 3       перевенная "b" переопределена итерациями

// Задание №2 ===================================================>

2. Чему будет равен x в примере ниже?

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

4. Присвоить переменной "а" значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

let a = +prompt('Введите число от 0 до 15');
            switch (a) {
                case 0: console.log(a++);
                case 1: console.log(a++);
                case 2: console.log(a++);
                case 3: console.log(a++);
                case 4: console.log(a++);
                case 5: console.log(a++);
                case 6: console.log(a++);
                case 7: console.log(a++);
                case 8: console.log(a++);
                case 9: console.log(a++);
                case 10: console.log(a++);
                case 11: console.log(a++);
                case 12: console.log(a++);
                case 13: console.log(a++);
                case 14: console.log(a++);
                case 15: {
                    console.log(a++);
                    break;
                }
                default: console.log('Число не из диапазона!')
            }


// Задание №5 ===================================================>


/*  Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.Обязательно использовать оператор return.
  */
/*
function summary (a, b) {
    return a + b;
}
function multiply (a, b) {
    return a * b;
}
function divide (a, b) {
    return a / b;
}
function deduct (a, b) {
    return a - b;
} 
*/

// Задание №6 ===================================================>


/* 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
*/
/*
 function calc(arg1, arg2, operation) {
    let totalOfArgument = "";
     arg1 = +prompt('Введите число');
     arg2 = +prompt('Введите число');
     let action = prompt('Желаемое математическое действие?').toLocaleLowerCase();
     switch (action) {
         case "+":
             return summary(arg1, arg2);
             break;
         case "-":
             return deduct(arg1, arg2);
             break;
         case "/":
             return divide(arg1, arg2);
             break;
         case "*":
             return multiply(arg1, arg2);
             break;
         default:
             alert('Что-то пошло не так');
     }

 }
 console.log(calc());
*/
/*
        // Задание №7 ===================================================>


         * Сравнить null и 0. Попробуйте объяснить результат.

            Насколько я понимаю, null не равен ничему, это как "ничего".



        // Задание №8 ===================================================>
        
/*  Камень, ножницы, Бумага */

/*
<button onclick="rockFunction(event)" value="1">Камень</button>
        <button onclick="rockFunction(event)" value="2">Ножницы</button>
        <button onclick="rockFunction(event)" value="3">Бумага</button>
        <span class="result"></span>
        <span class="resultUser"></span>
        <span class="resultPC"></span>

        <script>
            let result = document.querySelector('.result');
            let resultUser = document.querySelector('.resultUser');
            let resultPC = document.querySelector('.resultPC');

            function rockFunction(event) {
                let userNum = event.target.value;
                let pcNum = (Math.random() * (3 - 1) + 1).toFixed();
                resultUser.innerHTML = `User:  ${userNum}`;
                resultPC.innerHTML = `PC:  ${pcNum}`;

                checkWinner(userNum, pcNum);
            }

            function checkWinner(us, pc) {
                if (us === pc) {
                    result.innerHTML = 'Both!';
                } else if (
                    (us === 1 && pc === 1) ||
                    (us === 2 && pc === 3) ||
                    (us === 3 && pc === 1)
                ) {
                    result.innerHTML = 'Победитель: User';
                } else {
                    result.innerHTML = 'Победитель: PC';
                }
            }
            */

'use strict'
/**
 * Функция принимает строковое значение, в нижнем регистре и возвращает это же значение, делая первую букву заглавной
 * @param {name} name - параметр типа "String"
 */

/*  let userName = prompt('Введите Ваше имя с маленькой буквы');
function firstLetUp(name) {
    let fnName;
    if (name === null || name === " " || isFinite(parseInt(name))) {
        alert("Что-то пошло не так!");
    } else {
        fnName = name[0].toUpperCase() + name.slice(1);
    }
    console.log(fnName);
    return fnName;
}
 firstLetUp(userName); */






/**Функия ищет совпадения по заданным слова и отсеивает их. Возращает сроку.
 * @param {str} - строка
 */
/* let userName1 = prompt('Введите слово');  // Принимаем строку
function checkSpam(str) {
    string = str.toLowerCase();   // Преобразуем в нижний регистр
    if (string.includes('viagra') || string.includes('xxx')) alert('Какая-то порнуха');  // методом "includes" ищем совпадения по словам
    else console.log(string); // В противном случае выводим в консоль
    return string;
}
checkSpam(userName1); */








/*
let comment = document.querySelector('#comn');

function truncate(str, maxLen) {
    if (str.innerHTML.length > maxLen ? str.innerText = str.innerText.slice(0, 22) + '...' : str);
}
truncate(comment, 21); */





/**
 * Функия запрашивает у пользователя числа
 * @returns сумма введеных пользователем чисел
 */
/* function sumArr() {

    let trr = [];  // Массив, в который будем пушить числа

    while (true) {

        let value = prompt("Введите число", 0);

        if (!isFinite(value) || value === null || value === '') {  // Проверяем введенные данные
            alert('Что-то пошло не так!');
            break;
        }

        trr.push(+value);  // Прошедшие данные пушим в массив trr, и добавив унарный "+", понимаем, что там будут числа а не строки
    }

    let sum = 0; // Произвольная переменная, в которую методом for..of будем записывать сумму элементов массива

    for (let sm of trr) {  // Перебираем массив, записывая результат в sum
        sum += sm;
    }
    return sum;
}

console.log(sumArr()); */







/* let arr = [-1, 2, 3, -9, 11];
let arrPos = 0;
let maxSum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        arrPos = 0;
    } else {
        arrPos += (+arr[i]);
        if (arrPos > maxSum) maxSum = arrPos;
    }
}
console.log(maxSum); */


/* function getMaxSubSum(arr) {
    let maxSum = 0; // если элементов не будет - возвращаем 0

    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart = 0;
        for (let j = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
        }
    }

    return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); */


/**
 * Функция-конструктор
 * @param {String} name
 * @param {String} price
 */



/* function Product(name, price) {
    this.name = name;
    this.price = price;
    this.makeDiscount = function (discount) {
        this.price = this.price - (this.price / 100 * discount);
    };
}


const products = [
    new Product('товар1', 300),
    new Product('товар2', 700),
    new Product('товар3', 500)
];

console.log(products);

for (let product of products) {
    product.makeDiscount(10);
}


console.log(products); */




/* let str = "background-color";

function toUpCs(string) {

    let arrString = string.split('-');

    for (let i = 0; i < arrString.length; i++) {
        if (i === 0) continue;
        else {
            arrString[i] = arrString[i].charAt(0).toUpperCase() + arrString[i].slice(1);
        }
    }
    return arrString.join('');
}

console.log(toUpCs(str)); */




/* let string = "background-color";
function camelize(str) {
    return str
        .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
        .map(
            // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
            // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}


console.log(camelize(string)); */



/* let arrR = [5, 3, 8, 1, 43, 6, 4, 5, 7];

function filterRange(arr, a, b) {
    let newArr = [];
    /* for (let i = 0; i < arrR.length; i++) {
        if (arrR[i] >= a && arrR[i] <= b) newArr.push(arrR[i]);
    }
    return newArr; */
/*
    return arr.filter(item => (a <= item && item <= b));   // Метод filter возвращает массив значений, прошедших условие колбэк функции
}
let filtered = filterRange(arrR, 3, 7);
console.log(filterRange(arrR, 3, 7));
console.log(filtered);
console.log(arrR); */

/* function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

let arr = [1, 2, 15];

arr.sort(compareNumeric);

console.log(arr);
 */



/**
 * Функция-игра, надо угадывать загаданное компъютером число. Функция с рекурсией
 */

/* const riddle = parseInt(Math.random() * 100);

function answers(num) {
    let askUser = parseInt(prompt('Введите число'));

    if (askUser < num) {
        alert('Ваше число меньше загаданного');
    } else if (askUser > num) {
        alert('Ваше число больше загаданного');
    } else if (askUser == num) {
        alert('Поздравляем, Вы угадали число');
        return;
    } else {
        alert('Вы ввели недопустимое значение!');
    }
    answers(num);
}
answers(riddle); */
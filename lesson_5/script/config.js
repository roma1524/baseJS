/* ======================================= Задание №1 /Вариант 1 ======================= */

/* let arrChess = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

function drawChess() {
    let mainBlock = document.querySelector('.main-block'), box, spanL, spanR;

    for (let i = 0; i < 8; i++) {        // создание горизонтали
        for (let j = 0; j < 8; j++) {    // создание вертикали

            box = document.createElement('div'); // создание 'div', и присвоение переменной box
            mainBlock.appendChild(box); // помещаем box в main-block
            spanL = document.createElement('span') // создаем span для нумерации ячеек игрока
            spanR = document.createElement('span') // создаем span для нумерации ячеек оппонента
            box.appendChild(spanL); // помещаю span'Ы' в div'Ы'
            box.appendChild(spanR); // помещаю span'Ы' в div'Ы'
            spanR.innerText = arrChess[j] + (i + 1); // подписываем каждый span игрока
            spanL.innerText = arrChess[j] + (8 - i); // подписываем каждый span оппонента

            if (i % 2 == j % 2) {
                // при выполнении условия, присваиваем классы
                box.className = 'block white';
                spanL.className = 'chblack';
                spanR.className = 'rvblack';
            } else {
                box.className = 'block black';
                spanL.className = 'chwhite';
                spanR.className = 'rvwhite';
            }
        }
    }
}

drawChess(); */

/* ======================================= Задание №1 /Вариант 2 ======================= */

/* function drawChess() {
    let mainBlock = document.querySelector('.main-block');
    let block;
    let flag = true;

    let figure = {
        0: ['-263px -19px', '-484px -22px', '-372px -17px', '-150px -16px', '-150px -16px', '-372px -17px', '-484px -22px', '-263px -19px'],
        1: ['-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px'],
        6: ['-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px'],
        7: ['-263px -116px', '-484px -116px', '-372px -116px', '-150px -116px', '-150px -116px', '-372px -116px', '-484px -116px', '-263px -116px'],
    };

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (j == 0) flag = !flag;

            block = document.createElement('div');

            if (flag) block.className = 'block black';
            else block.className = 'block white';

            if (figure[i] !== undefined && figure[i][j] !== undefined) {
                block.style.backgroundImage = 'url(set_chess.png)';
                block.style.backgroundPosition = figure[i][j];
            }

            mainBlock.appendChild(block);
            flag = !flag;
        }
    }
}

drawChess(); */      /* Это решение, я частично подсмотрел в интернете(а именно расставление фигурок по доске) */



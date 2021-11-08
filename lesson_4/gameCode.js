//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answers = [
    [],
    [],
    []
];



rep(works.a00, works.a1, works.a2);  //Выводим первый вопрос
answers[0].push(works.a00);

switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        answers[0].push(works.a1);
        rep(works.b00, works.b1, works.b2);
        answers[1].push(works.b00);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                answers[1].push(works.b1);
                rep(works.d00, works.d1, works.d2);
                switch (event) {
                    case 1:
                        alert(answers[0]);
                        break;
                    case 2:
                        alert(answers[1]);
                    case -1:
                        break;
                }
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                answers[1].push(works.b2);
                rep(works.d00, works.d1, works.d2);
                switch (event) {
                    case 1:
                        alert(answers[0]);
                        break;
                    case 2:
                        alert(answers[1]);
                    case -1:
                        break;
                }
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        answers[0].push(works.a2);
        rep(works.c00, works.c1, works.c2);
        answers[2].push(works.c00);
        switch (event) {
            case 1: // Второе действие
                answers[2].push(works.c1);
                rep(works.d00, works.d1, works.d2);
                switch (event) {
                    case 1:
                        alert(answers[0]);
                        break;
                    case 2:
                        alert(answers[1]);
                    case -1:
                        break;
                }
                break;
            case 2: // Второе действие
                answers[2].push(works.c2);
                rep(works.d00, works.d1, works.d2);
                switch (event) {
                    case 1:
                        alert(answers[0]);
                        break;
                    case 2:
                        alert(answers[2]);
                    case -1:
                        break;
                }
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');

/* function repeat() {
    let reapeatAsk = prompt("Введите номер вопроса");

} */


//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}

function rep(ask, answ1, answ2) {
    do {
        ok = false;
        event = +prompt(ask + answ1 + answ2 + '-1 - Выход из игры');
        if (event == -1) {
            return;
        }
        else {
            ok = isAnswer(ask, event);
        }
    } while (!ok);

    return event;
}

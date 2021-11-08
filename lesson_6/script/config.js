
/* =================----------- ДЗ№ 1 -----------==================== */
/* ================ Решение нигде не подсматривал =================== */


let mainH, mainB, image1, image2;
let picSrc = document.getElementsByTagName('img');

function createSmallImage() {
    for (let i = 0; i < 3; i++) {
        let ii = i + 1;

        image1 = document.createElement('img');
        mainH = document.querySelector('.s' + ii);
        mainH.appendChild(image1);
        image1.className = 'pic' + ii;

        switch (image1.className) {
            case 'pic1':
                image1.src = 'img/s/g' + [ii] + '.png';
                break;
            case 'pic2':
                image1.src = 'img/s/g' + [ii] + '.png';
                break;
            case 'pic3':
                image1.src = 'img/s/g' + [ii] + '.png';
                break;
        }
    }
}

function createBigImage(imagescoll) {
    for (let g = 0; g < imagescoll.length; g++) {
        imagescoll[g].onclick = function () {
            let mainBigImage = document.querySelector('.main_big');
            let lastImage = mainBigImage.childNodes;
            let lastImageLen = lastImage.length;

            switch (lastImageLen) {
                case 1:
                    e();
                case 0:
                    image2 = document.createElement('img');
                    mainB = document.querySelector('.main_big');
                    mainB.appendChild(image2);
                    image2.className = 'big_pic';
                    image2.src = 'img/big/g' + (g + 1) + '.png';
                    image2.onerror = function () {
                        alert('image is not found');
                    }
                    break;
            }
        }
    }
}
document.addEventListener('onload', createSmallImage());
document.addEventListener('onload', createBigImage(picSrc));


/* ====================== Слайдер ========================== */

let foMaPi = document.querySelector('.footer_main_pic');
let foArPi = [
    ['img/big/g1.png'],
    ['img/big/g2.png'],
    ['img/big/g30.png']
];
let countP = (foArPi.length - 1);



function sld() {
    let slDiv = document.createElement('div')
    slDiv.className = 'main_big_ft';
    let ftImg = document.createElement('img')
    ftImg.className = 'big_pic';
    ftImg.src = 'img/big/g2.png'
    slDiv.appendChild(ftImg);

    let slBut1 = document.createElement('button');
    slBut1.className = 'btn_1';
    slBut1.innerText = 'PREW';

    let slBut2 = document.createElement('button');
    slBut2.className = 'btn_2';
    slBut2.innerText = 'NEXT';

    foMaPi.appendChild(slBut1);
    foMaPi.appendChild(slDiv);
    foMaPi.appendChild(slBut2);


    let buttons = document.querySelectorAll('button');
    for (let o of buttons) {
        o.addEventListener('click', function btn(event) {
            switch (event.target.className) {
                case 'btn_1':
                    ftImg.src = foArPi[countP];
                    countP--;
                    if (countP < foArPi.length) countP = (foArPi.length - 1);
                    countP--;
                    break;
                case 'btn_2':
                    ftImg.src = foArPi[countP];
                    countP++

                    if (countP >= foArPi.length) countP = (foArPi.length - 3);

                    break;
            }
        });
    }
}


document.addEventListener('click', sld());


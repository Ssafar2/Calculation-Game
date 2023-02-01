let number1 = document.querySelector("#num1");
let number2 = document.querySelector("#num2");
let operator = document.querySelector('#operator');
let result = document.querySelector("#result");
let checkk = document.querySelector("#check");
let ansTrue = document.querySelector("#true");
let ansFalse = document.querySelector("#false");


window.onload = () => {

    alert(`Oyun 50 sualdan ibarətdir \n Toplam 10 canınız olur \n Hər sual 13 saniyədən ibarətdir\n Hər yanlış cavabda -1 can gedir \n Doğru cavab sayısına görə isə aşağıdakına uyğun olaraq canınız artır \n 5 Doğru: 2 Can \n 10 Doğru: 2 Can \n 20 Doğru: 4 Can \n 35 Doğru: 6 Can \n 50 Doğru: Oyun bitir \n `);

    result.focus();

}


document.addEventListener("keydown", function (event) {

    if (event.keyCode == 13) {

        hesabla();

    }

});


randomQuestion();

function randomQuestion() {

    let num1 = number1.textContent = Math.floor(0 + Math.random() * 22);
    let num2 = number2.textContent = Math.floor(0 + Math.random() * 22);
    let opers = ['+', '-', 'x', '/'];
    let ranOper = Math.floor(0 + Math.random() * 4);
    let randomOperator = operator.textContent = opers[ranOper];

    switch (randomOperator) {

        case '+': ans = num1 + num2; break;
        case '-': ans = num1 - num2; break;
        case 'x': ans = num1 * num2; break;
        case '/': while (true) {

            num2 = number2.textContent = Math.floor(0 + Math.random() * 50);

            if (num1 % num2 == 0) {

                break;

            }
        }
            ans = num1 / num2; break;

    }
}



let s = document.querySelector("#game");
let heart = s.children[1].children[0].children[0].textContent;
let times = s.children[1].children[1].children[0];
let overTime = setInterval(timerOver, 1000);

function timerOver() {

    times = s.children[1].children[1].children[0];
    times.textContent = +times.textContent - 1;

    if (times.textContent == 0) {

        alert(`Oyun Bitti..............\n Doğru Cavab sayısı: ${ansTrue.textContent} \n Yanlış Cavab sayısı: ${ansFalse.textContent}`);
        window.open('index.html', '_self');
        clearInterval(overTime);

    }
}



function artir() {
    heart = s.children[1].children[0].children[0].textContent++;
}

checkk.addEventListener("click", hesabla);

function hesabla() {

    if (ans == result.value) {

        ansTrue.textContent = +ansTrue.textContent + 1;
        timerOver();
        times.textContent = 15;


        if (ansTrue.textContent == 5) {

            alert('Canınıza 2 can əlavə olundu.');
            artir();
            artir();
        }
        else if (ansTrue.textContent == 10) {

            alert('Canınıza və 2 can əlavə olundu.');
            artir();
            artir();

        }
        else if (ansTrue.textContent == 20) {

            alert('Canınıza 4 can əlavə olundu.');
            artir();
            artir();
            artir();
            artir();

        }
        else if (ansTrue.textContent == 35) {

            alert('Canınıza 6 can əlavə olundu.');
            artir();
            artir();
            artir();
            artir();
            artir();
            artir();

        }
        else if (ansTrue.textContent == 50) {

            alert('Təbriklər!! Bütün sualları doğru bildiniz.');
            alert(`Oyun Bitti..............\n Doğru Cavab sayısı: ${ansTrue.textContent} \n Yanlış Cavab sayısı: ${ansFalse.textContent}`);
            window.open('index.html', '_self');

        }
        randomQuestion();
        result.focus();
    }

    else if (isNaN(result.value)) {

        alert('Xəta! Girilən dəyər ədəd tipində olmalıdır');

    }

    else if (result.value == " ") {

        alert('Xəta! Boş dəyər girmək olmaz');

    }

    else {

        ansFalse.textContent = +ansFalse.textContent + 1;
        heart = s.children[1].children[0].children[0].textContent--;
        if (heart == 1) {

            alert(`Oyun Bitti..............\n Canınız: 0 \n Doğru Cavab sayısı: ${ansTrue.textContent} \n Yanlış Cavab sayısı: ${ansFalse.textContent}`);

            window.open('index.html', '_self');

        }

        randomQuestion();
        result.focus();

    }
    result.value = " ";
}

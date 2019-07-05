const MIN_NUMBER = 0;
const MAX_NUMBER = 1001
var take = document.getElementsByClassName('start');

function getRandomIt (min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}



function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function startBot () {
    var random_number =  getRandomIt(MIN_NUMBER, MAX_NUMBER);

    console.log(random_number);
    
    while (true) {
        
        
        var userAnswer = prompt('Введи число');
        
        
        
        
        if (parseInt(userAnswer) === random_number) {
            alert('Бинго!');
            break;
        } else if(userAnswer === null) {
            alert('Игра окончена!');
            break;
        } else if (!isNumeric(userAnswer)) {
            alert('Введено не числовое значение');
        } else if (parseInt(userAnswer) < random_number) {
            alert('Ваше число меньше');
        } else if (parseInt(userAnswer) > random_number) {
            alert('Ваше число больше');
        }
        
        // console.log(make());
        if( make < 7) {
            alert('Ваши жизни закончились');
            var make;
            break;
            
        }
    }


    
    var isConfirmNewGame = confirm('Хотите начать заново?');
    
    (function newGame() {
        if (isConfirmNewGame === true) {
            startBot();
        }
    })();
}
function attemptFull() {
    var attempt = 10;
    return function () {
        return attempt--;
        
    }
}

var make = attemptFull();




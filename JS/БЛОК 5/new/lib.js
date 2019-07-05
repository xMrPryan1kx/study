window.lib =  (function (){
    debugger
    const MIN_NUMBER = 1;
    const MAX_NUMBER = 1001;
    const LIVES = 10;
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() + (max-min) + min);
    }
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    var random = getRandomNumber(MIN_NUMBER, MAX_NUMBER);


    function start() {
        debugger
        var userAnswer = prompt('Введите ваше число!');
        var userNumber = parseInt(userAnswer);

        if(!isNumeric(userAnswer)) {
            alert('Введено не числовое значение!');
            checkCount();
        } else if (userNumber < random) {
            alert ('Ваше число меньше');
            checkCount();
        } else if (userNumber > random) {
            alert('Ваше число больше')
            checkCount();
        } else if (userAnswer === null) {
            alert('Игра окончена!');
            confirmNewGame();
        } else if (userNumber === random) {
            alert('Бинго!');
            confirmNewGame();
        }
        return {
            start
        }
    }
    function checkCount() {
        return function() {
            return --LIVES < 0 ? confirmNewGame() : false 
        }
    }

    var make = checkCount();
    

    var isConfirmNewGame = confirm('Вы хотите начать заново?');

    (function newGame(){
        if(isConfirmNewGame === true) {
            LIVES;
            random;
            start();
        }
    })();
    
})();
window.lib =  (function (){
    
    const MIN_NUMBER = 1;
    const MAX_NUMBER = 1001;
    var LIVES = 10;
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max-min) + min);
    }
    
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    var random = getRandomNumber(MIN_NUMBER, MAX_NUMBER);


    function start () {
        var userAnswer = prompt('Введите ваше число!');
        
        if ( userAnswer === null) {
            alert('Игра окончена!');
            return confirmNewGame();
        }
        
        var userNumber = parseInt(userAnswer);

        if(!isNumeric(userAnswer)) {
            alert('Введено не числовое значение!');
            return checkCount();
            
        } else if (userNumber < random) {
            alert ('Ваше число меньше');
            return checkCount();
        } else if (userNumber > random) {
            alert('Ваше число больше')
            return checkCount();
        } else if (userNumber === random) {
            alert('Бинго!');
            return confirmNewGame();
        }
        
    }
    function checkCount() {
        console.log('Количество ваших жизней :' + LIVES);
        
        if( LIVES == 1) {
            alert('ВНИМАНИЕ: У вас осталась одна жизнь!!!');
        }
        
        return --LIVES < 0 ? attemptsEnd() : start(); 
        
    }
    
    

    function confirmNewGame(){
        var isConfirmNewGame = confirm('Вы хотите начать заново?');
        if(isConfirmNewGame === true) {
            random = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
            LIVES =10;
            start();
        }
    };
    function attemptsEnd() {
        alert('Ваши попытки закончились!');
        return confirmNewGame();
    }

    return {
        start
    }
    
    
})();
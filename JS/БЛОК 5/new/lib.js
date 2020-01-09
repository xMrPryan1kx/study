window.lib =  (function (){
    // определение переменных
    const MIN_NUMBER = 1;
    const MAX_NUMBER = 1001;
    const LIVES = 10;
    var livesCopy = LIVES; // Создаем копию константы и работаем с ней

    //функция которая рандомит от минимального до максимального заданного значения
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max-min) + min);
    }
    
    // проверка на число
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    var random = getRandomNumber(MIN_NUMBER, MAX_NUMBER);


    //основная функция запуска программы

    function start () {
        console.log('Количество ваших жизней :' + livesCopy);
        
        var userAnswer = prompt('Введите ваше число!');
        console.log('Введенное вами число : ' + userAnswer);
        
        if ( userAnswer === null) {
            alert('Игра окончена!');
            return confirmNewGame();
        }
        
        
        //проверка на валидный ввод данных
        if(!isNumeric(userAnswer)) {
            alert('Введено не числовое значение!');
            return start();
            
        } else if (userAnswer < random) {
            console.log('Ваше число меньше');
            return checkCount();
        } else if (userAnswer > random) {
            console.log('Ваше число больше')
            return checkCount();
        } else if (Number(userAnswer) === random) {
            alert('Бинго!');
            return confirmNewGame();
        }
        
    }

    // замыкание ( позволяет сохранить значени LIVES внутри функции)
    function checkCount() {
        livesCopy--
        
        if( livesCopy == 1) {
            alert('ВНИМАНИЕ: У вас осталась одна жизнь!!!');
        } else if ( livesCopy == 0) {
            console.log('Загаданное число было : ' + random);
        }
        // возвращает 1-true 2-false
        return livesCopy <= 0 ? attemptsEnd() : start(); 
        
    }
    
    
    // Функция вызова новой игры
    function confirmNewGame(){
        var isConfirmNewGame = confirm('Вы хотите начать заново?');
        if(isConfirmNewGame === true) {
            random = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
            livesCopy = 10;
            start();
        }
    };

    
    function attemptsEnd() {
        alert('Ваши попытки закончились!');
        confirmNewGame();
    }

    // возвращаем объект и кладем в него "ключ" : start c Функцией start, ES2015 позволяет сокращать запись,если ключ и значение одинаковые 
    // return { start: start} так выглядет иначе 
    return {
        start 
    }
    
    
})();
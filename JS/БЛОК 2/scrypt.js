var number = document.getElementsByClassName('contrast');
var infinity = document.getElementsByClassName('infinity');
var take = document.getElementsByClassName('year');
var test = document.getElementsByClassName('year-space');
var mama = document.getElementById('gaga');
var close = document.getElementsByClassName('close');





function klara() {
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    alert('Пожалуйста, вводите только числа!');
    var first = prompt('Введите первое число.');
    var second = prompt('Введите второе число.');


    if (!isNumeric(first) || !isNumeric(second)) {
        alert('Было введено не число')
    } else if (first > second) {
        alert('Первое число больше второго')
    } else if ( first < second) {
        alert('Второе число больше первого');
    } else {
        alert ('Числа равны');
    }
}

function displayFlex() {
    mama.style.display = 'flex';
    
};
function displayNone() {
    mama.style.display ='none';
}


function year1(){
    function isLeapYear(year) {
        return year % 400 === 0 || (year % 100 !==0 && year % 4 === 0)}
        for (let y = 1900; y <= 2019; y++) isLeapYear(y) && console.log(y);
        displayNone();
}

function year2(){
    var date1 = +prompt('Введите начальный год');
    var date2 = +prompt('Введите конечный год');
    if (date1 > date2) {
        alert('конечный год должен быть больше начального')
    }
    function isLeapYear(year) {
        return year % 400 === 0 || (year % 100 !==0 && year % 4 === 0)
    }
        if (date2 > date1) {
            for (let y = date1; y <= date2; y++) isLeapYear(y) && console.log(y);
        }
        displayNone();    
}


document.getElementsByClassName('.year-space').onclick = function(){
    document.getElementById('gaga').style.display = 'none';
}


function finity(){
    var sum = 0;

    while (true) {
        var variable1 = prompt();
        
        if (isNaN(variable1)) continue;
        else if (variable1 === null) break;
    
        sum += +variable1;
    }
    
    console.log('Сумма введенных чисел: ' + sum);
}



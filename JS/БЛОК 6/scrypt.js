'use strict'
const DAY_NAMES = ['Воскресенье','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const MONTH_NAMES = ['Декабря', 'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября'];

// function fullDate() {
//     var date = new Date;
//     var nowMonth = MONTH_NAMES[date.getMonth()];
//     var nowDay = DAY_NAMES[date.getDay()];
//     var nowDate = date.getDate() + ' ' + nowMonth + ' ' + date.getFullYear() + ' ' + 'года, ' + nowDay + ', ';
//     const DATE_HOURS = date.getHours() + declOfNum(date.getHours(), [' час ', ' часа ', ' часов ']);
//     const DATE_MINUTES = date.getMinutes() + declOfNum(date.getMinutes(),[' минута ', ' минуты ', ' минут ']);
//     const DATE_SECONDS = date.getSeconds() + declOfNum(date.getSeconds(),[' секунда ', ' секунды ', ' секунд']);
    
//     console.log( nowDate + DATE_HOURS + DATE_MINUTES + DATE_SECONDS);
// }
function declOfNum(number, titles) {  
    var cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}
// внутри фу-ции создаем объект date


// function splitString(stringToSplit, separator) {
//     this.arrayOfStrings = stringToSplit.split(separator);
//     // console.log('Оригинальная строка: "' + stringToSplit + '"');
//     // console.log('Разделитель: "' + separator + '"');
//     // console.log('Массив содержит ' + arrayOfStrings.length + ' элементов: ' + arrayOfStrings.join(' / '));
//     this.name =arrayOfStrings[0];
//     this.arrayOfStrings[1];
//     fullDate();

// }


var fullName = prompt( 'Введите через пробел Имя и Фамилию', 'Иван Иванов');
debugger
var date = new Date;

// метод split расщипляет строку заданным разделителем (stringArr.split(разделитель, кол-во кусков расщипления)) на объект 
var space = ' ';
var splitFullName = fullName.trim().split(space, 2); 

var firstName = splitFullName[0];
var lastName = splitFullName[1];

function User(firstName, lastName) {
    debugger
    this.firstName = firstName,
    this.lastName = lastName,
    this.regDate = date
    return firstName + ' ' + lastName;
    

}
User(firstName, lastName);

function UserList() {
    users: [
        
    ]
}



// console.log(arr);


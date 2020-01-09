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


function User(firstName, lastName) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.regDate = new Date();

}


// Создаем функцию-конструктор для хранения всех пользователей
function UserList() {
    this.users = [];  

    this.add = function(user) {
        this.users.push(user); //добавление пользователей в массив
    }

    this.getAllUsers = function () {
        return this.users; //вывод всех пользователей
    }
}
var userList = new UserList();

while (userAnswer !== null) {
    
    var userAnswer = prompt('Введите имя и фамилию');
    
    if (userAnswer !== null) {
        
        var space = ' ';
        var splitFullName = userAnswer.trim().split(space, 2);  // метод split расщипляет строку заданным разделителем (stringArr.split(разделитель, кол-во кусков расщипления)) на объект 
        
        var firstName = splitFullName[0];
        var lastName = splitFullName[1];

        var users = new User(firstName, lastName);

        userList.add(users);
    } else {
        console.log(userList.getAllUsers());
    }
}




// console.log(arr);


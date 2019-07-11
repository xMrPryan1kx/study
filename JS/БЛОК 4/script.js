const DAY_NAMES = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const MONTH_NAMES = ['Декабря', 'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября'];
function fullDate() {
    var date = new Date;
    var nowMonth = MONTH_NAMES[date.getMonth()];
    var nowDay = DAY_NAMES[date.getDay()];
    var nowDate = 'Сегодня' + ' ' + date.getDate() + ' ' + nowMonth + ' ' + date.getFullYear() + ' ' + 'года, ' + nowDay + ', ';
    const DATE_HOURS = date.getHours() + declOfNum(date.getHours(), [' час ', ' часа ', ' часов ']);
    const DATE_MINUTES = date.getMinutes() + declOfNum(date.getMinutes(),[' минута ', ' минуты ', ' минут ']);
    const DATE_SECONDS = date.getSeconds() + declOfNum(date.getSeconds(),[' секунда ', ' секунды ', ' секунд']);
    
    console.log( nowDate + DATE_HOURS + DATE_MINUTES + DATE_SECONDS);
}

function declOfNum(number, titles) {  
    var cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}

// setInterval(fullDate, 1000);

(function authentification() { 
    var users = [
        {
            login: 'Vasya',
            password: '123',
            name: 'Василий'
        },
        {
            login: 'Kolya',
            password: '234',
            name: 'Николай'
        },
        {
            login: 'Maksim',
            password: '345',
            name: 'Максим'
        }
    ];

    var loginUser = prompt('Введите Ваш логин?');
    var passwordUser = prompt('Введите Ваш пароль?');
    var cheked = false;



    

    





                    //ПЕРЕБОР МЕТОДОМ FIND

    // var fullAuth = users.find(function(logPass) {
    //     return loginUser === logPass.login && passwordUser === logPass.password;
    // })

    // fullAuth ? alert('Добро пожаловать, ' + fullAuth.name + '!' ) : alert('Ошибка авторизации!')









                    //  ПЕРЕБОР МЕТОДОМ FILTER

    // var methodFilter = users.filter(function(current){
    //     return current.login === loginUser && current.password === passwordUser
    // });
    // if (methodFilter.length !== 0) {
    //     alert('Добро пожаловать, ' + methodFilter[0].name + '!');
    // } else {
    //     alert('Ошибка авторизации!')
    // }
    // console.log(methodFilter);






                    // ПЕРЕБОР ЦИКЛОМ FOR

    // function chekUsers() {
    //     loginUser == users[i].name;
    //     passwordUser == users[i].password;
    // }
    
    // for (var i = 0; i < users.length; i++) {
    //     if (loginUser == users[i].login && passwordUser == users[i].password) {
    //     cheked = true;
    //     alert('Добро пожаловать: ' + users[i].name)
    //     }
    // }
    // if (cheked == false) {
    //     alert('Ошибка аутентификации');
    // }

})(); 












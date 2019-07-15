const DAY_NAMES = ['Воскресенье','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const MONTH_NAMES = ['Декабря', 'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября'];

// внутри фу-ции создаем объект date
function fullDate() {
    window.date = new Date;
    var nowMonth = MONTH_NAMES[date.getMonth()];
    var nowDay = DAY_NAMES[date.getDay()];
    var nowDate;
    console.log(date);
}

function splitString(stringToSplit, separator) {
    window.arrayOfStrings = stringToSplit.split(separator);
    // console.log('Оригинальная строка: "' + stringToSplit + '"');
    // console.log('Разделитель: "' + separator + '"');
    // console.log('Массив содержит ' + arrayOfStrings.length + ' элементов: ' + arrayOfStrings.join(' / '));
    console.log(arrayOfStrings[0]);
    fullDate();

}
var fullName = prompt( 'Введите через пробел Имя и Фамилию', 'Иван Иванов');
var space = ' ';
splitString(fullName,space);

var User = [
    {
        firstName: arrayOfStrings[0],
        lastName: arrayOfStrings[1],
        regDate: date
    }
]

// console.log(arr);


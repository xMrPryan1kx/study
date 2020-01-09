console.log('Привет, мой упоротый друг');

// function change() {
//     var button = document.querySelector('.add-work');
//     button.style.backgroundColor = "#eee";
// }


function petuh() {
    var firstQuestion = confirm('Здарова, петушьё,ты хочешь продолжить?');

    if (firstQuestion != false) {
        alert('Ну ты и петух!');
        var secondQuestion = prompt('Ответь на вопрос, и можешь работать: сколько будет 14 + 2?');
        if (secondQuestion != 'петух') {
            alert('да мне похуй сколько будет, все равно ты Петух!')
        } else if (secondQuestion == 'петух'){
            alert('Красава, ответ верный');
        }else if(secondQuestion == 'ты петух'){
            alert('ТЫ! ПЕТУХ!!!')
        } else {
            alert('Тупое петушьё!')
        }
    } else {
        alert('Все равно петух');
    }

}
//  Группы обучения
var button1 = $('.group1');
var button2 = $('.group2');
var button3 = $('.group3');
var button4 = $('.group4');
var button5 = $('.group5');

//Преподаватели 

var teacher1 = 'д.т.н Техник И.К';
var teacher2 = 'к.ф.н. Философ. А.А.';
var teacher3 = 'д.ф.н. Конфуций Й.Ц.';
var teacher4 = 'д.ф.н Кротецкий Д.В';
var teacher5 = 'к.п.н Дариков К.К.';

// Предметы
// var item1 = 'Предмет 1' + ' ( ' + teacher1 + ' )';
// var item1 = 'Предмет 2' + ' ( ' + teacher2 + ' )';
// var item1 = 'Предмет 3' + ' ( ' + teacher3 + ' )';
// var item1 = 'Предмет 4' + ' ( ' + teacher4 + ' )';
// var item1 = 'Предмет 5' + ' ( ' + teacher5 + ' )';

var item1 = 'Предмет 1';
var item2 = 'Предмет 2';
var item3 = 'Предмет 3';
var item4 = 'Предмет 4';
var item5 = 'Предмет 5';


// Фамилии студентов
var name1 = 'Петров';
var name2 = 'Иванов';
var name3 = 'Сидоров';
var name4 = 'Каштанов';
var name5 = 'Гузин';
var name6 = 'Качилин';
var name7 = 'Марков';

var obj = $('.item');



function takeGroup(item, name) {
    var jerk = $('<li class="list">' + item + ' ( ' + name + ' )' +  '</li>');
    return jerk;
}







function itemWork(nameObj,prev,sec,prev1,sec1) {
    nameObj.click(function() {
        var prov = $('.list');
        probs(prev,sec,prev1,sec1);
    });
}
function probs(hops1, hops2, hops3, hops4) {
    var prov = $('.list');
    if(prov.length != 0) {
        prov.remove();
        obj.append(takeGroup(hops1, hops2));
        obj.append(takeGroup(hops3, hops4));
    } else if(prov.length == 0 ) {
        obj.append(takeGroup(hops1, hops2));
        obj.append(takeGroup(hops3, hops4));
    }
}

itemWork(button1,item1,teacher1,item2,teacher2);
itemWork(button2,item2,teacher2,item3,teacher3);
itemWork(button3,item3,teacher3,item4,teacher4);
itemWork(button4,item4,teacher4,item5,teacher5);
itemWork(button5,item5,teacher5,item1,teacher1);
// window.onload = () => {
//     const req = new XMLHttpRequest();

//   // Сохраняем ключ API, полученный со страницы https://tech.yandex.ru/keys/get/?service=trnsl
//   // (с примером ниже работать не будет, нужно получить и вставить свой!)
//   const API_KEY = 'trnsl.1.1.20200511T205126Z.ea45a589553483f0.d152d338faf243cbecf8de7ce6edaf62d7285db8';

//   // Сохраняем адрес API
//   const url = 'https://translate.yandex.net/api/v1.5/tr.json/translate';

//   const valueReq = document.querySelector('.translate-req textarea');
//   const resp = document.querySelector('.translate-resp textarea');
//   const btn = document.querySelector('button')

//   // Формируем полный адрес запроса:
//   url += '?key=' + API_KEY; // добавляем к запросу ключ API
//   url += `&text=${valueReq}`; // текст для перевода
//   url += '&lang=ru-en'; // направление перевода: с русского на английский

 

//   // Таким образом формируется строка вида:
//   // https://translate.yandex.net/api/v1.5/tr.json/translate?key=example_api_key&text=кролики&lang=ru-en
  
  

//   // Назначаем обработчик события load
//   btn.addEventListener('click', () => {
//       console.log('object');
//     console.log(req.response); // отображаем в консоли текст ответа сервера
//     var response = JSON.parse(req.response); // парсим его из JSON-строки в JavaScript-объект

//   })
  
    
//     // Проверяем статус-код, который прислал сервер
//     // 200 — это ОК, остальные — ошибка или что-то другое
//     if (response.code !== 200) {
//       resp.value = 'Произошла ошибка при получении ответа от сервера:\n\n' + response.message;
//       return;
//     }

//     // Проверяем, найден ли перевод для данного слова
//     if (response.text.length === 0) {
//       resp.value = 'К сожалению, перевод для данного слова не найден';
//       return;
//     }

//     // Если все в порядке, то отображаем перевод на странице
//     resp.value = response.text.join('<br>'); // вставляем его на страницу
  

//   // Обработчик готов, можно отправлять запрос
//   // Открываем соединение и отправляем
//   req.open('get', url);
//   req.send();
// }

window.onload = function() {

    // Создаем объект XMLHttpRequest, при помощи которого будем отправлять запрос
    var req = new XMLHttpRequest();
  
    // Сохраняем ключ API, полученный со страницы https://tech.yandex.ru/keys/get/?service=trnsl
    // (с примером ниже работать не будет, нужно получить и вставить свой!)
    var API_KEY = 'trnsl.1.1.20200511T205126Z.ea45a589553483f0.d152d338faf243cbecf8de7ce6edaf62d7285db8';
  
    // Сохраняем адрес API
    var url = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
  
    // Формируем полный адрес запроса:
    url += '?key=' + API_KEY; // добавляем к запросу ключ API
    url += '&text=пляж'; // текст для перевода
    url += '&lang=ru-en'; // направление перевода: с русского на английский
  
    // Таким образом формируется строка вида:
    // https://translate.yandex.net/api/v1.5/tr.json/translate?key=example_api_key&text=кролики&lang=ru-en
    
    var translate = document.querySelector('.translate-resp textarea');
  
    // Назначаем обработчик события load
    req.addEventListener('load', function () {
      console.log(req.response); // отображаем в консоли текст ответа сервера
      var response = JSON.parse(req.response); // парсим его из JSON-строки в JavaScript-объект
  
      // Проверяем статус-код, который прислал сервер
      // 200 — это ОК, остальные — ошибка или что-то другое
      if (response.code !== 200) {
        translate.innerHTML = 'Произошла ошибка при получении ответа от сервера:\n\n' + response.message;
        return;
      }
  
      // Проверяем, найден ли перевод для данного слова
      if (response.text.length === 0) {
        translate.innerHTML = 'К сожалению, перевод для данного слова не найден';
        return;
      }
  
      // Если все в порядке, то отображаем перевод на странице
      translate.innerHTML = response.text.join('<br>'); // вставляем его на страницу
    });
  
    // Обработчик готов, можно отправлять запрос
    // Открываем соединение и отправляем
    req.open('get', url);
    req.send();
  
  }
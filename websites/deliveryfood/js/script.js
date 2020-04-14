// Отключаем стандартное поведение ссылок
// let allA = document.querySelectorAll('a');

// for (i = 0; i < allA.length; i++) {
//   a = allA[i];
//   a.addEventListener('click', function(e) {
//     e.preventDefault();
//   });
// }
// Получаем узел BODY и внедряем элемент кнопки
const base = document.body || document.getElementsByTagName("body")[0];
base.insertAdjacentHTML(
  "beforeend",
  '<button onclick="topFunction()" id="toTop" title="Go to top"><img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDI4NC45MjkgMjg0LjkyOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjg0LjkyOSAyODQuOTI5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTI4Mi4wODIsMTk1LjI4NUwxNDkuMDI4LDYyLjI0Yy0xLjkwMS0xLjkwMy00LjA4OC0yLjg1Ni02LjU2Mi0yLjg1NnMtNC42NjUsMC45NTMtNi41NjcsMi44NTZMMi44NTYsMTk1LjI4NSAgIEMwLjk1LDE5Ny4xOTEsMCwxOTkuMzc4LDAsMjAxLjg1M2MwLDIuNDc0LDAuOTUzLDQuNjY0LDIuODU2LDYuNTY2bDE0LjI3MiwxNC4yNzFjMS45MDMsMS45MDMsNC4wOTMsMi44NTQsNi41NjcsMi44NTQgICBjMi40NzQsMCw0LjY2NC0wLjk1MSw2LjU2Ny0yLjg1NGwxMTIuMjA0LTExMi4yMDJsMTEyLjIwOCwxMTIuMjA5YzEuOTAyLDEuOTAzLDQuMDkzLDIuODQ4LDYuNTYzLDIuODQ4ICAgYzIuNDc4LDAsNC42NjgtMC45NTEsNi41Ny0yLjg0OGwxNC4yNzQtMTQuMjc3YzEuOTAyLTEuOTAyLDIuODQ3LTQuMDkzLDIuODQ3LTYuNTY2ICAgQzI4NC45MjksMTk5LjM3OCwyODMuOTg0LDE5Ny4xODgsMjgyLjA4MiwxOTUuMjg1eiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" /></button>'
);

// Добавляем стили к нашей кнопке
document
  .getElementById("toTop")
  .setAttribute(
    "style",
    "display: none; position: fixed; bottom: 18px; right: 18px; z-index: 1000; border: none; outline: none; background: none; cursor: pointer;"
  );

// Добавим плавность прокрутки к корневому элементу html
document.documentElement.setAttribute("style", "scroll-behavior: smooth;");

// Обработчик события прокрутки страницы
window.onscroll = () => scrollFunction();


// Функция вызывемая в момент прокрутки страницы
const scrollFunction = () => {
  // Выбираем из DOM нашу кнопку
  let upBtn = document.getElementById("toTop");
  // условия координат скрола
  if (
    document.body.scrollTop > 480 ||
    document.documentElement.scrollTop > 480
  ) {
    upBtn.style.display = "block";
  } else {
    upBtn.style.display = "none";
  }
}

// Когда Юзер кликает по кнопке то возвращаем его в самое начало страницы
const topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


const basketBtn = document.querySelector('.button-basket');
const modal = document.querySelector('.modal');
const exit = document.querySelector('.close');

// вызываем модалку по клику
basketBtn.addEventListener('click', function() {
  modal.classList.add('flex-active');
});
// убираем модалку по клику на крестик
exit.addEventListener('click', () => {
  modal.classList.remove('flex-active');
})



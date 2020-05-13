const start =
  ('DOMContentLoaded',
  () => {
    const header = document.querySelector('.nav-bar-list');
    const tab = document.querySelectorAll('.nav-bar-list li');
    const content = document.querySelectorAll('.content');
    const cards = document.querySelector('.cards');

    const button = document.querySelectorAll('.button');
    const popup = document.querySelector('.popup-container');

    // ! Анимация контента
    const hideShowContent = () => {
      function hideTabContent() {
        content.forEach((item) => {
          item.style.display = 'none';
        });

        tab.forEach((item) => {
          item.classList.remove('active');
        });
      }

      function showTabContent(i = 0) {
        content[i].style.display = 'block';
        tab[i].classList.add('active');
      }
      hideTabContent();
      showTabContent();

      header.addEventListener('click', (e) => {
        const target = e.target;
        tab.forEach((item, i) => {
          if (target == item || target.parentNode == item) {
            hideTabContent();
            showTabContent(i);
          }
        });
      });
    };

    hideShowContent();

    // !Смена темы
    const changeTheme = () => {
      let head = document.head,
        link = document.createElement('link');

      link.rel = 'stylesheet';

      // if (localStorage.getItem('themeStyle') === 'dark') {
      //     link.href = 'dark.css';
      //     document.getElementById('chek').setAttribute('cheked', true);
      // } else {
      //     link.href = 'white.css'
      // }

      head.appendChild(link);
      link.href = 'style/style.css';

      document.querySelector('.logo img').addEventListener('click', (ev) => {
        let btn = ev.target;
        console.log('object');
        if (btn.checked) {
          link.href = 'style/dark.css';
        } else {
          link.href = 'style/style.css';
        }
      });
    };

    changeTheme();

    // !Попап

    const popUp = document.querySelector('.popup-container');

    // const popUping = () => {
    //   for (const btn of button) {
    //     btn.addEventListener('click', () => {
    //       // popUp.classList.remove('close');
    //       // popUp.classList.add('open');
    //       popUp.style.display = 'flex';
    //     });
    //   }

    //   popUp.addEventListener('click', (e) => {
    //     if (e.target == popUp) {
    //       popUp.style.display = 'none';
    //       // popUp.classList.add('close');
    //       // popUp.classList.remove('open');
          
          
    //       // popUp.style.display = 'none';
    //     }
    //   });
    // };
    // popUping();
  });
start();

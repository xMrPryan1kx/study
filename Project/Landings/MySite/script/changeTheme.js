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

  document.getElementById('chek').addEventListener('change', (ev) => {
    let btn = ev.target;
    console.log('object');
    if (btn.checked) {
      link.href = 'dark.css';
    } else {
      link.href = 'style/style.css';
    }
  });
};

export default changeTheme;
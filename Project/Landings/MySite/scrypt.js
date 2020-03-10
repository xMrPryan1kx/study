const header = document.querySelector(".nav-bar-list");
const tab = document.querySelectorAll(".nav-bar-list li");
const content = document.querySelectorAll(".main div");


function hideTabContent() {
  content.forEach(item => {
    item.style.display = 'none';
  });

  tab.forEach(item => {
    item.classList.remove('active')
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
  })
})

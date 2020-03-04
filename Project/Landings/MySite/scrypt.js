const containerUl = document.querySelector('.nav-bar-list')
let main = document.querySelectorAll("main div");




function toggleActive(name) {
    const li = document.querySelectorAll("li");

    Array.from(li).forEach(item => {
        item.classList.remove('active')
    })
  name.classList.add("active");
  
}





// li[0].addEventListener("click", function() {
//   toggleActive(main[0]);
// });
// li[1].addEventListener("click", function() {
//   toggleActive(main[1]);
// });
// li[2].addEventListener("click", function() {
//   toggleActive(main[2]);
// });
// li[3].addEventListener("click", function() {
//   toggleActive(main[3]);
// });

function all(touch, render) {
  touch.addEventListener("click", function() {
    toggleActive(render);
  });
}

all(li[0], main[0])
all(li[1], main[1])
all(li[2], main[2])
all(li[3], main[3])



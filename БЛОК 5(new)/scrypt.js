

var div = document.getElementById('menu-icon');
var menu = document.getElementById('hidden-menu-container');

// function gruzin() {
//     menu.classList.add('nav-active');
//     alert('Работает');
// }

$('.menu-icon').click(function() {
    alert('Работает');
    $('hidden-menu-container').toggleClass('nav-active');
    
})





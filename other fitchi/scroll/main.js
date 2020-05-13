const scrollTo = (e) => {
    window.scrollTo({
        left: 0,
        top: e.offsetTop,
        behavior: 'smooth'
    })
}

const button = document.querySelector('.button')
const footer = document.querySelector('.footer')
button.addEventListener('click', () => {
    scrollTo(footer)
})
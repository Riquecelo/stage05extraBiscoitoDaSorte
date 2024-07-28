const biscoito = document.querySelector('.screen1 img')
const btn = document.querySelector('.screen2 button')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

console.log(biscoito)

biscoito.addEventListener('click', function(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
})

btn.addEventListener('click', function(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
})
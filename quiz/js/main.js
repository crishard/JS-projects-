const res01 = document.getElementById('correta1')
const incorreta1 = document.getElementById('incorreta1')
const incorreta11 = document.getElementById('incorreta11')
const incorreta111 = document.getElementById('incorreta111')


res01.addEventListener('click', function(){
    res01.classList.add('correta')
})

incorreta1.addEventListener('click', function(){
    incorreta1.classList.add('errada')
})

incorreta11.addEventListener('click', function(){
    incorreta11.classList.add('errada')
})
incorreta111.addEventListener('click', function(){
    incorreta111.classList.add('errada')
})

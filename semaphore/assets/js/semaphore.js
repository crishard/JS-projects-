const img = document.getElementById( 'img' );
const buttons = document.getElementById( 'buttons' );
let colorIndex = 0;
let intervalId = null;

const lamplight = ( event ) => {
    stopAutomatic();
    semaOn[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changeColor = () => {
    const colors = ['red','yellow','green']
    const color = colors[ colorIndex ];
    semaOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval ( intervalId );
}

const semaOn = {
    'red':      () => img.src = './assets/img/red.png',
    'yellow':   () => img.src = './assets/img/yellow.png',
    'green':    () => img.src = './assets/img/green.png',
    'automatic': () => intervalId = setInterval( changeColor, 1000 )
}

buttons.addEventListener('click', lamplight );



//outra solução sendo proposta


// const semaRed = document.getElementById('red');
// const semaYellow = document.getElementById('yellow');
// const semaGreen = document.getElementById('green');

// const bottons = document.getElementById('bottons')
// const semaphore = document.getElementById('semaphore');


// const sema = documen.getElementById('semaphore');

// function trafficLgth (event){
//     if(event.target.id ==  'red')
// } 


// bottons.addEventListener('click', trafficLgth)

// function semared(){

//     sema.scr = "./assets/img/red.jpg"

// }

// function semagreen(){

//     sema.scr = "./assets/img/green.jpg"

// }

// function semayellow(){

//     sema.scr = "./assets/img/yellow.jpg"

// }
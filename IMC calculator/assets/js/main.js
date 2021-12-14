const form = document.querySelector('#formulario');

form.addEventListener('submit', function(event){
    event.preventDefault();

    console.log('Enviado');
    setResultado('Hi guys');
})

function setResultado(msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<p>${msg}</p>`;
}
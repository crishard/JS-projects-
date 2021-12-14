const form = document.querySelector('#formul')

form.addEventListener('click', function(e){
    e.preventDefault();

    const inputPeso = document.querySelector('#Peso');
    const inputAltura = document.querySelector('#altura');


    const peso = Number(inputPeso);
    const altura = Number(inputAltura)

    if (!peso){
        setResultado('Peso inválido', false)
        return;
    }
    if(!altura){
        setResultado('Altura Inválida', false)
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true)
})
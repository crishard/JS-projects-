function clock(){

    function createSeconds (seconds){
        const date = new Date (seconds * 1000);
        return date.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    });
    }
    
    const clock = document.querySelector('.clock');
    let seconds = 0;
    let timer;
    
    function startclock(){
        timer = setInterval(function(){
            seconds ++;
            clock.innerHTML = createSeconds(seconds);
        }, 1000);
    }
    document.addEventListener('click', function(event){
        const element = event.target;
    
        if(element.classList.contains('start')){
            clock.classList.remove('paused');
            clearInterval(timer);
            startclock();
        }
        if(element.classList.contains('pause')){
            clock.classList.add('paused');
            clearInterval(timer);
        }
        if(element.classList.contains('restart')){
            clearInterval(timer);
            clock.classList.remove('paused');
            clock.innerHTML = '00:00:00';
            seconds = 0;
        }
    });
}
clock();
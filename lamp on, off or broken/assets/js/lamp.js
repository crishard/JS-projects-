//creact constant for actions 
const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const lamp = document.getElementById ( 'lamp' );

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}
// function to change the path from the image to the lit lamp when clicking the on button
function lampOn () { 
        lamp.src = './assets/img/on.jpg';
}
// function to change the path of the image to the lamp off by clicking the off button
function lampOff () {
        lamp.src = './assets/img/off.jpg';
}
// function to change the image path to the broken light bulb
function lampBroken () {
    lamp.src = './assets/img/broken.jpg';
}

//captures the click on the button on
turnOn.addEventListener ( 'click', lampOn );
//captures the click on the button ooff
turnOff.addEventListener ( 'click', lampOff );
//captures the action of hovering over the light bulb
lamp.addEventListener ( 'mouseover', lampOn );
//command for when the mouse is not over the lamp, the lamp remains off
lamp.addEventListener ( 'mouseleave', lampOff );
//captures the double click in lamp
lamp.addEventListener ( 'dblclick', lampBroken );
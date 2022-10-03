//  make variable 
let second;
let minute;
let hour;
let music = new Audio('clock.mp3');
let hr = document.querySelector('.hr');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');


// setInterval method run these function in every 1000 milliseconds (1 second)
setInterval(() => {
    currentTime();
    runColck();
}, 1000);


//  this method generate current time
const currentTime = ()=>{
    const date = new Date();
    second = date.getSeconds();
    minute = date.getMinutes();
    hour = date.getHours();

    if(hour>12){
        hour = hour-12;
    }
    music.play();
}

// this method will make clock active.
const runColck = ()=>{
    // music.play();

    hr.style.transformOrigin = 'bottom';
    hr.style.transform = `rotate(${hour * 30 + minute * 0.5}deg)`;

    min.style.transformOrigin = 'bottom';
    min.style.transform = `rotate(${minute *6}deg)`;
    
    sec.style.transformOrigin = 'bottom';
    sec.style.transform = `rotate(${second *6}deg)`;
}
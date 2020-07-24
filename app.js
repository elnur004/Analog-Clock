const HOUR = document.querySelector('#hour');
const MINUTE = document.querySelector('#minute');
const SECOND = document.querySelector('#second');

let date = new Date();
    console.log(date);          // To get the full local date on console (not a very useful)
    
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    console.log(`Hour: ${hour} Minute: ${minute} Second: ${second}`);   // To get the local date on console instead
    
    let hourPosition = (hour * 360 / 12) + (minute * (360 / 60) / 12);  /* ... + (minute * (360 / 60) / 12) means the hour arm moves along with the minute arm (avoid to the weird popping up action hour arm end of the full minute) */
    let minutePosition = (minute * 360 / 60) + (second * (360 / 60) / 60);  // ... + (second * (360 / 60) / 60) same action for the minute arm as the hour one
    let secondPosition = second * 360 / 60;

function runTheClock() {
    
    
    HOUR.style.transform = `rotate(${hourPosition}deg)`;
    MINUTE.style.transform = `rotate(${minutePosition}deg)`;
    SECOND.style.transform = `rotate(${secondPosition}deg)`;
}

let interval = setInterval(runTheClock, 1000);   // run the function every one second
const HOUR = document.querySelector('#hour');
const MINUTE = document.querySelector('#minute');
const SECOND = document.querySelector('#second');

/**********
 * Didn't add these variables inside the function. Because when arms reached the top, they reset to zero(spun back) everytime.
 **********/

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
    /******
    Inside this function we need to figure out exactly how many degrees each of these arms should move.
    Because now, we no longer relying on the 'dates' to tell us that position.
    And need to do this with pure math.
    *******/
    
    hourPosition =  hourPosition + (3 / 360);     // 360 / 12 = 30 (which is 30 devided 3600 seconds, so 30/3600 and take away the zeros)
    minutePosition = minutePosition + (6 / 60);   // (1/60) * 60 (Minute arm moves distance of one second over 60 seconds)
    secondPosition = secondPosition + 6;          // 360 / 60 = 6 (clock face has 360 degrees and divide by 60 seconds = 6 degrees)
    
    HOUR.style.transform = `rotate(${hourPosition}deg)`;
    MINUTE.style.transform = `rotate(${minutePosition}deg)`;
    SECOND.style.transform = `rotate(${secondPosition}deg)`;
}

let interval = setInterval(runTheClock, 1000);   // run the function every one second
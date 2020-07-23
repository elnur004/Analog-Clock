const HOUR = document.querySelector('#hour');
const MINUTE = document.querySelector('#minute');
const SECOND = document.querySelector('#second');

let hourPosition = 44;
let minutePosition = 146;
let secondPosition = 304;

let date = new Date();
console.log(date);          // To get the full local date on console (not a very useful)

let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
console.log(`Hour: ${hour} Minute: ${minute} Second: ${second}`);   // To get the local date on console instead

HOUR.style.transform = `rotate(${hourPosition}deg)`;
MINUTE.style.transform = `rotate(${minutePosition}deg)`;
SECOND.style.transform = `rotate(${secondPosition}deg)`;
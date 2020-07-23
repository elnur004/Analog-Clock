const HOUR = document.querySelector('#hour');
const MINUTE = document.querySelector('#minute');
const SECOND = document.querySelector('#second');

let hourPosition = 44;
let minutePosition = 146;
let secondPosition = 304;

HOUR.style.transform = `rotate(${hourPosition}deg)`;
MINUTE.style.transform = `rotate(${minutePosition}deg)`;
SECOND.style.transform = `rotate(${secondPosition}deg)`;
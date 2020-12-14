// End Date
const END_DATE = new Date("12/25/2020 00:00 AM");

// Dividers to get each date components
const _second = 1000;
const _minute = _second * 60;
const _hour = _minute * 60;
const _day = _hour * 24;
let timer;

function countDown() {
  const now = new Date(); // Current Time

  const distance = END_DATE - now; // Calculate remaining time

  if (distance < 0) {
    clearInterval(timer); // Stop if current time >= end date
  }

  // Get date component
  const days = Math.floor(distance / _day);
  const hours = Math.floor((distance % _day) / _hour);
  const minutes = Math.floor((distance % _hour) / _minute);
  const seconds = Math.floor((distance % _minute) / _second);

  // Update web elements
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
}

timer = setInterval(countDown, 1000); // Repeat every 1s

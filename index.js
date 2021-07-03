/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

const greeting = document.getElementById('greeting')

function displayMessage(message){
  greeting.innerText = message;
}
function greet(string) {
  let p = string.split(":");
  let time = parseInt(p);

  if(time < 12) {
    return `Good Morning`;
  }
  if(time > 17) {
    return `Good Evening`;
  }
  else {
    return `Good Afternoon`;
  }
}

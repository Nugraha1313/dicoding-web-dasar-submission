let date = new Date();
let n = date.toDateString();
let time = date.toLocaleTimeString();
document.getElementById('time').innerHTML = n + ' ' + time;
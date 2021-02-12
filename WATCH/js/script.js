var container = document.getElementById('watch-container');
var today = new Date();
var hours = today.getHours();
var mins = today.getMinutes();
var secs = today.getSeconds()
var greeting;
var msg = document.createElement('div');



if (mins < 10) {
    mins = '0' + mins;
}
if (hours < 10) {
    hours = '0' + hours;
}



if (hours > 18 ) {
    greeting = 'Good evening';
}else if (hours > 12) {
    greeting = 'Good afternoon';
} else {
    greeting = 'Good morning';
}

msg.innerHTML = hours + ':' + mins + '<br>' + greeting
container.appendChild(msg)
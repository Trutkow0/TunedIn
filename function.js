"use strict";

/*JavaScript functions
including current date and time, countdown, alert, and Math*/

/*--------------------------------------------------------------------*/

//Fucnction for Current Date and Time Clock
function runClock() {
        var currentDay = new Date();
        var dateStr = currentDay.toLocaleDateString();
        var timeStr = currentDay.toLocaleTimeString();

//Display for Current Date and Time Clock
document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;
}

//Set clock to count every second
setInterval(runClock, 1000);

/*---------------------------------------------------------------------*/

//Function for Countdown to March 15, 2024 at midnight
function runCountdown (){
        var endDate = new Date("March 15, 2024 00:00:00").getTime();
        var currentDate = new Date().getTime();

//Time difference in milliseconds
var timeDifference = endDate - currentDate;

//Calculate days, hours, minutes, and seconds for Countdown
var days = Math.floor(timeDifference / (1000 * 60 * 60 *24));
var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

document.getElementById("daysLeft").innerHTML = days;
document.getElementById("hrsLeft").innerHTML = hours;
document.getElementById("minsLeft").innerHTML = minutes;
document.getElementById("secsLeft").innerHTML = seconds;
}

setInterval(runCountdown, 1000);

/*----------------------------------------------------------------------*/

//Welcome Alert
window.alert("Welcome to Tuned In! \
This is the newest album and music review website \
bringing you the latest and greatest \
from a wide range of genres for music lovers of all kinds!");

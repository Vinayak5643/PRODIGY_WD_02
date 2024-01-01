let start = document.getElementById('start');
let stop = document.getElementById('stop');
let restart = document.getElementById('reset');
let laps = document.getElementById('laps');
let laps_con = document.querySelector('.laps-con');

let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById('timer');
let timer = null;

const currentDate = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDayOfWeek = currentDate.getDay();
const currentYear = currentDate.getFullYear();
const month = currentDate.getMonth();

const currentDayElement = document.getElementById('currentDay');
const currentYearElement = document.getElementById('currentYear');

currentDayElement.textContent = `Today is ${daysOfWeek[currentDayOfWeek]}`;
currentYearElement.textContent = `Month: ${month} Year: ${currentYear}`;

function btn(buttons){
    if(buttons == 'start'){
        start.style.backgroundColor = "white";
        start.style.color = "black";
        stop.style.backgroundColor = "gold";
        stop.style.color = "black";
        restart.style.backgroundColor = "gold";
        restart.style.color = "black";
        laps.style.backgroundColor = "gold";
        laps.style.color = "black";
    }

    if(buttons == 'stop'){
        stop.style.backgroundColor = "white";
        stop.style.color = "black";
        start.style.backgroundColor = "gold";
        start.style.color = "black";
        restart.style.backgroundColor = "gold";
        restart.style.color = "black";
        laps.style.backgroundColor = "gold";
        laps.style.color = "black";
    }

    if(buttons == 'restart'){
        restart.style.backgroundColor = "white";
        restart.style.color = "black";
        start.style.backgroundColor = "gold";
        start.style.color = "black";
        stop.style.backgroundColor = "gold";
        stop.style.color = "black";
        laps.style.backgroundColor = "gold";
        laps.style.color = "black";
    }

    if(buttons == 'laps'){
        laps.style.backgroundColor = "white";
        laps.style.color = "black";
        start.style.backgroundColor = "gold";
        start.style.color = "black";
        stop.style.backgroundColor = "gold";
        stop.style.color = "black";
        restart.style.backgroundColor = "gold";
        restart.style.color = "black";
    }
}

function stopWatch(){
    seconds++;
    if (seconds == 60){
        seconds = 0;
        minutes++;

        if (minutes == 60)
        {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    displayTime.innerHTML = h + ":" + m + ":" + s;
}

function watchStop(){
    clearInterval(timer);
}

function watchRestart(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
    document.getElementById('laps-con').innerHTML = ''; 
}


function watchStart(){
    if (timer!=null)
    {
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000);
}

function showLaps(){
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    const lapTime = `${h}:${m}:${s}`;
    const lapsContainer = document.getElementById('laps-con');
    const lapItem = document.createElement('div');
    lapItem.textContent = `Lap ${lapsContainer.children.length + 1}: ${lapTime}`;
    lapsContainer.appendChild(lapItem);
    lapItem.style.paddingBottom = '5px';
    lapItem.style.paddingTop = '5px';
}
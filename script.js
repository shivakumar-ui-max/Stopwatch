// Min & Sec & Millsec

const Min = document.getElementById('min');
const Sec = document.getElementById('sec');
const Millsec = document.getElementById('millsec');

// Action Buttons

const Start = document.getElementById('start');
const Stop = document.getElementById('stop');
const Pause = document.getElementById('pause');
const Reset = document.getElementById('reset');

Start.addEventListener('click',startTimer);
Stop.addEventListener('click',stopTimer);
Pause.addEventListener('click',pauseTimer);
Reset.addEventListener('click',resetTimer);

let minutes =0;
let seconds = 0;
let milliseconds = 0;
let interval;

function startTimer(){
  interval =  setInterval(updateTimer,10);
  Start.disabled = true;
  Stop.disabled = false;
  Pause.disabled = false;
}
function stopTimer(){
  clearInterval(interval);
    addToLapList();
    resetTimerData();
    Start.disabled = false;
    Stop.disabled = true;
    Pause.disabled = false;
}
function pauseTimer(){
  clearInterval(interval);
  Start.disabled = false;
}
function resetTimer(){
  clearInterval(interval);
  resetTimerData();
  Start.disabled = false;
}

function updateTimer(){
  milliseconds++;
  if(milliseconds > 99){
    seconds++;
    milliseconds =0;
    if(seconds > 60){
      minutes++;
      seconds=0
    }
  }
  displayTimer();
}

function displayTimer(){
  Sec.textContent=padTime(seconds);
  Min.textContent=padTime(minutes);
  Millsec.textContent=padTime(milliseconds);

}
function padTime(time){
  return time.toString().padStart(2,'0');
}
function resetTimerData(){
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    displayTimer();
}

function addToLapList(){
  const lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
  const listItem = document.createElement('li');
  listItem.innerHTML =  `<span>Lap ${lapList.childElementCount + 1}: </span>${lapTime}`;
    lapList.appendChild(listItem);
}
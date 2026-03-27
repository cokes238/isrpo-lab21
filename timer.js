const timerDisplay = document.getElementById("timerDisplay");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let seconds = 0;
let timerInterval = null;

function updateDisplay() {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    timerDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (timerInterval !== null) return;
    
    timerInterval = setInterval(function() {
        seconds++;
        updateDisplay();
    }, 1000);
}

function stopTimer() {
    if (timerInterval !== null) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    updateDisplay();
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

document.addEventListener("DOMContentLoaded", function() {
    updateDisplay();
});
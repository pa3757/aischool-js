let timer;
let totalSeconds;

document.getElementById("startButton").addEventListener("click", startTimer);

function startTimer() {
  clearInterval(timer);

  const hours = parseInt(document.getElementById("hourRange").value) || 0;
  totalSeconds = hours * 3600;

  if (totalSeconds > 0) {
    timer = setInterval(updateTimer, 1000);
  }
}

function updateTimer() {
  if (totalSeconds <= 0) {
    clearInterval(timer);
    alert("Time is up!");
    return;
  }

  totalSeconds--;

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById("timerDisplay").textContent = `${String(
    hours
  ).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
}

function updateHourValue(value) {
  document.getElementById("hourValue").textContent = value;
}

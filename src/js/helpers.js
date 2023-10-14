function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function runColorChange(evt) {
  evt.currentTarget.disabled = true;
  this.btnStop.disabled = false;

  intervalID = setInterval(() => {
    this.body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
}

function stopColorChange(evt) {
  evt.currentTarget.disabled = true;
  this.btnStart.disabled = false;
  clearInterval(intervalID);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function startCountDown() {
  timer.start();
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateTimerOutput({ days, hours, minutes, seconds }) {
  el.outputDays.textContent = days;
  el.outputHours.textContent = addLeadingZero(hours);
  el.outputMinutes.textContent = addLeadingZero(minutes);
  el.outputSeconds.textContent = addLeadingZero(seconds);
}

export { getRandomHexColor, runColorChange, stopColorChange, convertMs };

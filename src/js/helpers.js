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

export { getRandomHexColor, runColorChange, stopColorChange };

import { getRandomHexColor } from './helpers';

const el = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

let intervalID = '';
el.btnStop.disabled = true;

el.btnStart.addEventListener('click', runColorChange.bind(el));
el.btnStop.addEventListener('click', stopColorChange.bind(el));

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

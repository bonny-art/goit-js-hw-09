import { getRandomHexColor, runColorChange, stopColorChange } from './helpers';

const el = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

let intervalID = '';
el.btnStop.disabled = true;

el.btnStart.addEventListener('click', runColorChange.bind(el));
el.btnStop.addEventListener('click', stopColorChange.bind(el));

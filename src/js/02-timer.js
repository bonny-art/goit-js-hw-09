import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { convertMs } from './helpers';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const el = {
  startBtn: document.querySelector('[data-start]'),
  outputDays: document.querySelector('[data-days]'),
  outputHours: document.querySelector('[data-hours]'),
  outputMinutes: document.querySelector('[data-minutes]'),
  outputSeconds: document.querySelector('[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDates[0] <= new Date()) {
      el.startBtn.disabled = true;
      Notify.failure('Please choose a date in the future');
    } else {
      el.startBtn.disabled = false;
    }
  },
};

const datePicker = flatpickr('#datetime-picker', options);
el.startBtn.disabled = true;
el.startBtn.addEventListener('click', startCountDown);

class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.onTick = onTick;
  }

  start() {
    el.startBtn.disabled = true;
    const endTime = datePicker.selectedDates[0];
    this.onTick(convertMs(endTime - Date.now()));

    this.intervalId = setInterval(() => {
      this.onTick(convertMs(endTime - Date.now()));

      if (Date.now() + 1000 > endTime) {
        clearInterval(this.intervalId);
        Notify.success("You're in the future!");
      }
    }, 1000);
  }
}

const timer = new Timer({
  onTick: updateTimerOutput,
});

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

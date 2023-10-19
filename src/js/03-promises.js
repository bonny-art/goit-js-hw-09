import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', createPromices);

function createPromices(e) {
  e.preventDefault();
  const { delay, step, amount } = e.currentTarget.elements;

  for (let i = 0; i < amount.value; i += 1) {
    createPromise(i + 1, Number(delay.value) + Number(step.value) * i)
      .then(val => Notify.success(val))
      .catch(err => Notify.failure(err));
  }
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        res(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        rej(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

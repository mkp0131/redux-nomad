const plus = document.querySelector('.js-plus');
const minus = document.querySelector('.js-minus');
const countTag = document.querySelector('.js-count');

let count = 0;

const updateTxt = () => {
  countTag.innerHTML = count;
}

plus.addEventListener('click', () => {
  count++;
  updateTxt();
});
minus.addEventListener('click', () => {
  count--;
  updateTxt();
});
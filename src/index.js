import { createStore } from 'redux'

const plusTag = document.querySelector('.js-plus');
const minusTag = document.querySelector('.js-minus');
const countTag = document.querySelector('.js-count');

const add = 'add';
const minus = 'minus';

const counter = (state = 0, action) => {
  switch (action.type) {
    case add:
      return state + 1;
    case minus:
      return state - 1;
    default:
      return state;
  }
}

let store = createStore(counter);

store.subscribe(() => updateTxt(store.getState()))

const updateTxt = (txt) => {
  countTag.innerHTML = txt;
}

plusTag.addEventListener('click', () => {
  store.dispatch({ type: add })
});
minusTag.addEventListener('click', () => {
  store.dispatch({ type: minus })
});
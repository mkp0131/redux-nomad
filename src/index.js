const formTag = document.querySelector(".js-form");
const inputTag = document.querySelector(".js-input");
const listTag = document.querySelector(".js-list");
const todoList = [];

const updateList = () => {
  const items = todoList.map((item) => {
    return `<li>${item}</li>`;
  });
  console.log("items", items);
  listTag.innerHTML = items.join("");
};

const addList = (e) => {
  e.preventDefault();
  const value = inputTag.value;
  todoList.push(value);
  updateList();
  inputTag.value = "";
};

formTag.addEventListener("submit", addList);

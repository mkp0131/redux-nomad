import { createStore } from "redux";

const formTag = document.querySelector(".js-form");
const inputTag = document.querySelector(".js-input");
const listTag = document.querySelector(".js-list");

const todoList = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [{ todo: action.text, id: Date.now() }, ...state];
    case "delete":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

let store = createStore(todoList);

store.subscribe(() => {
  updateList(store.getState());
});

const deleteTodo = (id) => {
  store.dispatch({ type: "delete", id: id });
};

const updateList = (todoList) => {
  listTag.innerHTML = "";
  todoList.forEach((item) => {
    const li = document.createElement("li");
    const btnDelete = document.createElement("button");
    btnDelete.innerText = "삭제";
    btnDelete.addEventListener("click", () => {
      deleteTodo(item.id);
    });
    li.innerText = item.todo;
    li.appendChild(btnDelete);
    listTag.appendChild(li);
  });
};

const addList = (e) => {
  e.preventDefault();
  const value = inputTag.value;
  if (!value.length) return;
  store.dispatch({ type: "add", text: value });
  inputTag.value = "";
};

formTag.addEventListener("submit", addList);

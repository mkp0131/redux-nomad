import { createStore } from "redux";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [{ id: new Date().getTime(), todo: action.txt }, ...state];
    case "remove":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return [];
  }
};

const store = createStore(todoReducer);

const addTodo = (txt) => {
  return { type: "add", txt: txt };
};

const removeTodo = (id) => {
  return { type: "remove", id: id };
};

export const actionCreators = {
  addTodo,
  removeTodo,
};

export default store;

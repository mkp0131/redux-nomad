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

export const addTodo = (txt) => {
  return store.dispatch({ type: "add", txt: txt });
};

export const removeTodo = (id) => {
  console.log("id", id);
  return store.dispatch({ type: "remove", id: id });
};

export default store;

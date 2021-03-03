import { useState } from "react";
import { addTodo, removeTodo } from "../store";

const todo = ({ id, todo }) => {
  const onClick = () => {
    console.log("#", id);
    removeTodo(id);
  };

  return (
    <>
      <li id={id}>
        {todo}
        <button onClick={onClick}>삭제</button>
      </li>
    </>
  );
};

export default todo;

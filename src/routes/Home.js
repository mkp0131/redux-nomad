import { useState } from "react";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "../store";
import Todo from "../components/Todo";

const Home = ({ toDos }) => {
  const [todo, setTody] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    const {
      target: { value },
    } = e;
    setTody(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTody("");
  };

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={onSubmit}>
        <input value={todo} onChange={onChange} />
        <button>기록</button>
      </form>
      <ul>
        {toDos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            todo={todo.todo}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </>
  );
};

function mapStateToProps(state) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Home);

import { useState } from "react";

const Home = () => {
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
    console.log("submit");
  };

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={onSubmit}>
        <input value={todo} onChange={onChange} />
        <button>기록</button>
      </form>
    </>
  );
};

export default Home;

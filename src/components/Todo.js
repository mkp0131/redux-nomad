import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "../store";

const Todo = ({ id, todo, removeTodo }) => {
  return (
    <>
      <li id={id}>
        <Link to={`/${id}`}>{todo}</Link>
        <button onClick={removeTodo}>삭제</button>
      </li>
    </>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeTodo: () => dispatch(actionCreators.removeTodo(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(Todo);

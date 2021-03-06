import { connect } from "react-redux";

const Detail = ({ todo }) => {
  return (
    <>
      <h2>{todo?.id}</h2>
      <h3>{todo?.todo}</h3>
      <div>askdj</div>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return {
    todo: state.find((todo) => todo.id === parseInt(id)),
  };
};

export default connect(mapStateToProps)(Detail);

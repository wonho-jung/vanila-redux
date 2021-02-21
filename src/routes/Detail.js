import React from "react";
import { connect } from "react-redux";

const Detail = ({ toDo }) => {
  console.log(toDo);
  return (
    <div>
      <h1>{toDo?.text}</h1>
      <h5>id:{toDo?.id}</h5>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  console.log(id);
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
};

export default connect(mapStateToProps)(Detail);

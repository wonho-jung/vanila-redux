import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { add } from "../store";

const Home = ({ toDos, addToDo }) => {
  console.log(toDos);
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    addToDo(text);
  };
  return (
    <div>
      <h1>To do</h1>
      <form onSubmit={handleSubmit}>
        <input value={text} type="text" onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { toDos: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (text) => dispatch(add(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

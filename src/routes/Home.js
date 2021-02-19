import React, { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
  };
  return (
    <div>
      <h1>To do</h1>
      <form onSubmit={handleSubmit}>
        <input value={text} type="text" onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </div>
  );
};

export default Home;

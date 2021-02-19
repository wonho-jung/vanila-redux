import { createStore } from "redux";

const ADD = "ADD";
const DEL = "DEL";

export const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

export const deleteToDo = (id) => {
  return {
    type: DEL,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DEL:
      return state.filter((toDO) => toDO !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;

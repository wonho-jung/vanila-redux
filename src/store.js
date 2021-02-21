import { createStore } from "redux";

const ADD = "ADD";
const DEL = "DEL";

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DEL,
    id: parseInt(id),
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DEL:
      return state.filter((toDO) => toDO.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);
export const actionCreators = {
  addToDo,
  deleteToDo,
};
export default store;

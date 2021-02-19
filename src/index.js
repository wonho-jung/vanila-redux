import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = "0";
const counstModifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "add") {
    return count + 1;
  } else if (action.type === "minus") {
    return count - 1;
  } else {
    return count;
  }
};

// getState give you state value
const countStore = createStore(counstModifier);
console.log(countStore.getState());

// subscribe let you know when state change
const onChange = () => {
  console.log(countStore.getState(), "change point");
  number.innerText = countStore.getState();
};
countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: "add" });
};
const handleMinus = () => {
  countStore.dispatch({ type: "minus" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

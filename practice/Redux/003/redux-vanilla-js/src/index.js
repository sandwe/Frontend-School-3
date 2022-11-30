import {createStore} from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number");
const quantity = document.getElementById("quantity");
const totalPrice = document.getElementById("total");

const PRICE = 17500;

const addNumber = () => {
  store.dispatch({type: "ADD"});
};

const substractNumber = () => {
  store.dispatch({type: "SUBSTRACT"});
};

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "SUBSTRACT":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(countReducer);
let count = 0;

const handleWrite = () => {
  console.log(store.getState());
  number.innerText = store.getState();
  quantity.innerHTML = store.getState();
  totalPrice.innerHTML = store.getState() * PRICE;
};

store.subscribe(handleWrite);

// UI Update - text
// const updateResult = (c) => {
//   number.innerText = count;
//   quantity.innerHTML = c;
//   totalPrice.innerHTML = c * PRICE;
// };

// State Change
// const addNumber = () => {
//   count += 1;
//   minus.disabled = false;
//   updateResult(count);
// };

// State Change
// const substractNumber = () => {
//   count -= 1;
//   plus.disabled = false;
//   updateResult(count);
// };

// Init
// number.innerHTML = count;
// updateResult(count);

// Event
plus.addEventListener("click", addNumber);
minus.addEventListener("click", substractNumber);

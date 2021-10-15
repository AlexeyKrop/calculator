"use strict";
let numbs = [
  "1",
  "2",
  "3",
  "+",
  "4",
  "5",
  "6",
  "-",
  "7",
  "8",
  "9",
  "/",
  "0",
  "=",
  ".",
  "c",
];
let calc = document.getElementById("calc"),
  input = document.getElementById("input");
numbs.forEach((item) => {
  let element = document.createElement("div");
  element.className = "btn";
  element.setAttribute("value", item);
  element.innerHTML = item;
  calc.appendChild(element);
});
let buttons = document.querySelectorAll(".btn");
const buttonClick = (event) => {
  const target = event.target;
  console.log(target.innerHTML);
  if (target.innerHTML === "+") {
    input.value = target.innerHTML + target.innerHTML;
  }
  input.value += target.innerHTML;
};
buttons.forEach((button) => {
  button.addEventListener("click", buttonClick);
});
const getPlus = (a, b) => {
  return a + b;
};

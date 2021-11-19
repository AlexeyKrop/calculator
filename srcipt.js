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

calc.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.classList.contains("btn")) {
    return;
  }
  // if (input.value.search(/.{2}/) === -1) {
  //   return;
  // }
  if (target.innerHTML === "c") {
    input.value = "";
  } else if (target.innerHTML === "=") {
    input.value = eval(input.value);
  } else {
    input.value += target.innerHTML;
  }
});

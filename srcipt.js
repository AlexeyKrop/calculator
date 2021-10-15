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
  element.innerHTML = item;
  calc.appendChild(element);
});

"use strict";
const counter = document.querySelector(".count");
const increase = document.querySelector(".increasebtn");
const decrease = document.querySelector(".decreasebtn");
const reset = document.querySelector(".resetbtn");

let count = 0;

increase.onclick = function () {
  count++;
  counter.textContent = count;
};

decrease.onclick = function () {
  count--;
  counter.textContent = count;
};

reset.onclick = function () {
  count = 0;
  counter.textContent = count;
};

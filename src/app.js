/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  //write your code here
  document.getElementById("excuse").innerHTML =
    who[randomgenerator(who)] +
    " " +
    action[randomgenerator(action)] +
    " " +
    what[randomgenerator(what)] +
    " " +
    when[randomgenerator(when)];
  console.log("Hello Rigo from the console!");
};
function randomgenerator(multiply) {
  return Math.floor(Math.random() * multiply.length);
}

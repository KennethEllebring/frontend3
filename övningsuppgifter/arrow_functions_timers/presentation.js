/////////////////// Fat arrow function //////////////////////

const testFunction = () => {
  console.log("hej hej");
};

testFunction();

/////////////////// fat arrow - without curly brackets if it returns value at once //////////////////////

const double = (value) => value * 2;
console.log(double(4)); // 8

/////////////////// fat arrow - shortcut //////////////////////

const doubleTwo = (value) => value * 2;
console.log(doubleTwo(4)); // 8

/////////////////// fat arrow - with "higher order funtions" //////////////////////

/*
const filtered = products.filter((item) => item.color === event.target.dataset.color);
*/

/////////////////// Timers //////////////////////

/*
setTimeout() - Kör en funktion efter en viss tids väntan
setInterval() - Kör en funktion regelbundet med ett visst intervall
*/

/////////////////// Timers - setTimeout() //////////////////////

// const timerId = setTimeout(function () {
//   console.log("Hello!");
// }, 1000);

/*
or.
*/

function sayHi() {
  console.log("Hello!");
}
const timerId = setTimeout(sayHi, 1000);

/////////////////// Timers - clearTimeout //////////////////////

/*
const timerId = setTimeout(...)
clearTimeout(timerId)
*/

/////////////////// Timers - setInterval() //////////////////////

/* 
const intervalId = setInterval(function () {
  console.log("Hello!");
}, 1000);

*/ // -> prints hello once every 1sek

/////////////////// Timers - clearInterval //////////////////////

/*
const intervalId = setInterval(...)
clearInterval(intervalId)
*/

/////////////////// Destructuring assignment //////////////////////

/*
Den här syntaxen kommer ni att se en del:
const [a, b] = array;
Eller:
const { a, b } = obj;
Det som händer här är att vi kan peka på array items, eller props i ett objekt, och spara en referens till dem i variabler. 
*/

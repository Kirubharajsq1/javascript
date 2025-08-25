"use strict";

/*
//Pass by value && Pass by reference
const flight = "LH123";
const jonas = {
  name: "Kirubhakaran",
  passport: "3270176023339600",
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Jonas";
  passenger.passport = 7894561230;
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas);
console.log(jonas);

*/
/*
//Default Params
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = { flightNum, numPassengers, price };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 5);
createBooking("LH123", 2, 5);
*/

/*
console.log(193300);
console.log(18 * 6437 + 24 * 6437);
console.log(18 * 6437);
console.log(18 + 24);

console.log((270354 - 193300) / 42);

function count() {
  let counter = 0;
  return function () {
    counter++;
  };
}
console.log(count());

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//Higher Order Function
const transformer = function (str, fn) {
  console.log(`Original string  : ${str}`);
  console.log(`Transformed string  : ${fn(str)}`);
  console.log(`Transformed by  : ${fn.name}`);
};

transformer("Javascript is the best!", upperFirstWord);
transformer("kirubha karan", oneWord);


//JS uses callbacks all the time
const high5 = function () {
  console.log("👋");
};

document.body.addEventListener("click", high5);

[("jonas", "kirubha", "adam")].forEach(high5);
*/

/*
//Functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const hey = greet("Hey");
hey("Kirubha");
hey("Varadha");

greet("Hello")("Kirubha");

const greetArr = (greeting) => (name) => {
  console.log(`${greeting} ${name}`);
};

greetArr("Hello")("Kirubha");
*/
/*

//The call and apply methods
const lufthansa = {
  airplane: "lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airplane} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(239, "jonas");
lufthansa.book(635, "kirubha");
console.log(lufthansa.bookings);

const eurowings = {
  airplane: "Eurowings",
  iataCode: "EU",
  bookings: [],
};

const book = lufthansa.book;

//Does NOT work
//book(23, "kirubha");

book.call(eurowings, 23, "jonas");
console.log(eurowings);

book.call(lufthansa, 777, "coolie");
console.log(lufthansa);

const swiss = {
  airplane: "Swiss",
  iataCode: "SW",
  bookings: [],
};

book.call(swiss, 23, "jonas");
console.log(swiss);

//Apply method
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);

console.log(swiss);

book.call(swiss, ...flightData);
console.log(swiss);

const bookEW = book.bind(eurowings);
const bookLT = book.bind(lufthansa);
const bookSW = book.bind(swiss);
bookEW(23, "eurowings");
bookLT(25, "lufthansa");
bookSW(7, "swiss");

const bookEW23 = book.bind(eurowings, 12345);
bookEW23("Jonas");
bookEW23("Maratha Cooper");

//With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

lufthansa.buyPlane();
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

console.log(lufthansa);

//Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);

console.log(addVat(10));
console.log(addVat(100));

console.log(10 + 10 * 0.23);
console.log(100 + 100 * 0.23);

function addTax1(rate) {
  return function addVat1(value) {
    console.log(value + value * rate);
  };
}

const addTax2 = (rate) => (value) => console.log(value + value * rate);

addTax1(10)(20);
addTax2(20)(400);

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVat2 = addTaxRate(10);
console.log(addVat2(10));
console.log(addVat2(20));
*/

/*
//IIFE
function runOnce() {
  console.log("This will never run again");
}

runOnce();

(function () {
  console.log("This will never run again");
  const isPrivate = 1;
})();

//console.log(isPrivate);

(() => console.log("This will also never run again"))();

{
  var notPrivate = 46;
  const isPrivate = 23;
}

console.log(notPrivate);
*/

//Closures in EC

/*
//Example 1: 
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

//Re-assign function of f
h();
f();
console.dir(f);

*/

//Example 2:
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);

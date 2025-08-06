"use strict";
/* Types of Scopes => Global Scope, Function Scope(Local Scope), Block Scope

function calcAge(birthYear) {
  const age = 2025 - birthYear;

  function printAge() {
    let output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1980 && birthYear <= 1998) {
      var millenial = true;
      const firstName = "Karan";
      output = "Test";
      const str = `Oh, and you're the millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }
    //console.log(str);
    console.log(millenial);
    console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = "Kirubha";
calcAge(1997);

*/

/*
//Hoisting

//Variables
console.log(me);
//console.log(job);
//console.log(year);

var me = "Kirubha";
let job = "Developer";
const year = 1997;

//Functions
console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//Example
console.log(typeof numProducts);
if (!undefined) console.log(true);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

var x = 10;
let y = 20;
const z = 30;

console.log(x === window.x);
*/

/*
//THIS keyword

//"use strict";

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2025 - birthYear);
//   console.log(this);
// };
// calcAge(1997);

// const calcAgeArrow = (birthYear) => {
//   console.log(2025 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1997);

const kirubha = {
  year: 1997,
  calcAge: function () {
    console.log(this);
    return 2025 - this.year;
  },
};
console.log(kirubha.calcAge());

const varadha = {
  year: 1996,
};
varadha.calcAge = kirubha.calcAge;
console.log(varadha);
console.log(varadha.calcAge());

*/

/*
//Regular functions vs Arrow functions

// var firstName = "karan";
// const kirubha = {
//   firstName: "Kirubha",
//   year: 1997,
//   calcAge: function () {
//     //console.log(this);

//     //Solution 1
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1980 && self.year <= 1998);
//     // };

//     //Solution 2
//     const isMillenial = () => {
//       console.log(this.firstName);
//       console.log(this.year >= 1980 && this.year <= 1998);
//     };

//     isMillenial();
//     return 2025 - this.year;
//   },
//   greet: () => {
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// console.log(kirubha.calcAge());
// kirubha.greet();

// console.log(a);
// //console.log(b);
// //console.log(c);

// var a = "apple";
// let b = "orange";
// const c = "banana";

*/

/*
//Arguments
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 3);

*/

//Object References (Shallow copy Vs Deep Copy)

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica, "Davis");

// const marriedJessica = jessica;
// marriedJessica.lastName = "Davis";

//console.log("Before", jessica);
//console.log("After", marriedJessica);

const marry = {
  firstName: "Phoenix",
  lastName: "Marie",
  age: 27,
  family: ["Alice", "Bob"],
};

//Shallow Copy
const marryCopy = { ...marry };
// marryCopy.lastName = "John";
// marryCopy.family.push("Peter");
// marryCopy.family.push("Sasha");

//Deep Copy/Clone
const marryClone = structuredClone(marry);
marryClone.lastName = "Stone";
marryClone.family.push("Lisa");
marryClone.family.push("Jesse");

console.log(marry);
//console.log(marryCopy);
console.log(marryClone);

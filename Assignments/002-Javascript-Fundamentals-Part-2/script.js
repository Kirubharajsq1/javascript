/*
// "use strict";

let hasDriversLicense = false;
const passtest = true;

if (passtest) hasDriverLicense = true;
console.log("I can drive : D");

*/

/*
//Functions

function logger() {
  console.log("My name is kirubha");
}

logger();
logger();
logger();

function friutProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = friutProcessor(10, 0);
console.log(appleJuice);

const orangeJuice = friutProcessor(0, 10);
console.log(orangeJuice);

*/

/*
//Function Declaration & Function expression

//Function Declaration
function calcAge1(birthYear) {
  return 2025 - birthYear;
}

const dhoniAge = calcAge1(1981);
console.log(dhoniAge);

//Function expression
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};

const SakshiAge = calcAge1(1988);
console.log(dhoniAge, SakshiAge);
*/

/*
//Arrow Functions

const age = (birthYear) => 2025 - birthYear;
const kirubhaAge = age(1997);
console.log(kirubhaAge);

const yearsuntilRetirement = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement}`;
};

const kirubhaRetirement = yearsuntilRetirement(1997, "Kirubhakaran");
console.log(kirubhaRetirement);
*/
/*
//Functions calling another function
const cutPieces = function (fruit) {
  return fruit * 4;
};

const friutProcessor = function (apples, oranges) {
  const applePieces = cutPieces(5);
  const orangePieces = cutPieces(4);

  const juice = `juice with ${applePieces} pieces of apples and ${orangePieces} of oranges`;

  return juice;
};

console.log(friutProcessor(5, 20));
*/

/*
//Function Declaration : Function that can be used before its declare
function calcAge1(birthYear) {
  return 2025 - birthYear;
}

//Function Expression : Essentially function value stores in a variable
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};

//Arrow Function : Great  for one-line functions 
const calcAge3 = (birthYear) => 2025 - birthYear;

*/

/*
//Array
const friends = ["Dhoni", "Steven", "Peter"];
console.log(friends);
const birthYear = new Array(2025, 2015, 2005);
console.log(birthYear);
console.log(friends.length);
console.log(friends[friends.length - 1]);
friends[2] = "Batman";
console.log(friends);

const firstName = "Kirubha";
const jonas = [firstName, "Karan", 2025 - 1997, "developer", friends];
console.log(jonas);
console.log(jonas.length);

*/

/*
//Basic Array Operations

//Add Elements
const friends = ["sowmi", "dharmadurai"];
friends.push("thamarai");
console.log(friends);
console.log(friends.length);
friends.unshift("kirubha");
console.log(friends);

//Remove Elements
friends.pop();
console.log(friends);
friends.shift();
console.log(friends);

//Position of an element
console.log(friends.indexOf("dharmadurai"));

//Check if element exists or not
console.log(friends.includes("sowmi"));
console.log(friends.includes("kirubha"));

*/

/*
//objects
const kirubha = {
  firstName: "Kirubhakaran",
  lastName: "R",
  age: 2025 - 1997,
  job: "Developer",
  friends: ["Thamarai", "Sowmi", "Dharmadurai"],
};

console.log(kirubha);

console.log(kirubha.firstName);
console.log(kirubha["job"]);

//Dot Notation
kirubha.location = "Chennai";

//Bracket Notation
kirubha["twitter"] = "@kirubharajkumar";

console.log(kirubha);

console.log(
  `${kirubha.firstName} has ${kirubha.friends.length} friends, and his best friend is called ${kirubha.friends[0]}.`
);
*/

/*
//Objects Methods
const kirubha = {
  firstName: "Kirubhakaran",
  lastName: "R",
  birthYear: 1997,
  job: "Developer",
  friends: ["Thamarai", "Sowmi", "Dharmadurai"],
  hasDriversLicense: true,
  // calcAge: function () {
  //   return 2025 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${kirubha.firstName} is a ${kirubha.calcAge()}-year old ${
      kirubha.job
    }, and he has ${
      kirubha.hasDriversLicense ? "a" : "no"
    }  a driver's license`;
  },
};

// console.log(kirubha.calcAge());
// console.log(kirubha.age);
//console.log(kirubha["calcAge"](1997));

console.log(kirubha.getSummary());
*/

//Loops

//For loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights reps ${rep} 🏋️‍♂️`);
}

//Array Loop
const kirubha = [
  "Kirubhakaran",
  "R",
  1997,
  "Developer",
  ["Thamarai", "Sowmi", "Dharmadurai"],
];
let types = [];

// For Loop
for (let i = 0; i <= kirubha.length - 1; i++) {
  //types[i] = typeof kirubha[i];
  types.push(typeof kirubha[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i <= years.length - 1; i++) {
  ages.push(2025 - years[i]);
}
console.log(ages);

//Break & Continue
console.log(/********** Break & Continue */);
for (let i = 0; i <= kirubha.length - 1; i++) {
  console.log(typeof kirubha[i]);
  if (typeof kirubha[i] === "number") continue;
  console.log(kirubha[i]);
}

//Backward Loop
for (let i = kirubha.length - 1; i >= 0; i--) {
  console.log(kirubha[i], typeof kirubha[i]);
}

//Nested Loop
for (let i = 1; i <= 3; i++) {
  console.log(`-----Excercise ${i}-----`);
  for (let j = 1; j <= 5; j++) {
    console.log(`Lifting weights reps ${j}`);
  }
}

//While Loops
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights reps ${rep} 🏋️‍♂️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled the dice ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`loop is about to an end ...`);
}

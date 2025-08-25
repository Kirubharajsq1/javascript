"use strict";

// Data needed for first part of the section
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,
  order(starterMenuIndex, mainMenuIndex) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  },
  orderDelivery({
    starterMenuIndex,
    mainMenuIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterMenuIndex]} and ${this.mainMenu[mainMenuIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

/*
//Object keys,values and entries

//Keys
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day},`;
}

console.log(openStr);

//Values
const values = Object.values(openingHours);
console.log(values);

//Entries
const entries = Object.entries(openingHours);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

/*
//Optional Chaining
console.log(restaurant?.openingHours?.mon?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}
*/

/*

//////Spread Operator/////
const arr = [1, 2, 3];
console.log(arr);
const badNewArr = [4, 5, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [4, 5, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, "Fried Rice"];
console.log(newMenu);

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//Iterables: Array,strings,maps,sets. Not objects
const str = "Kirubha";
const letters = [...str, "", "S."];
console.log(letters);

const newRestaurant = { ...restaurant, foundedIn: 1997, founder: "Kirubha" };
console.log(newRestaurant);

//Destructuring

//Spread, because on RIGHT side of =
const spArr = [1, 2, ...[3, 4]];
console.log(spArr);

//Rest,because on LEFT side of =
const [a, b, ...c] = [1, 2, 3, 4, 5];
console.log(a, b, c);

const [Pizza, , Risotto, ...othersFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(Pizza, Risotto, othersFoods);

//Objects
const { fri, ...weekDays } = { ...restaurant.openingHours };
console.log(fri);
console.log(weekDays);

//Functions

const add = (...numbers) => {
  let sum = 0;
  for (let i = 0; i <= numbers.length - 1; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(1, 2, 3);
add(1, 2, 3, 4, 5);
add(1, 2, 3, 4, 5, 6, 7);

const x = [2, 4, 6];
add(...x);

restaurant.orderPizza("mushroom", "onion", "chicken");
restaurant.orderPizza("mushroom");

///////////OR////////////
console.log(3 || "Kirubha");
console.log("" || "Kirubha");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "Kirubha" || 23 || null);

//restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

///////////AND////////////
console.log(0 && "Kirubha");
console.log(7 && "Kirubha");
console.log("Kirubha" && 7 && null && "karan");

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushroom", "spinash");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms");

//Nullish : null or undefined (NOT 0 or '')
const guests3 = restaurant.numGuests ?? 10;
console.log(guests3);

// Logical Assignment Operators
const rest1 = {
  name: "Capri",
  numGuests: 20,
};

const rest2 = {
  name: "La Pizza",
  owner: "Rossi",
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 20;

rest1.numGuests ||= 10;
rest2.numGuests ||= 20;

console.log(rest1);
console.log(rest2);

// restaurant.orderDelivery({
//   time: 22.3,
//   address: "old street, kumaramangalam",
//   mainMenuIndex: 2,
//   starterMenuIndex: 2,
// });

// restaurant.orderDelivery({
//   address: "old street, kumaramangalam",
//   starterMenuIndex: 2,
// });

*/

/*

/////////////Destructuring Objects///////////////
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

//Default Values
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

//Mutating variables
let a = 111;
let b = 222;
const obj = { a: 23, b: 7, c: 54 };
({ a, b } = obj);
console.log(a, b);

//Nested Objects
const { fri } = openingHours;
console.log(fri);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

*/

/*
/////////////Destructuring Arrays///////////////
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = [1, 2, 3];
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = main;

// console.log(main, secondary);

[secondary, main] = [main, secondary];

console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [1, 2, [1, 2]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

const [p = 1, q = 1, r = 0] = [7, 8];
console.log(p, q, r);

*/

/*
//Array for-of loop
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1} : ${el}`);
}

*/

/*
//Set
const orderSet = new Set(["Pizza", "Pizza", "Burger", "Burger", "cake", "bun"]);
console.log(orderSet);

console.log(new Set("Jonas"));

console.log(orderSet.size);
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));
orderSet.add("Garlic Bread");
console.log(orderSet);
orderSet.delete("bun");
//orderSet.clear();
console.log(orderSet);

for (const order of orderSet) {
  console.log(order);
}

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);

console.log(new Set(staff).size);
console.log(new Set("kirubhakaran").size);
*/

/*
///Set Method

const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

//New Operations to make set useful
//Intersection
const commomFoods = italianFoods.intersection(mexicanFoods);
console.log([...commomFoods]);

//Union
const italianMexiconFusion = italianFoods.union(mexicanFoods);
console.log([...italianMexiconFusion]);

//Difference
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log([...uniqueItalianFoods]);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log([...uniqueMexicanFoods]);

const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log([...uniqueItalianAndMexicanFoods]);
*/

/*
//Map Method
const rest = new Map();
rest.set("name", "Varadha");
rest.set(1, "chennai");
rest.set(2, "villupuram");

rest
  .set("categories", ["veg", "non veg"])
  .set(true, "We are open : D")
  .set(false, "We are closed : D")
  .set("open", 11)
  .set("close", 23);

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

const question = new Map([
  ["question", "What is best programmimg language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct🎉"],
  [false, "Try again!"],
]);

console.log(question);

const hoursMap = Object.entries(openingHours);
console.log(hoursMap);

//Quizz App
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key} : ${value}`);
  }
}
const answer = Number(prompt("Your answer"));

question.get("correct") === answer
  ? console.log(question.get(true))
  : console.log(question.get(false));

//Convert map to Array
console.log([...question]);
//console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
*/

/*
//String - Part III
console.log("a+very+nice+string".split("+"));
console.log("Kirubha Karan".split(" "));

const [firstName, lastName] = "Kirubha Karan".split(" ");
console.log(firstName, lastName);

const newName = ["Mr.", firstName.toUpperCase(), lastName.toUpperCase()].join(
  " "
);
console.log(newName);

const captilizename = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

captilizename("jessica ann smith davis");
captilizename("kirubha karan");

//Padding
const message = "Go to gate 23";
console.log(message.padStart(25, "+").padEnd(25, "+"));

const maskCreditCard = function (card) {
  const str = card + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard("3200 1760 2333 9666"));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
};

planesInLine(5);
planesInLine(7);

*/

/*

//String - Part II
const airline = "TAP Air portugal";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix Capitalization in name
const passengerName = "kIrUbHa";
const lowerCaseName = passengerName.toLowerCase();
const correctName = lowerCaseName[0].toUpperCase() + lowerCaseName.slice(1);
console.log(correctName);

//Comparing emails
const email = "hello@kirubha.io";
const loginEmail = "  Hello@Kirubha.IO  \n";

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(email === trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//Replacing
const priceGB = "288,93£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");

console.log(priceGB);
console.log(priceUS);

const announcement =
  "All passengers come to barding door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate"));
//console.log(announcement.replaceAll("door", "gate"));

console.log(announcement.replace(/door/g, "gate"));

//Boolean
const airPlane = "Air A320neo";
console.log(airPlane.includes("A320"));
console.log(airPlane.includes("Boeing"));
console.log(airPlane.startsWith("Air"));

if (airPlane.startsWith("Air") && airPlane.endsWith("neo")) {
  console.log(`Part of the New Air Bus Family`);
}

//Practice Excercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife" || baggage.includes("gun"))) {
    console.log("You are not allowed into the board");
  } else {
    console.log("Welcome Board!");
  }
};

checkBaggage("I have a laptop,some Food and a Pocket Knife");
checkBaggage("Socks and Camera");
checkBaggage("Got some snacks and a gun for protection");

*/

/*
//String - Part I

const airline = "TAP Air portugal";
const plane = "A320";

console.log(airline);
console.log(plane);

console.log(plane[0]);
console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log(`You got middle seat 🥲`);
  } else {
    console.log(`You are lucky 😍`);
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("jonas"));
console.log(typeof new String("jonas"));
*/

/* 
///////////////////////////////////////
// Coding Challenge #4


Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀




document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});

*/

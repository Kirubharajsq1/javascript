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
  opencingHours,
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

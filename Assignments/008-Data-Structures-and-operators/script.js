// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
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
  },
  order: function (starterMenuIndex, mainMenuIndex) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  },
  orderDelivery: function ({
    starterMenuIndex,
    mainMenuIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterMenuIndex]} and ${this.mainMenu[mainMenuIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: 22.3,
  address: "old street, kumaramangalam",
  mainMenuIndex: 2,
  starterMenuIndex: 2,
});

restaurant.orderDelivery({
  address: "old street, kumaramangalam",
  starterMenuIndex: 2,
});

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

const monica = {
  firstName: "Monica",
  lastName: "Belluci",
  age: 27,
  friends: ["Alice", "Bob"],
};

// const monicaCopy = monica;
// monicaCopy.lastName = "Jessi";
// console.log(monica);
// console.log(monicaCopy);

//Shallow copy
// const monicaCopy = { ...monica };
// monicaCopy.lastName = "Jesse";
// monicaCopy.friends.push("Varadha");
// console.log(monica);
// console.log(monicaCopy);

//Deep Copy
const monicaCopy = structuredClone(monica);
monicaCopy.lastName = "Jesse";
monicaCopy.friends.push("Varadha");
console.log(monica);
console.log(monicaCopy);

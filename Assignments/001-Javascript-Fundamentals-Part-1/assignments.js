/*
//Datatypes = Primitive and objects

//Primitive
let age = 28; //Numbers
let firstName = "dhonikaran"; //Strings
let single = false; //Boolean
let children; //Undefined
let salary = null; //Null
//Symbol 
//  Big Int

//Objects
let education = [
  "sengunthar matric higher secondary school",
  "sengunthar college of engineering",
]; // Objects
let number = 1112444444444678976543578884334567899876543234567898764346789876543444445278555552;



console.log("age", age);
console.log("firstName", firstName);
console.log("single", single);
console.log("children", children);
console.log("salary", salary);
console.log("education", education);
console.log(number);

console.log(typeof age);
console.log(typeof firstName);
console.log(typeof single);
console.log(typeof children);
console.log(typeof salary);
console.log(typeof education);
console.log(typeof number);
console.log(typeof null);

*/

/*
const now = 2025;
const dhoniAge = now - 1997;
const sakshiAge = now - 2002;

console.log(dhoniAge);
console.log(sakshiAge);

console.log(dhoniAge * 2, dhoniAge / 2, 2 ** 3);

const firstName = "dhonikaran";
const lastName = "R";
console.log(firstName + " " + lastName);

//Assignment Operator
let x = 10 + 5;
x += 10;
console.log(x);
x *= 4;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);

//Comparison Operator
console.log(dhoniAge > sakshiAge);
console.log(dhoniAge >= 29);
console.log(sakshiAge <= 22);
console.log(now - 1997 > now - 2018);

console.log(typeof "kirubha");
console.log(typeof 12);
console.log(typeof null);
console.log(typeof ["kirubha", "varadha"]);

*/

/*
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const now = 2025;
const dhoniAge = now - 1997;
const sakshiAge = now - 2002;

const averageAge = dhoniAge - sakshiAge / 2;
console.log(dhoniAge, sakshiAge, averageAge);

console.log(typeof averageAge);
console.log(typeof null);

*/

/*
const firstName = "Kirubhakaran";
const job = "Developer";
const year = 1997;
const now = 2025;

const description =
  "I'm " + firstName + " a " + (now - year) + "years old " + job + "!";

const description1 = `I'm ${firstName} a ${now - year} years old ${job} !`;

console.log(description1);
console.log(description);

console.log(`Kirubhakaran
  R
  Developer`);

  */

/*

const age = 18;
const drivingAge = age >= 18;

if (drivingAge) {
  console.log(`Sarah can apply license`);
} else {
  console.log(`Sarah can wait ${18 - age} years to apply license`);
}

*/

/*

//Type Conversion
const year = "2025";
console.log(Number(year), year);
console.log(Number(year) + 10);
console.log(Number(2));
console.log(typeof NaN);
console.log(String(20), 20);

//Type Coercion
console.log("I am " + 28 + " years old");
console.log("I am " + "28" + " years old");
console.log("I am " + String(28) + " years old");

console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" * 2);
console.log("22" / 2);

let n = "1" + 1;
n = n - 1;
console.log(n);

console.log(10 + 7 + 8 + "5");

*/

/*
//Falsy Values : 0,'',null,NaN,undefined
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(""));

//Truly Values : 1,'any_text',{}
console.log(Boolean({}));
console.log(Boolean(1));
console.log(Boolean("Kirubhakaran"));

const job = 0;
if (job) {
  console.log("Don't spend it all");
} else {
  console.log("You don't get a job");
}

let height;
console.log(Boolean(height));
if (height) {
  console.log("Height is Defined");
} else {
  console.log("Height is not defined");
}

*/

/*
const age = "18";
if (age == 18) console.log("Sasha age is an adult");
if (age !== 18) console.log("Sasha is not an adult");

const favourite = Number(prompt("What is your favourite number"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 7) {
  console.log(`${favourite} is amazing number`);
} else if (favourite === 23) {
  console.log(`${favourite} is amazing number`);
} else {
  console.log("Number is not an 23 or 7");
}

if (favourite !== 23) console.log("Why not 23 ?");


*/
/*
const hasDriverLicense = true;
const hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);
console.log(!hasGoodVision);

const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Prepare DSA");
  case "Tuesday":
    console.log("Prepare Javascript");
  case "Wednesday":
    console.log("Prepare Python");
  default:
    console.log("Not a valid day");
}
*/
/*
//Statement & Expersion

3 + 5 + 8; // Expression returns the value
if (1 > 0) {
  console.log("Statement");
}
*/

//Ternary Operator

const age = 23;
const drink = age >= 18 ? "Wine 🍷" : "Water 💧";
console.log(drink);

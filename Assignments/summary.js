//=====================Start of Javascript Fundamentals Part-I===============//

//==============Start of Datatypes=============/

//Primitive Datatype
console.log(typeof 23);
console.log(typeof "Kirubha");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof BigInt(123456789));
console.log(typeof Symbol("Kirubha"));

//Objects
let kirubha = {
  name: "Kirubha",
  birthYear: 1997,
  isMarried: true,
  age: function () {
    return 2025 - this.birthYear;
  },
};
console.log(typeof kirubha);

//==============End of Datatypes=============/

//==============Start of Assinment Operator=============/
let ax = 30 + 5;
let ay = 10;
ax += 10;
console.log(ax);
ax *= 10;
console.log(ax);
ax++;
console.log(ax);
ax--;
console.log(ax);

//==============End of Assinment Operator=============/

//==============Start of Comparison Operator=============/

console.log(10 > 5); //Greater Than
console.log(10 < 5); // Lesser Than
console.log(10 >= 10);
console.log(10 <= 10);
console.log(2025 - 1997 > 2025 - 2002);
let age = (2025 - 1997 - (2025 - 2002)) / 2;
console.log(typeof age);
console.log(typeof null);

//==============End of Comparison Operator=============/

//==============Start of Template literals=============/

//Definition : Template literals are a way to create strings in JavaScript with enhanced features like multi-line support, variable interpolation, and expression embedding. They are enclosed in backticks (`) instead of single (') or double (") quotes.

const tlFirstName = "Kirubha";
const tlJob = "Developer";
const tlBirthYear = 1997;

console.log(`I am ${tlFirstName} a ${2025 - tlBirthYear} years old ${tlJob}`);

//==============End of Template literals=============/

//==============Start of Type Conversion=============/

//Type conversion in JavaScript refers to changing a value from one data type to another.

//Definition : This is explicit conversion where you manually convert a value to another type.

const year = "2025";
console.log(Number(year), year);
console.log(Number(year));
console.log(typeof year);
console.log(typeof Number(year));
console.log(String(20));
console.log(typeof NaN);
//==============End of Type Conversion=============/

//==============Start of Type Coercion=============/

//Definition : This is implicit conversion where JavaScript automatically converts data types.

console.log("I am " + 28 + " years old");
console.log("I am " + "28" + " years old");
console.log("I am " + String(28) + " years old");

console.log("25" - "10" - 3);
console.log("23" * 2);
console.log("24" / 2);
console.log("23" + "10");
console.log(Number("23") + Number("10"));
console.log(10 + 7 + 8 + "5");

let tcon = "1" + 1;
tcon = tcon - 1;
console.log(tcon);
//==============End of Type Coercion=============/

//==============Start of Falsy Values=============/

//Definition : In JavaScript, falsy values are values that evaluate to false when converted to a boolean (e.g., in if conditions).

//Falsy Values:0,null,"",NaN,undefined,-0,0n
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(-0));
console.log(Boolean(0n));

//==============End of Falsy Values=============/

//==============Start of Truthy Values=============/

//Definition : In JavaScript, truthy values are values that evaluate to true when converted to a boolean (e.g., in if conditions).

console.log(Boolean("kirubha"));
console.log(Boolean(true));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(1));
console.log(Boolean(Infinity));

//==============End of Truthy Values=============/

//=========Start of If Statement=========/
let simonAge = "28";
if (simonAge == 28) console.log(`Simon is ${simonAge} years old`); // Type coersion
if (simonAge === 28) console.log(`Simon is ${simonAge} years old`);

const hasDrivingLicense = true;
const hasGoodVidion = false;
console.log(hasDrivingLicense && hasGoodVidion);
console.log(hasDrivingLicense || hasGoodVidion);
console.log(!hasDrivingLicense);
console.log(!hasGoodVidion);
//=========End of If Statement=========/

//=========Start of If Statement & Expression=========/

//Expression : Returns a value
//Statment : statement is a complete instruction that performs an action.

console.log(5 + 9 + 3); // Expression
if (1 > 0) {
  console.log(true); // Statement
}

//======End of If Statement & Expression=====/

//=====================End of Javascript Fundamentals Part-I===============//

//=====================Start of Javascript Fundamentals Part-II===============//

//============Start of Functions==============//

//Function : A function in JavaScript is a reusable block of code designed to perform a specific task. Functions help reduce code duplication, improve readability, and allow modular programming.

//Function Declaration without params

//Definition : Defined using the function keyword, Hoisted (can be called before declaration)
function logger() {
  console.log(`I'm kirubhakaran`);
}
logger();

//Function Declaration with params
function fruitProcessor(apples, oranges) {
  console.log(`Fruit with ${apples} apples and ${oranges} oranges`);
}
fruitProcessor(10, 2);

//Function expression
//Definition : A function assigned to a variable.Not hoisted (must be defined before use).
const greet = function (name) {
  console.log(`Hello ${name}`);
};
greet("Kirubhakaran");

//Arrow Functions
//Definition:Shorter syntax for writing functions.Does not have its own this (lexical binding).
const calculateAge = (age) => 2025 - age;
console.log(calculateAge(1997));

//Anonymous Functions
//Definition : Functions without a name. Often used as callbacks.
setTimeout(function () {
  console.log("Executed after 1 second");
}, 1000);

//Immediately Invoked Function Expression (IIFE)
//Definition :Runs immediately after being defined.Used to create a private scope.

(function () {
  console.log("IIFE executed!");
})();

//============End of Functions==============//

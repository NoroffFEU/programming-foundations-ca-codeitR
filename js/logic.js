// letters are consideres strings
// abcdeffghiseuq - string;
// numbers are considered numbers
// 123312213 - number
// -1, -2, 0, -1.12312 - numbers

// mixture of both numbers & letters will be considers as type String

// abc123 - string
// 123abc - string

// booleans -true, false
// null, undefined

// if you try to divide some number by a non numerical value, its gonna be undefined
// 10 / L = undefined
// 10/1 = 10 - number
// 10/0 = undefined
// 0/10 = 0 - number

// 10/  = null / undefined

// summarization
// strings
// numbers
// booleans
// null - we don't know / it doesn't exist
// undefined - it doesn't exist/(not possible)

// naming conventions
// camel case -> firstNumber \\ firstNumberLastNumber
//  kebab case -> first-number-last-number
// snake case -> first_number_last_number
let firstNumber = 10;
var lastNumber = 5;

let sum = firstNumber + lastNumber; // cost resources// cpu memory // reference point
// 1 million ooperations //
// 100k operations - dry rule

// dry - don't repeat yourself

// sum is a reference to the variable named sum
// 'sum' is a string
// "sum" is a string
// `sum` is a string
// `${sum}` is a string + reference

// console.log("hello ramesh");
// console.log(`your total sum is: ${sum}`);

// var, let vs const
// meaning of const is constant, which means it will never change
// you can reassign var and let
// but you can never re-assign const
// assignment, reassignment

var secondNumber = 13; // assignment

secondNumber = 17; // reassignment

// console.log(secondNumber);

// const thirdNumber = 15; // assignment
// thirdNumber = 50; // reassignment

// console.log(thirdNumber);

// hositing is decalaring your variables first, then using it later

var fourthNumber = 20;
console.log(fourthNumber);

//

const isShopOpen = true;

// if (isShopOpen) {
//   console.log("our shop is open");
// } else {
//   console.log("our shop is closed");
// }

// console.log(isShopOpen ? "our shop is open" : "our shop is closed");
// console.log(isShopOpen && "welcome to our shop");

// chips, candy, coke, he will cry

const available = "chips";

// =  assignment reassignment operator
// == equal sign
// === strict equal sign

// if (available == "chips") {
//   console.log("my kid got chips");
// } else if (available == "candy") {
//   console.log("My kid got candy");
// } else if (available == "coke") {
//   console.log("My kid got coke");
// } else {
//   console.log("my kid is crying");
// }

switch (available) {
  case "coke":
    console.log("my kid got coke");
    break;
  case "candy":
    console.log("my kid got candy");
  case "chips":
    console.log("my kid got chips");
    break;

  default:
    console.log("my kid is crying");
}

// cake- $2, cookies- $3, biscuits- $3.5, sugar - $1 - homework
// your bill is empty -final  else statement
const items = "cake-2$";

switch (available) {
  case "cake-$2":
    console.log("my kid got cake-$2");
    break;
  case "cookies- $3":
    console.log("my kid got cookies- $3");
  case "biscuits- $3.5":
    console.log("my kid got biscuits- $3.5");
    break;
  case "sugar - $1":
    console.log("my kid got sugar - $1");
    break;

  default:
    console.log("my kid is crying");
}

// 100 - 90 - A+
// 89 - 80 - A
// 79 - 70 - B+
// 69 - 60 - C
// 59 -0 - F

// > greater than sign
// < smaller than sign
// >= greater than equal sign
// <= smaller than equal sign

// logical-and-operator - &&

const score = 77;

// if (score <= 100 && score >= 90) {
//   console.log(" A+ ");
// } else if (score <= 89 && score >= 80) {
//   console.log(" A ");
// } else if (score <= 79 && score >= 70) {
//   console.log(" B+ ");
// } else if (score <= 69 && score >= 60) {
//   console.log(" C ");
// } else if (score <= 59 && score >= 0) {
//   console.log(" F ");
// } else {
//   console.log("F");
// }

switch (true) {
  case score <= 100 && score >= 90:
    console.log(" A+ ");
    break;
  case score <= 89 && score >= 80:
    console.log(" A ");
    break;
  case score <= 79 && score >= 70:
    console.log(" B+ ");
    break;

  default:
    console.log("F");
}

// equal sign
// this will only check against the value, not the data type
console.log("equal sign", 10 == "10");
// strict equal sign
// this gonna check against both value and data type
console.log("strict equal sign", 10 === "10");

/// logical-and

const age = 25;
const weight = 50;
const height = 200;

if (age <= 30 && weight <= 80 && height >= 190) {
  console.log("you are qualified");
} else {
  console.log("you are disqualified");
}

// logical-or operator
const treat1 = "candy";
const treat2 = "chocolate";
const treat3 = "";

if (treat1 == "candy" || treat3 == "sweets" || treat2 == "chocolate") {
  console.log("my kid is happy");
} else {
  console.log("my kid is sad");
}

//
/**
 * ! Regular functions
 */

// DRY RULE

// () // parenthesis || first bracket
// {} // empty object || curly brackets || second bracket
// [] // empty array || third bracket

// function sum(arg1, arg2) {
//   return arg1 + arg2;
// }

// console.log(sum(5, 16));

function multiply(arg1, arg2) {
  return arg1 * arg2;
}
// console.log(multiply(5, 3));

// <=100 -> 0%
// >=101 && <=199 -> 2%
// >=200 && <=299 -> 4%
// >=300 && <=399 -> 6%
// black money tax rate 20%

// 1000 * 2 / 100 = $20

const rate1 = 2,
  rate2 = 4,
  rate3 = 6,
  rate4 = 20;

function taxCalculator(income) {
  if (income <= 100) {
    return 0;
  } else if (income >= 101 && income <= 199) {
    return (income * rate1) / 100;
  } else {
    return (income * rate4) / 100;
  }
}

// console.log(taxCalculator(150));

// regular function
function abc() {
  return 3;
}

// es6 arrow function
const newFunction = () => 3; //one line of code

const multiLine = () => {
  const sss = 4;
  return sss;
}; // multipal lines of code

// function that doesn't have a name is called a nameless function, most commonly used as a callback inside another functions argument
// function (){}

function sampleFunction(arg1, x) {
  console.log(arg1);

  x();
}

//sampleFunction(6666, function () {
//  console.log("i am a callback");
// });

sampleFunction(6666, () => console.log("i am a callback"));

(function () {
  console.log("Greetings !");
})();

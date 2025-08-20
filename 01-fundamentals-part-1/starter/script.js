// //let js = "amazing";
// //console.log(40 + 8 + 23 - 10);

// //console.log("=== VARIABLEs ===");

// //let firstName = "Jonas";
// console.log(firstName);

// let age = 30; 
// console.log(age);
// age = 50;
// console.log(age);

// const birthYear = 2002;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);

// //use by default: const 

// let lastName = "Doe";

// console.log("=== DATA TYPES ===");

// //Number
// age = 24;
// console.log(age);
// console.log(typeof age);

// //String
// let username = "mark";
// console.log(username);
// console.log(typeof username);

// //Boolean
// //let javaScriptIsFun = true;
// //console.log(javaScriptIsFun);
// //console.log(typeof javaScriptIsFun);

// //Undefined
// //let year;
// //console.log(year);
// console.log(typeof year);

// Dynamic varinable
// let dynamicVariable = 20;
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = ("Now I'm a string");
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);

//////////////
//Basic Operators - Math Operators
console.log("=== MATH OPERATORS ===");

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

console.log("Math operations:"); 
console.log("Addition:", 10 + 5);
console.log("Subtraction:", 20 - 8);
console.log("Division:", 15 / 3);
console.log("Exponentiation:", 2 ** 3);

const firstName = "Jonas";
const lastName = "Doe";
console.log(firstName + " " + lastName);
console.log("Hello " + "World" + "!")
console.log("I am " + 25 + " years " + "old");

///////
console.log("=== ASSIGNMENT OPERATORS ===");

let x = 10 + 15;
console.log("x starts as:", x);

x += 10;
console.log("x starts as:", x);

x *= 4;
console.log("x starts as:", x);

x /= 2; 
console.log("x starts as:", x);

x--;
console.log("x starts as:", x);

//////
console.log("=== COMPARISON OPERATORS ===");

console.log("Age comparison:");
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);
console.log(ageJonas < 30);

console.log("Number Comparisons");
console.log(25 > 20);
console.log(15 < 10);
console.log(18 >= 18);
console.log(16 <= 15);

//storing comparison result
const isFullAge = ageSarah >= 18;
console.log("Sarah is adult:", isFullAge);

console.log("Complex comparison");
console.log(now - 1991 > now - 2018);


// Order of Precedence
let z, y;
z = y = 25 - 10 - 5; 
console.log(z, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

///////

// Test Data 1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

// Your code here:
// 1. Calculate BMIs

console.log("Mark's BMI is: " + massMark / heightMark ** 2);
console.log("John's BMI is: " + massJohn / heightJohn ** 2);

// 2. Create markHigherBMI variable
let markBMI = 27.31;
let johnBMI = 24.20;

let markHigherBMI = markBMI > johnBMI;

// 3. Log results to console
console.log("Mark's BMI is higher than John: " + markHigherBMI > johnBMI);

// Test Data 2
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

// 1. Calculate BMIs

console.log("Mark's BMI is: " + massMark / heightMark ** 2);
console.log("John's BMI is: " + massJohn / heightJohn ** 2);

// 2. Create markHigherBMI variable
markHigherBMI = markBMI > johnBMI;

markBMI= 26.89; 
johnBMI = 27.44;

// 3. Log results to console
console.log("Mark's BMI is higher than John: " + markBMI > johnBMI);
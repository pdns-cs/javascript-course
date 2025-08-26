// // //let js = "amazing";
// // //console.log(40 + 8 + 23 - 10);

// // //console.log("=== VARIABLEs ===");

// // //let firstName = "Jonas";
// // console.log(firstName);

// // let age = 30; 
// // console.log(age);
// // age = 50;
// // console.log(age);

// // const birthYear = 2002;
// // console.log(birthYear);

// // const PI = 3.1415;
// // console.log(PI);

// // //use by default: const 

// // let lastName = "Doe";

// // console.log("=== DATA TYPES ===");

// // //Number
// // age = 24;
// // console.log(age);
// // console.log(typeof age);

// // //String
// // let username = "mark";
// // console.log(username);
// // console.log(typeof username);

// // //Boolean
// // //let javaScriptIsFun = true;
// // //console.log(javaScriptIsFun);
// // //console.log(typeof javaScriptIsFun);

// // //Undefined
// // //let year;
// // //console.log(year);
// // console.log(typeof year);

// // Dynamic varinable
// // let dynamicVariable = 20;
// // console.log(dynamicVariable, typeof dynamicVariable);

// // dynamicVariable = ("Now I'm a string");
// // console.log(dynamicVariable, typeof dynamicVariable);

// // dynamicVariable = true;
// // console.log(dynamicVariable, typeof dynamicVariable);

// //////////////
// //Basic Operators - Math Operators
// console.log("=== MATH OPERATORS ===");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// console.log("Math operations:"); 
// console.log("Addition:", 10 + 5);
// console.log("Subtraction:", 20 - 8);
// console.log("Division:", 15 / 3);
// console.log("Exponentiation:", 2 ** 3);

// const firstName = "Jonas";
// const lastName = "Doe";
// console.log(firstName + " " + lastName);
// console.log("Hello " + "World" + "!")
// console.log("I am " + 25 + " years " + "old");

// ///////
// console.log("=== ASSIGNMENT OPERATORS ===");

// let x = 10 + 15;
// console.log("x starts as:", x);

// x += 10;
// console.log("x starts as:", x);

// x *= 4;
// console.log("x starts as:", x);

// x /= 2; 
// console.log("x starts as:", x);

// x--;
// console.log("x starts as:", x);

// //////
// console.log("=== COMPARISON OPERATORS ===");

// console.log("Age comparison:");
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// console.log(ageJonas < 30);

// console.log("Number Comparisons");
// console.log(25 > 20);
// console.log(15 < 10);
// console.log(18 >= 18);
// console.log(16 <= 15);

// //storing comparison result
// const isFullAge = ageSarah >= 18;
// console.log("Sarah is adult:", isFullAge);

// console.log("Complex comparison");
// console.log(now - 1991 > now - 2018);


// // Order of Precedence
// let z, y;
// z = y = 25 - 10 - 5; 
// console.log(z, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// ///////

// // Test Data 1
// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// // Your code here:
// // 1. Calculate BMIs

// console.log("Mark's BMI is: " + massMark / heightMark ** 2);
// console.log("John's BMI is: " + massJohn / heightJohn ** 2);

// // 2. Create markHigherBMI variable
// let markBMI = 27.31;
// let johnBMI = 24.20;

// let markHigherBMI = markBMI > johnBMI;

// // 3. Log results to console
// console.log("Mark's BMI is higher than John: " + markHigherBMI > johnBMI);

// // Test Data 2
// massMark = 95;
// heightMark = 1.88;
// massJohn = 85;
// heightJohn = 1.76;

// // 1. Calculate BMIs

// console.log("Mark's BMI is: " + massMark / heightMark ** 2);
// console.log("John's BMI is: " + massJohn / heightJohn ** 2);

// // 2. Create markHigherBMI variable
// markHigherBMI = markBMI > johnBMI;

// markBMI= 26.89; 
// johnBMI = 27.44;

// // 3. Log results to console
// console.log("Mark's BMI is higher than John: " + markBMI > johnBMI);

///// Strings and Decision

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm $(firstName), a ${year - birthYear} year old ${job}!`;

console.log(`I'm ${2037 - 1991} years old`);
console.log(`Math works: ${2+3} equals five`);
console.log(`Comparisons too: ${5 > 3}`);
console.log(`Just a regular string`);

// Taking Decisions: if / else Statements
const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :`);
}

// Variable Assignment with Decicions
const birthYear2 = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
}
else {
  century = 21;
}
console.log(century);

// Real-world Decision Making
const massMarkk = 85;

if (score >= 60) {
  console.log(`You passed with ${score} points!`);
  console.log("Congratulations!");
} else {
  const pointsNeeded = 60 - score;
  console.log(`You failed. Need ${pointsNeeded} more points`);
}

//////////////////////////
// Truthy and Falsy Values

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Jonas")); // true
console.log(Boolean({})); // true
console.log(Boolean("")); // false (empty string)

////////////////////////////
// Coding Challenge #2: BMI Comparison

// Reuse your BMI calculation from Challenge #1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// Your if/else statement here:
// Compare BMIs and create intelligent messages
// Use template literals for beautiful output

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else { 
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
// // // // // Functions - Declarations and Expressions
// // // // console.log("=== FUNCTIONS ===");

// // // // function logger() {
// // // //   console.log("My name is Jonas");
// // // // }

// // // // logger();
// // // // logger();
// // // // logger();

// // // // function fruitProcessor(apples, oranges) {
// // // //   console.log(apples, oranges);
// // // //   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// // // //   return juice;
// // // // }

// // // // const appleJuice = fruitProcessor(5, 0);
// // // // console.log(appleJuice);

// // // // const appleOrangeJuice = fruitProcessor(2, 4);
// // // // console.log(appleOrangeJuice);

// // // // // Reusable code (DRY)
// // // // const juice1 = fruitProcessor(5, 0);
// // // // const juice2 = fruitProcessor(2, 4);
// // // // const juice3 = fruitProcessor(3, 2);

// // // // // Function Expressions
// // // // const calcAge = function (birthYear) {
// // // //     return 2025 - birthYear;
// // // // }

// // // // console.log(calcAge(2002))

// // // // function introduce(firstName, lastName, age) {
// // // //     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old`;
// // // //     return  introduction;
// // // // }

// // // // console.log(introduce("Denese", "Manuel", "25"));

// // // // function yearsUntilRetirement(birthYear, firstName) {
// // // //     const age = calcAge(birthYear);
// // // //     const retirement = 65 - age;

// // // //     if (retirement > 0) {
// // // //         return `${firstName} retires in ${retirement} years`;
// // // //     } else {
// // // //         reurn `${firstName} had already retired`;
// // // //     }
// // // // }

// // // // console.log(yearsUntilRetirement (2002, "Denese"));

// // // // // Global Scope
// // // // // const globalVar = "I am global";

// // // // // function testScope() {
// // // // //   const localVar = "I am local";
// // // // //   console.log(globalVar); 
// // // // //   console.log(localVar); 
// // // // // }

// // // // // testScope();
// // // // // console.log(globalVar);

// // // // ////////////////////////
// // // // // Coding Challenge #1
// // // // function calcAverage (score1, score2, score3) {
// // // //     return (score1 + score2 + score3) / 3;
// // // // }

// // // // function checkWinner(avgDolphins, avgKoalas) {
// // // //     if (avgDolphins >= (2 * avgKoalas)) {
// // // //         return `Dolphins win ${avgDolphins} vs ${avgKoalas}.`;
// // // //     } else if (avgKoalas >= (2 * avgDolphins)) {
// // // //         return `Koalas win ${avgKoalas} vs ${avgDolphins}.`;
// // // //     } else {
// // // //         return `No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}.`;
// // // //     }
// // // // }

// // // // // Test Data 1
// // // // let scoreDolphins = calcAverage(44, 23, 71);
// // // // let scoreKoalas = calcAverage(65, 54, 49);
// // // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // // // Test Data 2
// // // // scoreDolphins = calcAverage(85, 54, 41);
// // // // scoreKoalas = calcAverage(23, 34, 27);
// // // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // // ////////////////////////////////
// // // // // Preview 2: Array and Data Mani

// // // // const friends = ["Michael", "Steven", "Peter"];
// // // // console.log(friends);

// // // // const mixed = ["Jonas", 27, true, friends];
// // // // console.log(mixed);

// // // // //Change value per index
// // // // friends[1] = "Jay";
// // // // console.log(friends);

// // // // const firstName = 'Denese';
// // // // const aiken = [firstName, "Manuel", 2025 - 2002];
// // // // console.log(aiken); 

// // // // const calcAge1 = function (birthYear) {
// // // //     return 2025 - birthYear;
// // // // }

// // // // const ages = [calcAge1(2002), calcAge1(2003,), calcAge1(1991)];
// // // // console.log(ages);

// // // // // Array Methods - Adding elements
// // // // const newLength = friends.push("Steven");
// // // // console.log(friends);
// // // // console.log(newLength); 

// // // // friends.unshift("John");
// // // // console.log(friends);

// // // // // Removing elements
// // // // const popped = friends.pop();
// // // // const popped2 = friends.pop();
// // // // console.log(popped);
// // // // console.log(popped2);
// // // // console.log(friends);

// // // // const shifted = friends.shift();
// // // // console.log(shifted);
// // // // console.log(friends);

// // // // // Find an element
// // // // // IndexOf 
// // // // console.log(friends.indexOf("Michael"));
// // // // console.log(friends.indexOf("John"));

// // // // // Includes()
// // // // console.log(friends.includes("Michael"));
// // // // console.log(friends.includes("Jay"));

// // // // // Array Iteration - Loops

// // // // for (let i = 0; i < friends.length; i++) {
// // // //     console.log(friends[i]);
// // // // }

// // // // friends.forEach(
// // // //     function(friend, index) {
// // // //         console.log(`Friend ${index}: ${friend}`);
// // // //     }
// // // // )

// // // // const grades2 = [85, 92, 78, 96, 88, 74];
// // // // let total = 0;

// // // // for (let i = 0; i < grades2.length; i++) {
// // // //     total += grades2[i];
// // // // }

// // // // const average1 = total / grades2.length;
// // // // console.log(`Average grade: ${average1.toFixed(2)}`);

// // // // let passedCount = 0;
// // // // grades2.forEach((grade) => {
// // // //     if (grade >= 70( passedCount++))
// // // // });
// // // // console.log(`${passedCount} out of ${grades2.length} students passed`);


// // // // Coding Challenge #2 - Student Grade Manager
// // // const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// // // // Function to calculate average
// // // function calculateAverage(grades) {
// // // let total = 0;

// // //     for (let i = 0; i < grades.length; i++) {
// // //     total += grades[i];
// // //     }
// // //     return total / grades.length;
// // // }

// // // // Function to find highest grade
// // // function findHighestGrade(grades) {
// // //     let highestValue = grades[0];

// // //     for(let i = 0; i < grades.length; i++)
// // //         if (grades[i] > highestValue) {
// // //             highestValue = grades[i];
// // //         }
// // // }

// // // // Function to find lowest grade
// // // function findLowestGrade(grades) {
// // //     let lowestValue = grades[0];

// // //     for(let i = 0; i < grades.length; i++)
// // //         if (grades[i] < lowestValue) {
// // //             lowestValue = grades[i];
// // //         }
// // // }

// // // // Function to count passing students
// // // function countPassing(grades, passingGrade) {
// // //     let passedCount = 0;
// // //     grades.forEach(grades => {
// // //         if (grades >= passingGrade) {
// // //             ( passedCount++)
// // //     }
// // //     });
  
// // //     return passedCount;
// // // }


// // // // Generate complete report
// // // const average = calculateAverage(grades);
// // // const highest = findHighestGrade(grades);
// // // const lowest = findLowestGrade(grades);
// // // const passing = countPassing(grades, 70);

// // // console.log("=== GRADE REPORT ===");
// // // console.log(`Average: ${average.toFixed(2)}`);
// // // console.log(`Highest: ${highest}`);
// // // console.log(`Lowest: ${lowest}`);
// // // console.log(`Passing students: ${passing} out of ${grades.length}`);

// // ///////////////////
// // // Preview 3: Objects & Data Structures

// // const deneseObject = {
// //     firstName: "Denese",
// //     lastName: "Manuel",
// //     age: 22,
// //     job: "Student",
// //     friends: ['Michael', 'Peter', 'Steven']
    
// // };
// // console.log(deneseObject.firstName);
// // console.log(deneseObject.lastName);
// // console.log(deneseObject.age);

// // // Bracket notation
// // console.log(deneseObject['firstName']);
// // console.log(deneseObject['lastName']);
// // console.log(deneseObject['age']);

// // const nameKey = "Name";
// // console.log(deneseObject["first" + nameKey]);
// // console.log(deneseObject["last" + nameKey]);

// // // Modifying existing properties
// // deneseObject.job = "Programmer";
// // deneseObject['age'] = 23;
// // console.log(deneseObject);

// // // Adding new properties
// // deneseObject.location = "Philippines";
// // deneseObject['twitter'] = "@denesemanuel";
// // console.log(deneseObject);  

// // // When to use dot vs bracket notation
// // const property = "job";
// // console.log(deneseObject[property]);

// // ////////////////////////////////
// // // Objects vs Arrays

// // // Objects
// // const person = {
// //   name: "Jonas",
// //   age: 46,
// //   occupation: "teacher",
// // };

// // const car = {
// //   brand: "Toyota",
// //   model: "Camry",
// //   year: 2020,
// //   color: "blue",
// // };

// // // Objects can contain arrays and arrays can contain objects
// // const student = {
// //     name: 'Sarah',
// //     grades: [85, 92, 78, 96],
// //     address: {
// //         street: '123 Main St',
// //         city: 'New York',
// //     },
// // };
// // console.log(student.grades[0]);
// // console.log(student.address.city);

// // /////////////////////////////////
// // // Object Methods

// // const jonas = {
// //   firstName: "Jonas",
// //   lastName: "Schmedtmann",
// //   birthYear: 1991,
// //   job: "teacher",
// //   friends: ["Michael", "Peter", "Steven"],
// //   hasDriversLicense: true,

// //   // Method - function inside object
// //   calcAge: function (birthYear) {
// //     return 2037 - birthYear;
// //   },
// // };

// // // Call methods using dot notation
// // console.log(jonas.calcAge(1991)); 
// // console.log(jonas.calcAge(jonas.birthYear)); 

// // //'this' keyword
// // const johnImproved = {
// //   firstName: "John",
// //   lastName: "Doe",
// //   birthYear: 1995,
// //   job: "teacher",
// //   friends: ["Michael", "Peter", "Steven"],
// //   hasDriversLicense: false,

// //   calcAge: function () {
// //     this.age = 2025 - this.birthYear; 
// //     return this.age;
// //   },

// //   getSummary: function() {
// //     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job    
// //     }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
// //   }
// // };

// // console.log(johnImproved.calcAge()); 
// // console.log(johnImproved.age); 
// // console.log(johnImproved.getSummary());

// // // Complex object with multiple methods 
// // const bankAccount = {
// //     owner: "Jonas Schmedtmann",
// //     movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
// //     interestRate: 1.2, 
// //     pin: 1111,

// //     // Method to calculate balance
// //     calcBalance: function() {
// //         this.balance = this.movements.reduce((acc, mov) => acc + mov, 0);
// //         return this.balance;
// //     },

// //     // Method to add movement
// //     deposit: function(amount) {
// //         this.movements.push(amount);
// //         this.calcBalance();
// //     },

// //     withdraw: function(amount) {
// //         this.movements.push(-amount);
// //         this.calcBalance();

// //     },

// //     // Method for accout summary
// //     getStatement: function() {
// //         return `Account owner: ${this.owner}'s account balance: ${this.calcBalance()}`;
// //     },
// // };

// // console.log(bankAccount.getStatement());
// // bankAccount.deposit(500);
// // console.log(bankAccount.getStatement());


// // // Coding Challenge #3 - User Profile System

// // const user = {
// //     firstName: "Hajj",
// //     lastName: "Macaraig",
// //     birthYear: 2005,
// //     location: "Philippines",
// //     interests: ["sleeping", "singing", "photography"],
// //     friends: [
// //         {name: "Ronald", status: "active"},
// //         {name: "Sam", status: "inactive"},
// //         {name: "Ces", status: "active"},
// //         {name: "Nicole", status: "active"},
// //     ],
// //     isActive: true,

// //     calcAge: function () {
// //         this.age = new Date().getFullYear() - this.birthYear;
// //         return this.age;
// //     },

// //     // add friend method
// //     addFriend: function (name, status = "active") {
// //         this.friends.push({name, status: status});
// //         return this.friends.length;
// //     },

// //     // get active friends count
// //     getActiveFriends: function () {
// //         const activeFriends = this.friends.filter(friend => friend.status === "active").length;
// //         return activeFriends;
// //     },

// //     // toggle active status
// //     toggleStatus: function () {
// //         this.isActive = !this.isActive;
// //         return this.isActive;
// //     },

// //     // generate profile summary
// //     getSummary: function () {
// //         const age = this.calcAge();
// //         const activeFriends = this.getActiveFriends();
// //         const status = this.isActive ? "active" : "away";

// //         return `${this.firstName} ${this.lastName} (${age}) from ${this.location}
// //         Currently ${status}
// //         ${activeFriends} active friends out of ${this.friends.length} total
// //         Interests: ${this.interests.join(", ")}
// //         sleep | vlog | billie eilish`;

// //     }
// // };

// // // test your user profile system
// // console.log(user.getSummary());
// // user.addFriend("Celesse", "active");
// // user.toggleStatus();
// // console.log(`\nAfter updates:`);
// // console.log(user.getSummary());

// // 1st method
// // quesySelector - uses css selectors
// const message = document.querySelector(".message");
// console.log(message);

// const button = document.querySelector("#btn"); 
// console.log(button);

// const heading = document.querySelector("h1");
// console.log(heading);

// console.log(message.textContent);
// console.log(button.id);
// console.log(heading.tagName);
// console.log(heading.textContent);

// //getElementById 
// const buttonByID = document.getElementById("btn");
// console.log(buttonByID);
// console.log(buttonByID === button);

// //querySelectorAll
// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs);
// console.log(allParagraphs[0]);

///////////////////////////////
// Modifying Element Content
const message = document.querySelector(".message");

console.log(message.textContent);
message.textContent = "Hello from JavaScript";
console.log(message.textContent);

//innerHTML
message.innerHTML = "<strong>Bold text from JS!</strong>";

// innerText
console.log(message.innerText);

// Input element values
const input = document.querySelector(".guess");

console.log(input.value);
input.value = "Default text";

const heading = document.querySelector("h1");
heading.style.color = "red";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "3rem";

const button = document.querySelector("btn");
button.style.padding = "20px";
button.style.borderRadium = "10px";

// behind the scenes development hour 1 - scoping & hosting
'use strict';

console.log('=== BEHIND THE SCENES: SCOPING & HOISTING ===');


// global execution context
console.log('Starting program');

function alpha() {
    console.log('alpha:start');
    beta();
    console.log('alpha:end');
}

function beta() {
    console.log('beta');
}

alpha();
// expected output: alpha:start → beta → alpha:end

// scoping & scope chain -- determines where variables are accessible in your code

// global scope
const globalVar = 'I am global';
function anyFunction() {
    console.log(globalVar);
}

// function scope
function myFunction() {
    const functionVar = 'I am local to myFunction';
    console,log(functionVar); // if i move this after line 44, it would return an error
}

// block scope
if (true) {
    let blockVar = 'I am block-scoped';
    const alsoBlockVar = 'Me too!';
    var notBlockScoped = 'I leak out of the block'; // var ignores block scope
}

// hoisting -- variable and function declarations are moved to the top of their scope
// examples

console.log(varX); // works, undefined
// console.log(letX); // reference error in TDZ
// console.log(constX); // reference error in TDZ

var varX = 1;
let letX = 2;
const constX = 3;

console.log(addDecl(7, 8)); // this would work wherever you put it

function addDecl(a, b) {
    return a + b;
}

console.log(addDecl(7, 8)); // like this too

// however, this one would return an error
// console.log(addExpr(7, 8)); // because it's called before the value is defined

const addExpr = function(a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

// temporal dead zone (TDZ) - period between when a let or const variable is hoisted and when it's initialized
const apiUrl = 'https://example.com';
console.log(apiUrl); // if this was declared first before const, it would return an error

 // behind the scenes development hour 3 - primitives vs objects, copying & strict mode

 console.log('=== BEHIND THE SCENES: PRIMITIVES VS OBJECTS, COPYING & STRICT MODE ===');

 // how primitive types work
 
 let age = 20;
 let oldAge = age; // independent copy
 
 age = 21;
 console.log('age', age);
 console.log('oldAge', oldAge);
 
 // objects in heap
 const me = {name: 'Denese', age: 23,};
 const friend = me; // this is a shared reference
 
 friend.name = 'Shan';
 friend.age = 23;
 
 console.log('me:', me);
 console.log('friend:', friend);
 
 // shallow copy vs deep copy 
 const original = {
     name: 'Nics',
     age: 24,
     hobbies: ['drawing', 'running'],
 };
 
 // spread operator shallow copy
 const shallowCopy = { ...original };
 shallowCopy.name = 'Cole';
 
 console.log('original name:', original.name);
 console.log('copy name:', shallowCopy.name);
 
 shallowCopy.hobbies.push('cooking'); // nested objects are still shared because it is in the same array
 
 console.log(original.hobbies);
 console.log(shallowCopy.hobbies);
 
 // use shallow copying for objects with only primitive values (strings, numbers, booleans)
 
 // deep copy
 const deepOriginal = {
     name: 'Harry',
     age: 24,
     // nested object
     address: { city: 'Manila', country: 'Philippines'},
     //nested array
     hobbies: ['magic', 'running'],
 };
 
 // modern deep copy with structuredClone
 const deepCopy = structuredClone(deepOriginal);
 deepCopy.address.city = 'Rizal';
 deepCopy.hobbies.push('Travelling');
 deepCopy.name = 'Cey';
 
 console.log(deepOriginal);
 console.log(deepCopy); 
/*
Comparison operators only evaluate to true or false.
1. Equality ==
2. Strict/strong Equality ===
3. Not equal !=
4. Strict/strong not equal !==
*/

let Number1 = "80"
let Number2 = 80
let strictEqual = Number1 === Number2 //Boolean, either true or false
console.log(`Number 1 = ${Number1} === Number 2 = ${Number2} 
    Answer = ${strictEqual} its type is ${typeof strictEqual}`)
let equality = Number1 == Number2
console.log(`Number 1 = ${Number1} == Number 2 = ${Number2} 
    Answer = ${equality} its type is ${typeof equality}`)

// Inequality
let value1 = "50"
let value2 = 50
let strictInequality = value1 !== value2
console.log(`Number 1 = ${value1} !== Number 2 = ${value2} 
    Answer = ${strictInequality} its type is ${typeof strictInequality}`)
// Not strict inequality
let nonstrictInequality = value1 != value2
console.log(`Number 1 = ${value1} != Number 2 = ${value2} 
    Answer = ${nonstrictInequality} its type is ${typeof nonstrictInequality}`)
/*
Expression: Any piece of code that produces a value
x > 5 => true or false
10 + 5 = 15
circleArea(6) => expression function call
*/
function MynameIs() {
  console.log("My name is Harmon");
}

let n = 20;
console.log(n); // 20
console.log(10 - 8); // 2
console.log(n > 15); // true
console.log(MynameIs()); // function call = undefined.

/*
Statement: A piece of code that performs an action
let x = 10; // variable declaration statement
x = 20; // assignment statement
if (x > 15) {}
function MynameIs() {} // function declaration statement
console.log(MynameIs()); references the function declaration statement and calls it. The function declaration statement is a statement that defines a function, while the function call is an expression that invokes the function and produces a value (in this case, undefined).
*/
let r = 15;
let p = "You are eligible to vote";
if (r >= 12) {
  console.log(p);
}

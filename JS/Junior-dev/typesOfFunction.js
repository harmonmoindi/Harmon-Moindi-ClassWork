/* 
Named function
Anonymous function
Arrow function
Function expression
Immediately invoked function expression (IIFE)
*/
let r = 50;
function areaCircle() {
  return 3.14 * r * r;
} // Named function

let age = 20;
let MyAge = age;

let ac = areaCircle(); // What is the vaue of ac and what is it?
console.log(ac, typeof ac); // function areaCircle() { return 3.14 * r * r; }

/*
1. create a function of your choice
2. assign the function to a variable
3. directly create the function using variable declaration
4. remove original function
5. try calling the variable and original function
6. remove the name of the function "rectangleArea"
7. You have an anonymous function
Test on the console. 
*/
let l = 8;
let w = 6;
let rA = function (l, w) {
  return l * w;
};
console.log(rA(l, w));

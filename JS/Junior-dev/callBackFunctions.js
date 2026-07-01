/*
Callback function
A fuction that takes on or more parameters as a function. 
    - One or more of the parameters is a function.

Exercise;
create a function that prints an alert for the current time.
does not take any parameters.
prints alert or console.log for the current time.
test the function by calling it directly and by passing it as a parameter to another function.
*/
function printCurrentTime() {
  const currentTime = new Date().toLocaleTimeString();
  alert("Current time is: " + currentTime);
}
printCurrentTime();

/*
JS has an inbuilt function called setInterval.
setInterval (parameter1 - function, parameter2 - time in milliseconds)
parameter1: a function that is called every interval
parameter2: the interval in milliseconds

Exercise:
1. Use a set interval with a named function. 



*/
setInterval(printCurrentTime, 60000); // Call back function.

/*
Exercise:
1. Use with an anonymous function.
2. Use with an arrow function.
- pass all function by reference or statement.
- if you use an expression you are wrong.
*/
// Anonymous function
let printTime = function printCurrentTime() {
  const currentTime = new Date().toLocaleTimeString();
  console.log("Current time is: " + currentTime);
};

//Arrow function
let printTimeArrow = () => {
  const currentTime = new Date().toLocaleTimeString();
  console.log("Current time is: " + currentTime);
};

printTimeArrow();
printTime();
setInterval(printTimeArrow, 5000);
setInterval(printTime, 10000);

/*
Exercise:
1. Create our own call back function.
2. SetTimeout function. 
*/

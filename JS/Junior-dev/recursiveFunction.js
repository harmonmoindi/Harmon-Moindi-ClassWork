/*
A recursive function is a function that calls itself.
- Since this creates an endless loop, you have to find a way to terminate. A condition. 
- 
*/

/* function salaryGrossPromptProcess() {
  let gross = prompt("Enter your gross salary"); // prompt has only two returns => a string and null.
  if (isNaN(gross) === false) {
    //condition
    console.log(`You entered this amount, ${gross}.`);
    return; //exit the function
  }
  alert(`Invalid amount entered. Ensure you enter a number.`);
  salaryGrossPromptProcess(); //recursive call
}
salaryGrossPromptProcess();

/*
1. remove the alert
2. initial prompt should be "enter your gross salary"
3. any prompt after that should be "Invalid amount entered. Ensure you enter a number."
*/

/* function salaryGrossPromptProcess() {
  let gross = prompt("Enter your gross salary"); // prompt has only two returns => a string and null.
  if (isNaN(gross) === false) {
    //condition
    console.log(`You entered this amount, ${gross}.`);
    return; //exit the function
  }
  prompt("Invalid amount entered. Ensure you enter a number.");
  salaryGrossPromptProcess(); //recursive call
}
salaryGrossPromptProcess();

/*
create a function to calculate the factorial of a number.
the function takes a parameter
@param1 which is a number and returns the factorial of the number.
example: factorial(5) => 5*4*3*2*1 = 120
- check the number is greater than 1
- hint; use a recursive function. 
*/
function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
const n = 6;
console.log(factorial(n));
console.log(factorial(7));
console.log(factorial(4));

/*
Call Stack. 
Last In - First Out. => Code is stacked systematically, so that the first one is down and the last to come out. 

*/

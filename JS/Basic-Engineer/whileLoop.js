/*
Loops - Allow you to run a block of code over and over again. 
You should not loop for infinity - add an exit condition. 
syntax: 
        while(condition){
        //code;
        }

Exercise, create a counter that counts from 0 to 100.
*/

/* let n = 0;
let condition = true;
while (condition) {
  console.log("N is", n);
  n = n + 1;
  if (n > 150) {
    condition = false;
  }
}

/*
create a function 
the function should take a parameter
param is number greater than 0
have a loop inside, that counts down from this number using a while loop.
It should print n.*/

/* function countDown(n) {
  while (n > 0) {
    console.log(n);
    n = n - 1;
  }
}

countDown(50);
/*
You can use a condition or a true (with a break or a return, with the option of na 'if' statement).

Kindergarten teacher wants to generate a maths table for the student, this table is 
*/
/*
Create a function, function1 (give it a name)
    it does not take any parameters
    1. prompts a user for the first number
    check it the number is a valid number greater than 1.
    2. prompts the user for the second number
    check if number is a valid number greater than 1.
    use recussion or a while loop to ensure user enters a correct number for number 1 and number 2
    after the number is entered call @function2. which takes the numbers as parameters.
    example @function2(number1, number2)

    Create a function @ function2 (give it a name)
    this function takes in the following parameter
    param1 number greater than 1
    param2 number greater than 1
    check if param1 is a number greater than 1
    check if param2 is a number greater than 1
    example if @function2(3,5)
    ie
    3*5 =
    3*4 =
    3*2 =
    3*1 =

*/

function tableFunction1() {
  let num1 = Number(prompt("Enter first number"));
  while (isNaN(num1) || num1 <= 1) {
    num1 = Number(
      prompt("Invalid input. Please enter a number greater than 1:"),
    );
  }
  let num2 = Number(prompt("Enter second number"));
  while (isNaN(num2) || num2 <= 1) {
    num2 = Number(
      prompt("Invalid input. Please enter a number greater than 1:"),
    );
  }
  tableFunction2(num1, num2);
}
function tableFunction2(param1, param2) {
  if (isNaN(param1) || param1 <= 1) {
    console.log("param1 is not a valid number greater than 1");
    return;
  }

  if (isNaN(param2) || param2 <= 1) {
    console.log("param2 is not a valid number greater than 1");
    return;
  }
  for (let i = param1; i >= 1; i--) {
    console.log(".......");
    for (let j = param2; j >= 1; j--) {
      if (j === i) continue; // skip the matching pair, e.g. 3*3
      console.log(`${i}*${j}=${i * j}`);
    }
  }
}

tableFunction1();

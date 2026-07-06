/*
Loops - Allow you to run a block of code over and over again. 
You should not loop for infinity - add an exit condition. 
syntax: 
        while(condition){
        //code;
        }

Exercise, create a counter that counts from 0 to 100.
*/

let n = 0;
let condition = true;
while (condition) {
  console.log("N is", n);
  n = n + 1;
  if (n > 150) {
    condition = false;
  }
}

/*
- for loop - they are mostly meant for numbers 
- code 
loop (starting; condition; endpoint)
    combines it into 1 statement. 

*/
let k = 0;

//condition: k<20

for (let k = 0; k < 20; k = k + 1) {
  console.log("K is", k);
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
tableFunction2(5, 6);

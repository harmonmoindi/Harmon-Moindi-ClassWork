/*
1. Exits code
2. returns any required data.
return; will exit the function without returning a value, undefined. 
 */

function sayMyName() {
  let firstName = "John";
  console.log(`First name ${firstName}`);
  let secondName = "Mutua";
  console.log(`Second name ${secondName}`);
  let fullName = `${firstName} ${secondName}`;
  console.log(`Names are ${fullName}`);
  return fullName;
}

let sayMyNameValue = sayMyName();

console.log(
  `Function returned ${sayMyNameValue}, it's type ${typeof sayMyNameValue}`,
);

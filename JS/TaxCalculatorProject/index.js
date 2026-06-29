/*
 - prompt ("")
 - check it it's a number
 */
let grossSalary = null;
while (true) {
  let gross = prompt("Enter your gross salary"); // prompt has only two returns => a string and null.
  if (!isNaN(gross)) {
    gross = Number(gross);
    if (gross > 0) {
      grossSalary = gross;
      break;
    }
  }
  alert(`Invalid amount entered.
    Ensure you enter a number greater than 0.`);
}
console.log("Received the gross salary", grossSalary);
console.log(
  `Gross Salary is ${grossSalary}, and it's type ${typeof grossSalary} `,
);
// Calculate PAYE
let PAYE = null;
let tier = null;
if (grossSalary < Number(24000)) {
  PAYE = grossSalary * 0.1;
  tier = "0 - 24000 KES";
}
if (grossSalary > 240000 && grossSalary < 32333) {
  PAYE = grossSalary * 0.25;
  tier = "24001 - 32333 KES";
}
if (grossSalary > 32333 && grossSalary < 500000) {
  PAYE = grossSalary * 0.3;
  tier = "32334 - 500000 KES";
}
if (grossSalary > 500000 && grossSalary < 800000) {
  PAYE = grossSalary * 0.325;
  tier = "500001 - 800000 KES";
}
if (grossSalary > 800000) {
  PAYE = grossSalary * 0.35;
  tier = "800001 - infinity KES";
}
alert(`This is your monthly PAYE; ${PAYE}, it is type ${typeof PAYE}`);
alert(`Your tier is ${tier}`);

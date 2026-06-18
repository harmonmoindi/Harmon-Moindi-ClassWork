/*
Console.log - debugging and printing out information on the screen. Ensure 
you write in a way that helps you figure out the issue.
*/
const monthlySalary = 80000;
console.log("Gross salary is", monthlySalary)
const paye = monthlySalary * 0.15
console.log("For the gross salary of", monthlySalary, "the PAYE is", paye)
const nhif = 2000
console.log("The NHIF deductions is", nhif)
const sha = 2000
console.log("The SHA deductions is", sha)
const totalDeductions = paye + nhif + sha
console.log("This is the total deductions", totalDeductions)
const netSalary = monthlySalary - totalDeductions
console.log("Your net salary is", netSalary)
/*
if and else if => chain
    we exit if and else if on the first truth.

*/
let age = prompt("Enter your age:");
alert(`You entered ${age}`);

if (age < 10) {
  alert("You are still growing");
} else if (age < 18) {
  alert("You are an adult now, and still growing");
} else if (age < 28) {
  alert("You can marry now, and you're still growing");
  alert("This is a good age for marriage.");
} else if (age < 60) {
  alert("Best age for retirement");
} else if (age < 80) {
  alert("You are an ancestor");
} else {
  alert("Ensure you enter a number for age");
}

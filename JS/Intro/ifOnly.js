/*
if =>
    it's special, you can use it on its own.
*/
let age = prompt ("Enter your age:");
    alert (`You entered ${age}`)

if (isNaN(age) === false){
    if (age > 10){
    alert ("You are still growing")
}
if (age > 18){
    alert ("You are an adult now, and still growing")
}
if (age > 28){
    alert ("You can marry now, and you're still growing")
    alert ("This is a good age for marriage.")
}
if (age > 60) {
    alert ("Best age for retirement")
}
if (age > 80) {
    alert ("You are an ancestor")
}
} else {
    alert("Ensure you enter a number for age")
}
while (isNaN(age)) {
    age = prompt("Try again:")
}
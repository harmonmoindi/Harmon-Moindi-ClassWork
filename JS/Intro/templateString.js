/*
Template/string interpolation is a way to combine data
and strings for output. 
*/
let firstName = "Harmon"
let secondName = "Moindi"
let age = 60
let address = "Embakasi, Utawala"

let userDetails = firstName + " " + secondName + " is" + " " + age + " " + "he stays at" + " " + address
console.log(userDetails)
console.log("User details is ", typeof userDetails)

//using back ticks
let userDetails2 = `${firstName} ${secondName} is ${age} years old and he stays at ${address}`
console.log(userDetails2)
console.log(`${firstName} ${secondName} is ${age} years old and he stays at ${address}`)

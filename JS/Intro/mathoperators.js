/* 
Assignment =
Addition +
Multiplication *
Division / 
Modulus %
** means power
*/
let Number1 = 20; //Declared and assigned the variable
console.log(`Number 1 is ${Number1} its type is ${typeof Number1}`)
Number1 = 40; //Assignment only
console.log(`Number 1 is ${Number1} its type is ${typeof Number1}`)
let Number2 = 60
console.log(`Number 2 is ${Number2} its type is ${typeof Number2}`)
let Number3 = Number1 + Number2 + 30
console.log(`Number 3 is ${Number3} its type is ${typeof Number3}`)
let Number4 = Number1 * Number2
console.log(`Number 4 is ${Number4} its type is ${typeof Number4}`)
let Number5 = 3 ** 4
console.log(`Number 5 is ${Number5} its type is ${typeof Number5}`)
let Number6 = Math.pow (40,2);
console.log(`Number 6 is ${Number6}, its type is ${typeof Number6}`)

//Division operator
let Number7 = 40
let Number8 = 80
let divNumber = Number7 / Number8
console.log(`DivNumber is ${divNumber} its type is ${typeof divNumber}`)

// The modulus operator gives the remainder of a division between numbers
let Number9 = 50
let Number10 = 20
let modNumber = Number9 % Number10
console.log(`ModNumber is ${modNumber} its type is ${typeof modNumber}`)
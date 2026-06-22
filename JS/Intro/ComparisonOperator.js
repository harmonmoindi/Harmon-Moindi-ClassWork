/*
Comparison operators only evaluate to true or false.
1. Equality ==
2. Strict/strong Equality ===
3. Not equal !=
4. Strict/strong not equal !==
*/

let Number1 = "80"
let Number2 = 80
let strictEqual = Number1 === Number2 //Boolean, either true or false
console.log(`Number 1 = ${Number1} === Number 2 = ${Number2} 
    Answer = ${strictEqual} its type is ${typeof strictEqual}`)
let equality = Number1 == Number2
console.log(`Number 1 = ${Number1} == Number 2 = ${Number2} 
    Answer = ${equality} its type is ${typeof equality}`)

// Inequality
let value1 = "50"
let value2 = 50
let strictInequality = value1 !== value2
console.log(`Number 1 = ${value1} !== Number 2 = ${value2} 
    Answer = ${strictInequality} its type is ${typeof strictInequality}`)
// Not strict inequality
let nonstrictInequality = value1 != value2
console.log(`Number 1 = ${value1} != Number 2 = ${value2} 
    Answer = ${nonstrictInequality} its type is ${typeof nonstrictInequality}`)

    /*
    greater than a>b
    less than a<b
    greater than or equals to >=
    less than or equal to <=
    */

    let number1 = 300
    let number2 = 400

    let str1 = "50"
    let str2 = "90"

    console.log(`number1 > number2 ${number1 > number2}`)
    console.log(`str1 > str2 ${str1 > str2}`)

    console.log(`number1 < number2 ${number1 < number2}`)
    console.log(`str1 < str2 ${str1 < str2}`)

    console.log(`number1 >= number2 ${number1 >= number2}`)
    console.log(`str1 >= str2 ${str1 >= str2}`)

    console.log(`number1 <= number2 ${number1 <= number2}`)
    console.log(`str1 <= str2 ${str1 <= str2}`)

    let Str1 = 'A' // 65
    let Str2 = 'b' // 98
     console.log(`Str1 > Str2 ${Str1 > Str2}`)
     console.log(`Str1 < Str2 ${Str1 < Str2}`)
     console.log(`${Str1} = ${Str1.charCodeAt(0)}`)
      console.log(`${Str2} = ${Str2.charCodeAt(0)}`)

      console.log(`Str1 >= Str2 ${Str1 >= Str2}`)
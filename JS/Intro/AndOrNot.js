/*
And -> &&
    Truth table
    true && true = true
    false && true = false
    true && false = false
    false && false = false
        i.e Val1 && Val2
*/
let Val1 = true
let Val2 = false
let result = Val1 && Val2
console.log(result)

let tyrone_age = 30
let tyrone_balance = 60000

//if Tyrone's age is greter than 18 and has more than 40k in their account. 
let is_greater_than_18 = tyrone_age > 18
console.log(`Is Tyrone's age greater than 18 ${is_greater_than_18}`)
let has_more_than_40k = tyrone_balance > 40000
console.log(`Is Tyrone's balance greater than 40k = ${has_more_than_40k}`)
console.log(`Is Tyrone older than 18 or has more than 40k in his account = ${is_greater_than_18 || has_more_than_40k}`)

// Simplified 
let simplified = tyrone_age > 18 && tyrone_balance > 40000
console.log (`Simplified = ${simplified}`)
console.log (`Further simplified = ${tyrone_age > 18 || tyrone_balance < 40000}`)

/*
OR => ||
Truth table
    truth || truth = truth
    false || truth = truth
    truth || false = truth 
    false || false = false
        i.e val1 || val2
*/
/* 
Not => !
!true = false
!false = true
*/
console.log(`This is not true = ${!true}`)
console.log(`This is not false = ${!false}`)

// And(&&) evaluates first in JS, but if you input brackets the order can be changed. 

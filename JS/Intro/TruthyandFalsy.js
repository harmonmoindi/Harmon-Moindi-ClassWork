/*
Truthy and Falsy
Falsy
1. false
2. 0
3. -0
4. null
5. undefined
6. 0n - Bigint
7. "" - empty string
8. NaN - Not a Number
9. document.all
*/
let user1 = "Harmon" //truthy
let user2 = 0 //falsy
let activeuser = user2 || user1
console.log(activeuser)
let both_active_users = user1 && user2
console.log(both_active_users)

/* Short Circuit Operations
When using or (||) the first truthy value will be printed. If truths and false is present. 
When using and (&&) the first false will be printed, if ther is a false presnt.
when using (&&) and everything is truthy, you get the last truth value.
and if everything is falsy, you get the first falsy value.  
*/
let k = "" || 0 || undefined || 20
let r = " " && 0 && undefined && 20
let m = 1 && 60 && 50 && 90
let q = 0 && -0 && false && undefined
let n = 1 || 60 || 50 || 90
console.log(k , r, m, q, n)
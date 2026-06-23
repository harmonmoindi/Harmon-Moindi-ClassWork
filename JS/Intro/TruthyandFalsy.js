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
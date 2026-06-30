/* 
Scopes enable us to write cleaner and much more efficient codes. 
            - Block Scope - variables declared by const and let inside a fuction, are only accessible within that block. Blocks also include if-statements, loops and others.
            - Function Scope - Variables in a function are only accessible inside the function, it is isolated inside the function. 
            - Global Scope - Variables declared outside a function or block are in global scope. They are open and can be modified from anywhere. 
            - Lexical Scope - The connection 
Block Scope
{
block of code, also shows the span of a scope
}
You can easily manouver from in to out of a block or blocks of scopes, but you can't move out to in. 
*/

let name = "John"; // Global scope
function sayMyName() {
  let name = "Son"; // block and function scope
  console.log(`Name ${name} line ${4}`);
  if (true) {
    let name = "Eugene";
    console.log(`Name ${name} line ${7}`);
  }
  console.log(`Name ${name} line ${9}`); // Name is son
}
sayMyName();
console.log(`Name ${name} line ${11}`);

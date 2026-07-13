/*
Differences of an Array and an object. 
In an Array keys are sequential (numbers), unlike in an object.
- create an array
- inside have two digits

- create an object
- inside have the following keys
- for the object create the length key. 

- console.table both
you should see they are the same. 
*/

const myArray = [60, 90];
const myObject = {
  0: 60,
  1: 90,
  length: 2,
};

console.table(myArray);
console.table(myObject);

/*
Push Method
myArray.push();
 - a new key is created
 - element is added to the key
 - the length is implimented

Try storing the pop and push method inside an object.
 */

myArray.push(30);
console.log(myArray);

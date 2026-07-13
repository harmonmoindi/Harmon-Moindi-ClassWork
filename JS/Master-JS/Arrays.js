/*
Arrays are just objects.
> specialized.<objects>
we use [] to denote an array.
The list of an array range from index 0 to n...
Array lists can contain different datatypes.
*/
const fruits = ["Mangoes", "Oranges", "Bananas", "Wakalaka"];

// you access array elements using the index.

console.log(fruits[0]);
console.table(fruits);

/* Have all your car values in an array
Be able to access all the values i your array; Don't use a loop.
Add a final key, which is an array with your favorite numbers. 
*/

const carArray = [
  {
    modelCode: "3BD-DA16T",
    transmission: "Manual", //index 0
    driveType: "2WD",
    fuel: "Petrol",
  },
  {
    country: "Japan",
    regYear: "2022",
    company: "Cars From Japan", //index 1
    2: "Number of doors",
  },
  function () {
    //index 2
    console.log(
      "This is a bad mf in agriculture. Transports 800 to 1000 cabbages at a go.",
    );
  },
  function () {
    //index 3
    alert(`car: ${car.name};
        model: ${car.model};     
        color: ${car.color};
        funfact: ${car.funFact}`);
  },
  (name = "Suzuki Carry Truck"), //index 4
  (model = 2022), //index 5
];

console.log(carArray[0]);
console.log(carArray[1]);
console.log(carArray[2]);
console.log(carArray[3]);
console.log(carArray[4]);
console.log(carArray[5]);

for (let i = 0; i < carArray.length; i++) {
  console.log("i is ", i);
  console.log(carArray[i]);
}

/*
Array methods 
- push
- pop
- shift
Check out array methods on yourself as they are a couple.
*/

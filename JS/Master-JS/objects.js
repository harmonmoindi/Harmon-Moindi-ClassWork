/*
Objects are complex datatype. 
It's a datatype that houses other datatypes. 
It's hard to express data using a single variable. 

-> {key: value
    key: value
    key: value
}
key => <property> <number or a string> <unique>
value => any other datatype <boolean, string, null, etc>
when a function is inside a object we call it a method. Function <method>. 

Why objects are useful;
1. if you want to represent a complex datatype. 
*/

/*const student_name = "Harmon";
const student_age = 27;
const student_phone = "+254 - 198772672917";

// parent
const parent_name = "Lilian";
const parent_email = "lilian@gmail.com";

/*
this will take too much time and space. 
Objects have one variable representing the whole thing, which makes it easier and faster. 

*/

//objects
/* const student = {
  name: "Harmon Moindi",
  age: 27,
  "favorite quote": "Hold Firm",
  parent: {
    name: "Lilian",
    email: "lilian@gmail.com",
  },
  pet: {},
  34: "Favorite Number",
  sayMyName: function () {
    console.log("Derrick Kamutu");
  },
  anounce: function () {
    alert("Badman Geffadi, enetering, cue the music");
  },
};

/*
create an object called car
properties: name, model, top_speed
engine_information: cylinder, number etc
manufacture: object<> company name, country etc
number as a property > any number
alert_info - function that when called prints information of the car as an alert. 
fun fact: key
*/

const car = {
  name: "Suzuki Carry Truck",
  model: 2022,
  "top speed": 160,
  color: "White",
  engineInfo: {
    modelCode: "3BD-DA16T",
    transmission: "Manual",
    driveType: "2WD",
    fuel: "Petrol",
  },
  manufacture: {
    country: "Japan",
    regYear: "2022",
    company: "Cars From Japan",
    2: "Number of doors",
  },
  funFact: function () {
    console.log(
      "This is a bad mf in agriculture. Transports 800 to 1000 cabbages at a go.",
    );
  },
  alert_output: function () {
    alert(`car: ${car.name}
        model: ${car.model}
        color: ${car.color}
        funfact: ${car.funFact}`);
  },
};
car.alert_output();

/*confirm that you are able it print the object and it's type.*/

console.log(`Car datatype is: ${car}`);
console.log(car);
console.log("Using console.table;");
console.table(car); //table

/*
Accessing individual parts in your object
2 ways;
  1. dot notation. -> doesn't work for everything
        - does not wor with properties which are
                1 numbers
                2 strings with spaces, numbers and special characters
                - can only access properties that follow variable naming rules. 

  
  2. bracket notation. -> works for everything //you can access properties using variables.

For each property access it using both dot and bracket notation.

Hint for nested properties use example. car.manufacture.name or car["manufacturer"]["name"]
*/
// Dot notation
console.log(`Name is ${car.name}, its type is ${typeof car.name}`);

//Bracket notation
console.log(`Name is ${car["name"]}, its type is ${typeof car["name"]}`);

//car model
console.log(`Model is ${car.model} its type is ${typeof car.model}`);

// using bracket notation
console.log(`Model is ${car["model"]} its type is ${typeof car["model"]}`);

//"top speed"
console.log(
  `Top speed is ${car["top speed"]} its type is ${typeof car["top speed"]}`,
);

//nested manufacturer
console.log(
  `Country made is ${car.manufacture.country}, its type is ${typeof car.manufacture.country}`,
);

//bracket notation
console.log(
  `Country made is ${car["manufacture"]["country"]}, its type is ${typeof car["manufacture"]["country"]}`,
);

//nested number
console.log(
  `Country made is ${car["manufacture"][2]}, its type is ${typeof car["manufacture"][2]}`,
);

//The whole thing
console.log(
  `This is the alert function ${car.alert_output}, its type is ${typeof car.alert_output}`,
);

const engineInformation = car.engineInfo;
console.log("Engine information");
console.log(engineInformation);

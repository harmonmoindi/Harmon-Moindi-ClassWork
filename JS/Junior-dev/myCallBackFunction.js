/*
- Create my own callback function. 
- Doing Shape Stuff.
    *circles, squares, triangles, rectangles, etc.
1. for each of the shapes create a fuction <arrow, name>
to calculate the area of the shape. The fuction takes required parameters. 
*/

function areaOfcircle(radius) {
  Area = 3.14 * radius * radius;
  return Area;
}
let radius = 10;
let area = areaOfcircle(radius);
console.log(`Area of circle with radius ${radius} is ${area}`);

let AreaOfSquare = (l) => {
  Area = l * l;
  return Area;
};

let l = 5;
console.log(`Area of square with length ${l} is ${AreaOfSquare(l)}`);

let AreaofRectangle = (len, w) => {
  Area = len * w;
  return Area;
};
let len = 10;
let w = 5;
console.log(
  `Area of rectangle with length ${l} and width ${w} is ${AreaofRectangle(l, w)}`,
);

/*
Create a super funstion called shape. 
its going to take the following parameters:
1. shape name
2. shape area function
3. shape parameters

- Console log each parameter and their types. 
- For each function call the shape function and pass in the required parameters.
example: 
1. shape("circle", areaOfcircle, 10) . test and make observation. 
2. shape("square", areaOfSquare, 5) . test and make observation.


Inside yout shape function, call the shape area function and pass in the shape parameters.
example:
result = param1 (param2, param3, param4)
console.log shape name and result.
*/

function shape(shapeName, shapeAreaFunction, shapeParameters) {
  console.log(`Shape name: ${shapeName}, Type: ${typeof shapeName}`);
  console.log(
    `Shape area function: ${shapeAreaFunction}, Type: ${typeof shapeAreaFunction}`,
  );
  console.log(
    `Shape parameters: ${shapeParameters}, Type: ${typeof shapeParameters}`,
  );
}
let shapeName = "circle";
let shapeAreaFunction = area;
let shapeParameters = 10;

shape(shapeName, shapeAreaFunction, shapeParameters);

shape("Rectangle", AreaofRectangle(len, w), [10, 5]);

shape("Square", AreaOfSquare(l), 5);

// function as a parameter

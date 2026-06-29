/*
To use a function you just have to call it. 
To call a function you just write the funstion name and brackets
*/
function timeAlert() {
  const date = new Date();

  alert(
    `Time stamp: ${date.toLocaleString("en-KE", {
      timeZone: "Africa/Nairobi",
    })}`,
  );
}

timeAlert(); // calling a function

//Area of Triangle example.
function areaOfTriangle(base, height) {
  console.log(`base is ${base} its type ${typeof base}`);
  console.log(`height is ${height} its type is ${typeof height}`);
  const area = 0.5 * base * height; //1/2 x base x height
  console.log(
    `For tiangle with base ${base} and height ${height} area is ${area}`,
  );
}

areaOfTriangle();

areaOfTriangle(20);

areaOfTriangle(20, 30);

let base1 = 50;
let height1 = 60;
areaOfTriangle(base1, height1);

let base2 = "hello";
let height2 = true;
areaOfTriangle(base2, height2);

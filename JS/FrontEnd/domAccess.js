/*
DOM Access
1. querySelector
2. documentGet

    Exercise
1. getElementById; Console log element in the browser. 
2. getElementByClass; 
3. querySelector: for the id (#) && class(.). //You only get the first list item
4. querySelectorAll: You get the whole array of elements
5. use a for loop to go through the array of elements.
*/

const div1 = document.getElementById("div1");
const div2 = document.querySelector("#div1");
console.log(div1);
console.log(div2);

const listOfItems = document.getElementsByClassName("fruits");
const queryListOfItems = document.querySelector(".fruits");
const queryListOfAllItems = document.querySelectorAll(".fruits");

console.log(listOfItems);
console.log(queryListOfItems);
console.log(queryListOfAllItems);

for (let i = 0; i < queryListOfAllItems.length; i++) {
  console.log(queryListOfAllItems[i]);
}

/*
Update DOM elements
- innerHTML <replaces the html>
- innerText <replaces the innerText>

1. buttons
    1. original content
    2. updating content 
    3. update the innerText
*/
const otherFruits = ["Kiwi", "Pinapple", "Dragon Fruit"];
const originalDiv = document.querySelector("#div1").innerHTML;

function original() {
  console.log("original clicked");
  document.querySelector("#div1").innerHTML = originalDiv;
  //reset the div to its original value
}
function replace() {
  console.log("replace clicked");
  const newHtml = `
  <h1>List Of Chores</h1>
      <ul>
        <li class="fruits">Clean Floor</li>
        <li class="fruits">Wash Utensils</li>
        <li class="fruits">Kill Cockroaches & Bugs</li>
      </ul>
      `;
  document.querySelector("#div1").innerHTML = newHtml;
}
function updateFruits() {
  for (let i = 0; i < queryListOfAllItems.length; i++) {
    queryListOfAllItems = otherFruits;
    return queryListOfAllItems;
    console.log(queryListOfAllItems);
  }
  console.log("update fruits clicked");
}

/*
Events - 
    if something happens you want to be notified. 
    they work through callbacks


Create a button
Attach a click event which shows alert
Attach a mouseover which console.log the current date
for each of the events print the event. ie console.log(event)
*/
function clickAlert(e) {
  console.log(e);
  alert("Hi, button has been clicked.");
}
function mouseOverAlert(hover) {
  console.log(hover);
  console.log("Mouse over", new Date());
}
/*
querySelector, getElementById
//
addEventListener (@param1, @param2)
@param1 - event(click, mouse-over etc) as string
@param2 - callback
*/
document
  .querySelector("#btn-event-checker")
  .addEventListener("click", clickAlert);
document
  .querySelector("#btn-event-checker")
  .addEventListener("mouseover", mouseOverAlert);

/*
We can attach an event to window<active tab>
for an mouseMove and print out the co-ordinates of the mouse. 

Have x and y coordinates being display on the screen when someone moves. 
*/

const x = document.getElementById("x");
const y = document.getElementById("y");
window.addEventListener("mousemove", (e) => {
  x.textContent = e.clientX;
  y.textContent = e.clientY;
  //console.log("x direction", e.clientX);
  //console.log("y direction", e.clientY);
});

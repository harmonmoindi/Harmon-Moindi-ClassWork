/*
How to work with forms:
"onsubmit"=> default - you have to prevent the default
        .Event is attached to the form.
"onclick"
*/
document.getElementById("form1").addEventListener("submit", submitForm);

document.getElementById("form1input1").addEventListener("input", (e) => {
  //value
  console.log(e.target.value);
});

function submitForm(e) {
  e.preventDefault();
  const inputList = document.querySelector("#form1").querySelectorAll("input");
  const input1 = inputList[0];
  const input2 = inputList[1];
  console.log("Input 1", input1.value);
  console.log("Input 2", input2.value);
  console.log("Form1 input1", document.getElementById("form1input1").value);
  console.log("Form1 input2", document.getElementById("form1input2").value);
  input1.value = "submitted";
  input2.value = "submitted";
}

/*
1. create a html form.
2. Attach the submit event listener.
3. Prevent form default behavior
4. Print out the values of your form inputs.
*/

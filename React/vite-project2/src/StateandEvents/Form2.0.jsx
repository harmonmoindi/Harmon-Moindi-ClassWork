/*
create a form with the following fields:
- name
- email
- password

- On submit, log the values of the fields to the console.

- After the form, have a list to show the state changes of user inout. 

- For all the input fields, use only 1 state variable. 
example; [input, setInput] = useState(<object>).
*/
import { useState } from "react";
function Form2() {
  const [input, setinput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const nameonChange = (event) => {
    setinput(event.target.value);
  };
  const emailonChange = (event) => {
    setinput(event.target.value);
  };
  const passwordonChange = (event) => {
    setinput(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(input);
  };
}
export default Form2;

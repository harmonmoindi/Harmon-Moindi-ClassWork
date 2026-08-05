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
    setinput({ ...input, name: event.target.value });
  };
  const emailonChange = (event) => {
    setinput({ ...input, email: event.target.value });
  };
  const passwordonChange = (event) => {
    setinput({ ...input, password: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(input);
    console.log("Name:", input.name);
    console.log("Email:", input.email);
    console.log("Password:", input.password);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={input.name}
          onChange={nameonChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={input.email}
          onChange={emailonChange}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={input.password}
          onChange={passwordonChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h2>State Changes:</h2>
      <ul>
        <li>Name: {input.name}</li>
        <li>Email: {input.email}</li>
        <li>Password: {input.password}</li>
      </ul>
    </div>
  );
}
export default Form2;

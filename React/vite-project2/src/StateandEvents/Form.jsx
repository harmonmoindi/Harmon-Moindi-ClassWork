/*
How to handle form input and events in react.

*/
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameOnChange = (event) => {
    console.log("Name is", event.target.value);
    setName(event.target.value);
  };
  const emailOnChange = (event) => {
    console.log("Email is", event.target.value);
  };
  const passwordOnChange = (event) => {
    console.log("Password is", event.target.value);
  };
  const onSubmit = (event) => {
    console.log("Form Submitted");
  };
  return (
    <div>
      <main>
        <div>
          <label>Name</label>
        </div>
        <div>
          <input value={name} onChange={nameOnChange} />
        </div>
      </main>
      <main>
        <div>
          <label>Email</label>
        </div>
        <div>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </main>
      <main>
        <div>
          <label>Password</label>
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </main>
      <main>
        <button onClick={onSubmit}>Submit</button>
      </main>

      <ul>
        <li>Name: {name}</li>
        <li>Email: {email}</li>
        <li>Password: {password}</li>
      </ul>
    </div>
  );
}

export default Form;

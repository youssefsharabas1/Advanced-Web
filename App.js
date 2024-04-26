import './App.css';

//React allows us to create reusable UI components.
import { useState } from 'react';

function App() {

  //const is short for contant, which indicates the variable's value won't change
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // Create Submit button Handler
  // Asynchronous request run in parallel with any task running
  const handleSubmit = async (event) => {
      
   event.preventDefault();
    try {
      let res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user: name,
          pass: password
        }),
      });
      //HTML Successful login 2XX
      if (res.status === 200) {
        //window.location.href = 'https://w3schools.com/';

       alert("You have successfully logged in!");
      } else {
        
        alert("Some error occured");
      }
    } 
    // Error Handler
    catch (err) {
      console.log(err);
    }
    //Empty input cells if there is an error when redirecting
    setName("");
    setPassword("");
  }

  return (
    // Simple HTML Form 
    <div>
      <h1>React Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </label>
        <label>Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          </label>
          <input type="submit" value="Login"/>
      </form>
    </div>
  );
}

export default App;

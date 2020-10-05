import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(async () => {
    const res = await fetch("http://localhost:3001/auth", {
      method: "GET",
      mode: "cors",
      credentials: "include",
    });

    const { success } = await res.json();

    if (success) alert("user auth success");
  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3001/login", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email }),
    });

    const { success, user } = await res.json();

    if (success) {
      alert("Welcome user: " + user);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;

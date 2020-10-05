import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import DataContext from "../../contexts/DataContext";

const Login = (props) => {
  const [form, setForm] = useState({ password: "", email: "" });
  const history = useHistory();
  const [err, setErr] = useState(false);
  const { login, setLogin } = useContext(DataContext);

  useEffect(() => {
    console.log(login);
    if (login) history.push("/chat");
  }, [login]);

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      // redirect
      setLogin(true);
      history.push("/chat");
    } else {
      setErr(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleForm}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleForm}
        />
        <input type="submit" />
      </form>
      {err && <div>Error</div>}
    </div>
  );
};

export default Login;

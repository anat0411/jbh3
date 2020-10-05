import React, { useEffect, useState, useContext } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  Link,
} from "react-router-dom";
import "./App.css";
import Register from "../Register/Register";
import Login from "../Login/Login";
import DataContext from "../../contexts/DataContext";
import Chat from "../Chat/Chat";

const PrivateRoute = (props) => {
  const { login, process } = useContext(DataContext);
  const history = useHistory();

  if (!login && !process) {
    // history.push('/login');
    return <div>403</div>;
  }

  return <Route {...props} />;
};

function App() {
  const [login, setLogin] = useState(false);
  const [process, setProcess] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/auth/verify");

      // success login
      if (res.status === 200) {
        setLogin(true);
      }

      setProcess(false);
    })();
  }, []);
  return (
    <DataContext.Provider value={{ login, process, setLogin }}>
      <Router>
        <header>
          <Link to="/chat">Chat </Link>
          <Link to="/register">Register </Link>
          <Link to="/login">Login </Link>
        </header>
        <br />
        <div>
          {/* {!process && !login && <Redirect to="/login"/>} */}
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/chat">
              <Chat />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </DataContext.Provider>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import LoginContext from "../contexts/loginContext";
import Login from "../Login/Login";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="App">
      <LoginContext.Provider value={isLogin}>
        {!isLogin && <Login setIsLogin={setIsLogin} />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;

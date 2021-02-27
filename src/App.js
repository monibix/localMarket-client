import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./view/Auth/Login";
import Signup from "./view/Auth/Signup";
import Home from "./view/Home/Home";
import PrivateRoute from "./components/Routes/PrivateRoute";
import AnonRoute from "./components/Routes/AnonRoute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => localStorage.removeItem("user")}>logout</button>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <PrivateRoute path="/private" component={PrivateComp} />
          <AnonRoute path="/anon" component={() => <h1>Anon Route</h1>} />
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

function PrivateComp() {
  return <h1>This is private</h1>;
}

export default App;

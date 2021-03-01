import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/login">
            <h2>Here goes a login form</h2>
          </Route>
          <Route path="/signup">
            <h2>Here goes a signup form</h2>
          </Route>
          <Route exact path="/">
            <h2>User should be redirected here after login or signup</h2>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;

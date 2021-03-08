import React from "react";
import "./App.css";
import { Switch, Route} from 'react-router-dom'
import Main from './views/Main/Main';
import Signup from './views/Signup/Signup';
import Login from './views/Login/Login';
import Products from './views/Products/Products';

function App() {


  return (
    <div className="App">


      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        
        <Route path="/">
          <Main />
        </Route>
      </Switch>

    </div>
  );
}

export default App;

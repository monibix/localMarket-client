import React from "react";
import "./App.css";
import { Switch, Route} from 'react-router-dom'
import Main from './views/Main/Main';
import Signup from './views/Signup/Signup';
import Login from './views/Login/Login';
import Products from './views/Products/Products';
import AddProduct from './views/AddProduct/AddProduct'
import Profile from './views/Profile/Profile'
import PrivateRoute from "./components/Routes/PrivateRoute";
//import AnonRoute from "./components/Routes/AnonRoute";
import MyProductDetails from "./views/MyProductDetails/MyProductDetails";

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
        <PrivateRoute exact path="/products">
          <Products />
        </PrivateRoute>
        <PrivateRoute path="/add">
          <AddProduct />
        </PrivateRoute>
        <PrivateRoute path="/products/:productId">
          <MyProductDetails />
        </PrivateRoute>
        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>
        
        <Route path="/">
          <Main />
        </Route>
      </Switch>

    </div>
  );
}

export default App;

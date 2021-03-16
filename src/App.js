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
import EditProduct from "./views/EditProduct/EditProduct";
import EditProfile from "./views/EditProfile/EditProfile";
import ProductsByCategory from "./views/ProductsByCategory/ProductsByCategory";
import ProductByCategory from "./views/ProductByCategoryDetail/ProductByCategoryDetail";
import SellerDetails from "./views/SellerDetails/SellerDetails";
import SearchProduct from "./views/SearchProduct/SearchProduct";

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
        <PrivateRoute exact path="/products/:productId">
          <MyProductDetails />
        </PrivateRoute>
        <PrivateRoute path="/products/:productId/edit">
          <EditProduct />
        </PrivateRoute>
        <PrivateRoute exact path="/profile">
          <Profile />
        </PrivateRoute>
        <PrivateRoute path="/profile/edit">
          <EditProfile />
        </PrivateRoute>
        <Route exact path="/category">
          <ProductsByCategory />
        </Route>
        <Route path="/category/:productId">
          <ProductByCategory />
        </Route>
        <Route path="/seller/:sellerId">
          <SellerDetails />
        </Route>
        <Route path="/query">
          <SearchProduct />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>

    </div>
  );
}

export default App;

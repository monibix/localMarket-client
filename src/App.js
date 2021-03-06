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
import MyProductDetails from "./views/MyProductDetails/MyProductDetails";
import EditProduct from "./views/EditProduct/EditProduct";
import EditProfile from "./views/EditProfile/EditProfile";
import ProductsByCategory from "./views/ProductsByCategory/ProductsByCategory";
import ProductByCategory from "./views/ProductByCategoryDetail/ProductByCategoryDetail";
import SellerDetails from "./views/SellerDetails/SellerDetails";
import SearchProduct from "./views/SearchProduct/SearchProduct";
import ShoppingCart from "./views/ShooppingCart/ShoppingCart";
import MyFavourites from "./views/MyFavourites/MyFavourites";
import MyOrders from "./views/MyOrders/MyOrders";
import ErrorBoundary from "./views/ErrorBoundary/ErrorBoundary";
import OrderSuccess from "./views/OrderSuccess/OrderSuccess";
import NotFound from "./components/NotFound/NotFound";

function App() {

  return (
    <div className="App">
    <ErrorBoundary>
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
        <PrivateRoute exact path="/favourites">
          <MyFavourites />
        </PrivateRoute>
        <PrivateRoute exact path="/orders">
          <MyOrders />
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
        <Route path="/shoppingcart">
          <ShoppingCart />
        </Route>
        <Route path="/order-confirmation">
          <OrderSuccess />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      </ErrorBoundary>
    </div>
  );
}

export default App;
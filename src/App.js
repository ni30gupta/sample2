import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Protected from "./component/Protected";
import Logout from "./pages/Logout";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./component/Footer";
import Forgetpassword from "./pages/Forgetpassword";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./component/CartContext";
import Orders from "./component/Orders";

function App() {
  return (
    <CartProvider>
      <div className="header">
        <header>
          <BrowserRouter>
            {/* <Header /> */}
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/shop" component={Shop} />
              <Route path="/signup" component={SignUp} />
              <Route path="/Forgetpassword" component={Forgetpassword} />
              <Route path="/Checkout" component={Checkout} />

              <Route path="/profile">
                <Protected cmp={Profile} />
              </Route>
              <Route path="/cart">
                <Protected cmp={Cart} />{" "}
              </Route>
              <Route path="/orders">
                <Protected cmp={Orders} />
              </Route>
              <Route path="/logout" component={Logout} />
            </Switch>
            <Footer />
          </BrowserRouter>
        </header>
      </div>
    </CartProvider>
  );
}

// const Logout = () => {
//   localStorage.setItem("auth", false);
//   return <Redirect to="/"></Redirect>;
// };


export default App;

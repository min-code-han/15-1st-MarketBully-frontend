import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import AsideMenu from "./Components/AsideMenu/AsideMenu";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import ItemList from "./Pages/ItemList/ItemList";
import ItemDetail from "./Pages/ItemDetail/ItemDetail";
import ItemCart from "./Pages/ItemCart/ItemCart";
import Payment from "./Pages/Payment/Payment";
import NotFound from "./Pages/NotFound/NotFound";

const HIDE_ASIDE_MENU = ["/Login", "/Signup", "/ItemCart"];
const aside = HIDE_ASIDE_MENU.includes(window.location.pathname) ? null : <AsideMenu />;

class Routes extends Component {
  render() {
    return (
      <Router>
        {/*<Header />*/}
        {aside}

        <Switch>
          <Route exact path="/Home" component={Home}></Route>
          <Route exact path="/Signup" component={Signup}></Route>
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/ItemList" component={ItemList}></Route>
          <Route exact path="/ItemDetail" component={ItemDetail}></Route>
          <Route exact path="/ItemDetail/:id" component={ItemDetail}></Route>
          <Route exact path="/ItemCart" component={ItemCart}></Route>
          <Route exact path="/Payment" component={Payment}></Route>
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;

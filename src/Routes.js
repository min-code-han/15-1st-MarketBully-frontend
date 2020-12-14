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

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header />
        <AsideMenu />
        <Router>
          <Switch>
            <Route exact path="" component={Home}></Route>
            <Route exact path="" component={Signup}></Route>
            <Route exact path="" component={Login}></Route>
            <Route exact path="" component={ItemList}></Route>
            <Route exact path="" component={ItemDetail}></Route>
            <Route exact path="" component={ItemCart}></Route>
            <Route exact path="" component={Payment}></Route>
          </Switch>
        </Router>
        <Footer />
      </>
    );
  }
}

export default Routes;

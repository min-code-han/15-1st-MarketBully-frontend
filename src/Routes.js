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
      <Router>
        <Header />
        <AsideMenu />
        <Switch>
          <Route exact path="/Home" component={Home}></Route>
          <Route exact path="/Signup" component={Signup}></Route>
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/ItemList" component={ItemList}></Route>
          <Route exact path="/ItemDetail" component={ItemDetail}></Route>
          <Route exact path="/ItemCart" component={ItemCart}></Route>
          <Route exact path="/Payment" component={Payment}></Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;

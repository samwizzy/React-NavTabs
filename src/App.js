import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./app/Home";
import Product from "./app/Product";
import Playground from "./app/Playground";
import Login from "./app/Login";
import NavTabs from "./app/NavTabs";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/playground" component={Playground} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/navtabs/:tab/:tabId?" component={NavTabs} />
        </Switch>
      </Router>
    </div>
  );
}

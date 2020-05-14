import React from "react";
import Navigation from "./container/Navigation";
import RecipeQuery from "./container/RecipeQuery";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import NavStyle from "./assets/sass/navbar.module.scss";

import About from "./pages/About";
import style from "./assets/sass/App.module.scss";
import "./index.scss";

const App = () => {
  return (
    <Router>
      <div className={`${style.App}`}>
        <Navigation style={NavStyle} />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/vegan">
            <RecipeQuery append="&Health=vegan" />
          </Route>
          <Route exact path="/keto">
            <RecipeQuery append="&Health=keto-friendly" />
          </Route>
          <Route exact path="/glutenFree">
            <RecipeQuery append="&Health=gluten-free" />
          </Route>
          <Route exact path="/paleo">
            <RecipeQuery append="&Health=paleo" />
          </Route>
          <Route exact path="/lowCarb">
            <RecipeQuery append="&Diet=low-carb" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

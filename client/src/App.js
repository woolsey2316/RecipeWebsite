import React, { Suspense, lazy } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UnPrivateRoute from './hocs/UnPrivateRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import Vegan from "./pages/Vegan";
import Keto from "./pages/Keto";
import GlutenFree from "./pages/GlutenFree";
import Paleo from "./pages/Paleo";
import LowCarb from "./pages/LowCarb";
import SugarConscious from './pages/SugarConscious'

const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <Router>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <UnPrivateRoute path="/login" component={Login}/>
            <UnPrivateRoute path="/register" component={Register}/>
            <Route exact path="/vegan">
              <Vegan healthLabel="&Health=vegan" />
            </Route>
            <Route exact path="/sugar-conscious">
              <SugarConscious healthLabel="&Health=low-sugar" />
            </Route>
            <Route exact path="/keto">
              <Keto healthLabel="&Health=keto-friendly" />
            </Route>
            <Route exact path="/gluten-free">
              <GlutenFree healthLabel="&Health=gluten-free" />
            </Route>
            <Route exact path="/paleo">
              <Paleo healthLabel="&Health=paleo" />
            </Route>
            <Route exact path="/low-carb">
              <LowCarb healthLabel="&Diet=low-carb" />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;

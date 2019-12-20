import React from 'react';
import Navigation from "./Navigation";
import RecipeQuery from "./RecipeQuery";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import NavStyle from './assets/css/navbar.module.css';

import './assets/css/App.css';
import './assets/css/main.css';
import './assets/css/noscript.css';

//function component const example = (props) => { return <div /> }
const App = () => {
  return (
	<Router>
		
		<div className="App">
		<Navigation style = {NavStyle}/>
		<Switch>
			<Route exact path="/" ><Home></Home></Route>
			<Route exact path="/about" ><RecipeQuery append=''></RecipeQuery></Route>
			<Route exact path="/vegan" ><RecipeQuery append="&health=vegan"/></Route>
			<Route exact path="/keto" ><RecipeQuery append="&health=keto"/></Route>
			<Route exact path="/glutenFree" ><RecipeQuery append="&health=gluten-free"/></Route>
			<Route exact path="/paleo" ><RecipeQuery append="&health=paleo"/></Route> 
			<Route exact path="/lowCarb" ><RecipeQuery append="&diet=low-carb"/></Route> 
		</Switch>
		</div>

		<script src="assets/js/jquery.scrolly.min.js"></script>
		<script src="assets/js/jquery.scrollex.min.js"></script>
		<script src="assets/js/util.js"></script>
		<script src="assets/js/main.js"></script>
	</Router>
  );
 
}

export default App;

import React from 'react';
import Navigation from "./Navigation";
import RecipeQuery from "./RecipeQuery";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Tile from './Tile';
import Overview from './Overview';
import Footer from './Footer';
import NavStyle from './navbar.module.css';
import Banner from './Banner';
import './App.css';
import './assets/css/main.css';
import './assets/css/noscript.css';

//function component const example = (props) => { return <div /> }
const App = () => {
  return (
	<Router>
		<body>
		<div className="App">
		<Navigation style = {NavStyle}/>
		<Switch>

			<Route path="/about" ><RecipeQuery append=''></RecipeQuery></Route>
			<Route path="/vegan" ><RecipeQuery append="&health=vegan"/></Route>
			<Route path="/keto" ><RecipeQuery append="&diet=keto"/></Route>
			<Route path="/glutenFree" ><RecipeQuery append="&health=gluten-free"/></Route>
			<Route path="/paleo" ><RecipeQuery append="&diet=vegan"/></Route> 
			<Route path="/lowCarb" ><RecipeQuery append="&diet=low-carb"/></Route> 
		</Switch>
			<div id="wrapper">
				<header id="header" className="reveal alt">
					<a href="/" className="logo"><strong>Recipes</strong> <span>for various dietary requirements</span></a>
				</header>

				

				<div id="main">
				<Banner id="banner" className="major" />
					<section id="one" className="tiles">
						<Tile title="Vegan" url="./images/pic01.jpg" description= "No meat, poultry, fish, dairy, eggs or honey"/>
						<Tile title="Sugar Conscious" url="./images/pic02.jpg" description= "Less than 4g of sugar per serving"/>
						<Tile title="Gluten Free" url="./images/pic03.jpg" description= "free from wheat, barley, rye, and oats."/>
						<Tile title="Paleo" url="./images/pic04.jpg" description= "foods that in the past could only be obtained by hunting and gathering."/>
						<Tile title="Keto" url="./images/pic05.jpg" description= "Maximum 7 grams of net carbs per serving"/>
						<Tile title="Low Carb" url="./images/pic06.jpg" description= "Less than 20% of total calories from carbs"/>
					</section>

					<section id="two">
						<Overview/>
					</section>

				</div>

				<Footer/>
			</div>
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>	
			
		</div>
		</body>
    </Router>
  );
 
}

export default App;

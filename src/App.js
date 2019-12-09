import React from 'react';
import Navigation from "./Navigation";
import Vegan from "./Vegan";
import GlutenFree from "./GlutenFree";
import Keto from "./Keto";
import Paleo from "./Paleo";
import LowCarb from "./LowCarb";
import {BrowserRouter as Router, Switch, Route, NavLink as Link} from 'react-router-dom';
import About from './About';
import './App.css';
import './assets/css/main.css';

//function component const example = (props) => { return <div /> }
const App = () => {
  return (
    <Router>
		<div className="App">
		<Navigation/>
		<Switch>

			<Route path="/about" component={About} />
			<Route path="/vegan" component={Vegan} />
			<Route path="/keto" component={Keto} />
			<Route path="/glutenFree" component={GlutenFree} />
			<Route path="/paleo" component={Paleo} /> 
			<Route path="/lowCarb" component={LowCarb} /> 
		</Switch>
		
		<title>Forty by HTML5 UP</title>
		<meta charSet="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
		<link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Playfair+Display|Raleway&display=swap" rel="stylesheet"></link>
		
			<div id="wrapper">
			<header id="header" className="alt">
				<a href="/" className="logo"><strong>Forty</strong> <span>by HTML5 UP</span></a>
				<nav>
					<a href="#menu">Menu</a>
				</nav>
			</header>

					<nav id="menu">
						<ul className="links">
							<li><Link to="/">Home</Link></li>
							<li><Link to="/Vegan">Vegan</Link></li>
						</ul>
						<ul className="actions stacked">
							<li><a href="#" className="button primary fit">Get Started</a></li>
							<li><a href="#" className="button fit">Log In</a></li>
						</ul>
					</nav>

					<section id="banner" className="major">
						<div className="inner">
							<header className="major">
								<h1>A Recipe Database</h1>
							</header>
							<div className="content">
								<p>Triple-tested recipes, expert cooking tips and food inspiration</p>
								<ul className="actions">
									<li><a href="#one" className="button next scrolly">Get Started</a></li>
								</ul>
							</div>
						</div>
					</section>

					<div id="main">
							<section id="one" className="tiles">
								<article>
									<span className="image">
										<img src="images/pic01.jpg" alt="" />
									</span>
									<header className="major">
										<h3><a href="/vegan" className="link">Vegan</a></h3>
										<p>No meat, poultry, fish, dairy, eggs or honey</p>
									</header>
								</article>
								<article>
									<span className="image">
										<img src="images/pic02.jpg" alt="" />
									</span>
									<header className="major">
										<h3><a href="/sugarConscious" className="link">Sugar Conscious</a></h3>
										<p>Less than 4g of sugar per serving</p>
									</header>
								</article>
								<article>
									<span className="image">
										<img src="images/pic03.jpg" alt="" />
									</span>
									<header className="major">
										<h3><a href="/glutenFree" className="link">Gluten Free</a></h3>
										<p> free from wheat, barley, rye, and oats.</p>
									</header>
								</article>
								<article>
									<span className="image">
										<img src="images/pic04.jpg" alt="" />
									</span>
									<header className="major">
										<h3><a href="/paleo" className="link">Paleo</a></h3>
										<p>foods that in the past could only be obtained by hunting and gathering.</p>
									</header>
								</article>
								<article>
									<span className="image">
										<img src="images/pic05.jpg" alt="" />
									</span>
									<header className="major">
										<h3><a href="/keto" className="link">Keto</a></h3>
										<p>Maximum 7 grams of net carbs per serving</p>
									</header>
								</article>
								<article>
									<span className="image">
										<img src="images/pic06.jpg" alt="" />
									</span>
									<header className="major">
										<h3><a href="/lowCarb" className="link">Low Carb</a></h3>
										<p>Less than 20% of total calories from carbs</p>
									</header>
								</article>
							</section>

							<section id="two">
								<div className="inner">
									<header className="major">
										<h2>Massa libero</h2>
									</header>
									<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
									<ul className="actions">
										<li><a href="landing.html" className="button next">Get Started</a></li>
									</ul>
								</div>
							</section>

					</div>

					<footer id="footer">
						<div className="inner">
							<ul className="icons">
								<li><a href="#" className="icon brands alt fa-twitter"><span className="label">Twitter</span></a></li>
								<li><a href="#" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></a></li>
								<li><a href="#" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
								<li><a href="#" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
								<li><a href="#" className="icon brands alt fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
							</ul>
							<ul className="copyright">
								<li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
							</ul>
						</div>
					</footer>

			</div>
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>
		</div>
    </Router>
  );
 
}

export default App;

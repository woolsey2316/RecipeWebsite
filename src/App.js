import React, {useEffect, useState} from 'react';
import Recipe from "./Recipe";
import Navbar from "./Navbar";
import Navigation from "./Navigation";
import ItemDetail from './ItemDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './About';
import './App.css';

const App = () => {
  const APP_ID = "bde76692";
  const APP_KEY = "a779c707df0015efad7cf8cee3391fe1";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search)
  }

  const getSearch = e => {
    //prevent refreshing page when every key entered
    e.preventDefault();
    setQuery(search);
  }

  return (
    <Router>
    <div className="App">
      <Navigation/>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/about" component={About} />
        <Route path="/recipe/:id" component={ItemDetail} />
      </Switch>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" 
        type = "text" 
        value={search} 
        onChange={updateSearch}
        />
        <button className="search-button" type="submit">Search</button>
      </form>

      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients} />
        ))}
      </div>
    </div>
    </Router>
  );
}

export default App;

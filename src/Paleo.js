import React, {useState, useEffect} from 'react';
import style from './App.css';
import {link} from 'react-router-dom';
import Recipe from './Recipe';

function Paleo() {

    const APP_ID = "bde76692";
    const APP_KEY = "a779c707df0015efad7cf8cee3391fe1";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chocolate');

    useEffect(() => {
      async function getRecipes() {
          const response = await fetch(
              `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&diet=paleo`
          );
          const data = await response.json();
          console.log(data);
          setRecipes(data.hits);
      }
      getRecipes();
    }, [query]);

    const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search)
    }

    const getSearch = e => {
    //prevent refreshing page when every character is entered on the keyboard
    e.preventDefault();
    setQuery(search);
    }

    return (
        <div>
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
    );
}

export default Paleo;
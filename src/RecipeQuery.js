import React, {useState, useEffect} from 'react';
import Recipe from './Recipe';
import style from "./assets/css/recipequery.module.css"


function RecipeQuery(props) {

    const APP_ID = "bde76692";
    const APP_KEY = "a779c707df0015efad7cf8cee3391fe1";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chocolate');

    useEffect(() => {
      async function getRecipes() {
          const response = await fetch(
              `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}${props.append}`
          );
          const data = await response.json();
          console.log(data);
          setRecipes(data.hits);
      }
      getRecipes();
    }, [props, query]);

    const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search)
    }

    const getSearch = e => {
    //prevent refreshing page when every time a character is entered in the search bar
    e.preventDefault();
    setQuery(search);
    }

    return (
        <div src= {style} className="App">
            <form src= {style} onSubmit={getSearch} className="search-form">
                <input src={style.input}
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

export default RecipeQuery;
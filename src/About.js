import React, {useState, useEffect} from 'react';
import Recipe from './Recipe';
import './App.css';

const About = () => {
    
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('chicken');
    const APP_ID = "bde76692";
    const APP_KEY = "a779c707df0015efad7cf8cee3391fe1";

    useEffect(() => {
        async function getRecipes() {
            const response = await fetch(
                `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
            );
            const data = await response.json();
            console.log(data);
            setRecipes(data.hits);
        }
        getRecipes();
    }, [query]);

    const updateSearch = e => {
        setSearch(e.target.value);
        console.log(search);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    };
    
    return ( 
        <div className="App"> 
            <form onSubmit={getSearch} className = "search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearch}>
                </input>
                <button className = "search-button" type="submit">
                    Search
                </button>
            </form>
            <div className="recipes">
            {recipes.map(recipe => (
                <Recipe>
                    key={recipe.recipe.label}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                </Recipe>
            ))}
            </div>
        </div>
    )
}

export default About;
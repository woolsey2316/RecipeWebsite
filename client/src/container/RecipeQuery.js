import React, { useState, useEffect } from "react";
import Recipe from "@/components/Recipe";
import SideBar from "@/container/SideBar";
import SearchResultTitle from "@/components/SearchResultTitle";
import style from "@/styles/sass/RecipeQuery.module.scss";

function RecipeQuery({ healthLabel, diet, searchTerm, labels }) {
  const APP_ID = process.env.NEXT_PUBLIC_APP_ID;
  const APP_KEY = process.env.NEXT_PUBLIC_APP_KEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(searchTerm);

  if (labels) {
    healthLabel = Object.values(labels)[0].reduce((curr, prev, index) => { 
      if (index !== 0 ) {
        return curr += "&" + prev 
      } else {
        return curr += prev;
      }
    },"")
    diet = Object.values(labels)[1].reduce((curr, prev, index) => { 
      if (index !== 0 ) {
        return curr += "&" + prev 
      } else {
        return curr += prev;
      }
    },"")
  }
  
  let url = ""
  
  if (healthLabel && diet) {
    url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${healthLabel}&Diet=${diet}`
  } else if (healthLabel) {
    url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${healthLabel}`
  } else if (diet) {
    url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&Diet=${diet}`
  } else {
    url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  }

  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
  useEffect(() => {
    async function getRecipes() {
      fetch(url)
        .then(handleErrors)
        .then(async function(response) {
          const data = await response.json();
          setRecipes(data.hits);
        })
        .catch(error => {
          console.log(error);
        });
    }
    getRecipes();
  }, [healthLabel, query]);

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    //prevent refreshing page when every time a character is entered in the search bar
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className={style.background}>
      <form className={style.searchForm} onSubmit={getSearch}>
        <input
          className={style.input}
          placeholder="search recipe"
          id="seachbar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
      </form>
      <div className={style.searchResults}>
        <div className={style.recipes}>
          {query ? <SearchResultTitle searchTerm={query} /> : null}
          {recipes.map(recipe => (
            <Recipe
              key={recipe.recipe.url}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              url={recipe.recipe.url}
            />
          ))}
        </div>
        <SideBar />
      </div>
    </div>
  );
}

export default RecipeQuery;

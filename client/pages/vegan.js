import React from "react";
import RecipeQuery from "@/container/RecipeQuery";
import Navigation from "@/container/Navigation";
import RecipeHero from "@/components/RecipeHero";

const vegan = () => {
  return (
    <React.Fragment>
      <Navigation />
      <RecipeHero type="Vegan"/>
      <RecipeQuery searchTerm="chocolate" healthLabel="vegan" />
    </React.Fragment>
  );
};

export default vegan

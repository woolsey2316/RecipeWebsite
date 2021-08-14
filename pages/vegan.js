import React from "react";
import RecipeQuery from "@/container/RecipeQuery";
import Navigation from "@/container/Navigation";
import RecipeHero from "@/components/RecipeHero";

export default ({ healthLabel }) => {
  return (
    <React.Fragment>
      <Navigation />
      <RecipeHero/>
      <RecipeQuery searchTerm="chocolate" healthLabel="vegan" />
    </React.Fragment>
  );
};

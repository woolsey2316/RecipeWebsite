import React from "react";
import RecipeQuery from "@/container/RecipeQuery";
import RecipeHero from "@/components/RecipeHero";
import Navigation from "@/container/Navigation";

export default () => {
  return (
    <React.Fragment>
      <Navigation />
      <RecipeHero type="Sugar-Conscious"/>
      <RecipeQuery searchTerm="cake" healthLabel="sugar-conscious" />
    </React.Fragment>
  );
};

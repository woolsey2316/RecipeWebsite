import React from "react";
import RecipeHero from "@/components/RecipeHero";
import RecipeQuery from "@/container/RecipeQuery";
import Navigation from "@/container/Navigation";

const GlutenFree = () => {
  return (
    <React.Fragment>
      <Navigation />
      <RecipeHero type="Gluten-Free" />
      <RecipeQuery searchTerm="chocolate" healthLabel="gluten-free" />
    </React.Fragment>
  );
};

export default GlutenFree

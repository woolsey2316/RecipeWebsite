import React from "react";
import RecipeQuery from "@/container/RecipeQuery";
import RecipeHero from "@/components/RecipeHero";
import Navigation from "@/container/Navigation";

const Keto = ({ healthLabel }) => {
  return (
    <React.Fragment>
      <Navigation />
      <RecipeHero/>
      <RecipeQuery searchTerm="chicken" healthLabel="keto" />
    </React.Fragment>
  );
};

export default Keto;

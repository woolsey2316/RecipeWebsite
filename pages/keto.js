import React from "react";
import RecipeQuery from "@/container/RecipeQuery";
import RecipeHero from "@/components/RecipeHero";
import Navigation from "@/container/Navigation";

const Keto = () => {
  return (
    <React.Fragment>
      <Navigation />
      <RecipeHero type="Keto"/>
      <RecipeQuery searchTerm="chicken" healthLabel="keto-friendly" />
    </React.Fragment>
  );
};

export default Keto;

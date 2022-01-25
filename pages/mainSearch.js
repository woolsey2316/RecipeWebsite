import React, { useState } from "react";
import RecipeHero from "@/components/RecipeHero";
import RecipeQuery from "@/container/RecipeQuery";
import Navigation from "@/container/Navigation";
import CustomSearch from "../src/components/CustomSearch"

const mainSearch = () => {
  const [labels, setLabels] = useState({"Allergies": [], "Diets": [], "Calories": [], "Nutrients": []})
  return (
    <React.Fragment>
      <Navigation />
      <RecipeHero />
      <CustomSearch setLabels={setLabels} labels={labels}/>
      <RecipeQuery searchTerm="chocolate" labels={labels}/>
    </React.Fragment>
  );
};

export default mainSearch
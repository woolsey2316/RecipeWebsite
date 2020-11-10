import React from "react";
import RecipeQuery from "../container/RecipeQuery";
import Navigation from "../container/Navigation";

export default ({ healthLabel }) => {
  return (
    <React.Fragment>
      <Navigation />
      <RecipeQuery searchTerm="cake" append={healthLabel} />
    </React.Fragment>
  );
};

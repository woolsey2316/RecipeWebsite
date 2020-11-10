import React from "react";

import Tile from "../Tile";
import style from "../assets/sass/Tiles.module.scss";

const imagePath1 = "./images/vegan.jpg";
const imagePath2 = "./images/sugar-conscious.jpg";
const imagePath3 = "./images/gluten-free.jpg";
const imagePath4 = "./images/paleo_diet.jpg";
const imagePath5 = "./images/keto.jpg";
const imagePath6 = "./images/low-carb.jpg";

export default props => {
  return (
    <section id="one" className={style.tiles}>
      <Tile
        ref={props.callBackRef}
        title="Vegan"
        url={imagePath1}
        description="No meat, poultry, fish, dairy, eggs or honey"
      />
      <Tile
        title="Sugar Conscious"
        url={imagePath2}
        description="Less than 4g of sugar per serving"
      />
      <Tile
        title="Gluten Free"
        url={imagePath3}
        description="free from wheat, barley, rye, and oats."
      />
      <Tile
        title="Paleo"
        url={imagePath4}
        description="foods that in the past could only be obtained by hunting and gathering."
      />
      <Tile
        title="Keto"
        url={imagePath5}
        description="Maximum 7 grams of net carbs per serving"
      />
      <Tile
        title="Low Carb"
        url={imagePath6}
        description="Less than 20% of total calories from carbs"
      />
    </section>
  );
};

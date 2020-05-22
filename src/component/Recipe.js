import React, { useState } from "react";
import style from "../assets/sass/recipe.module.scss";

const Recipe = ({ title, calories, image, ingredients, url }) => {
  const [showInfo, setInfo] = useState(false);
  if (!ingredients) {
    return null;
  }
  return (
    <div className={style.outer}>
      <a className={style.a} href={url}>
        <img className={style.image} src={image} alt="" />
      </a>
      <a className={style.a} href={url}>
        <h3 className={style.h3}>
          <span className={style.span}>
            {title.charAt(0).toUpperCase() + title.slice(1)}
          </span>
        </h3>
      </a>
      {!showInfo && (
        <button className={style.showMoreButton} onClick={() => setInfo(true)}>
          Show More
        </button>
      )}
      {showInfo && (
        <React.Fragment>
          <p className={style.p}>{Math.round(calories) + " calories"}</p>
          <ul className={style.ul}>
            {ingredients.map(ingredient => (
              <li key={ingredient.text} className={style.li}>
                {ingredient.text}
              </li>
            ))}
          </ul>
        </React.Fragment>
      )}
    </div>
  );
};

export default Recipe;

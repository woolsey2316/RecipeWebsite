import React from "react";
import style from "@/styles/sass/Overview.module.scss";
import buttonStyle from "@/styles/sass/Button.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

const Overview = () => {
  return (
    <section className={style.section} id="two">
      <div className={style.inner}>
        <header className={style.major}>
          <h2 className={style.h2}>Purpose</h2>
        </header>
        <p className={style.p}>
          Have a think about your group of friends and colleagues right now.
          When was the last time you ate together and what did they order?
          Chances are they had to avoid some food or beverages. Maybe it was a
          soy latte, perhaps a gluten free sandwich, or maybe a vegetarian
          salad. We’re sure you can think of someone.
        </p>
        <br />
        <p className={style.p}>
          In fact, 1 in 5 Australians currently live with a food intolerance or
          allergy, which means the possibility of you having to cater for one or
          more special dietary requirements is almost a certainty. Furthermore,
          there’s a wide variety of voluntary diets that have risen to fame in
          recent times. These aren’t always due to a food intolerance or
          allergy, but can restrict a similar if not greater range of foods.
        </p>
        <ul className={style.actions}>
          <li className={style.li}>
            <a
              href="#one"
              className={`${buttonStyle.transparentButton} ${buttonStyle.next}`}
            > Get Started &#160;&#160;  
              <FontAwesomeIcon
              className={style.icon}
              icon={"arrow-right"}
            
            />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Overview
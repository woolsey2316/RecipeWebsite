import React from "react";
import style from "../assets/sass/Banner.module.scss";
import buttonStyle from "../assets/sass/Button.module.scss";
import Navigation from "../container/Navigation";
import NavStyle from "../assets/sass/Navigation.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

const Banner = ({ scroll }) => {
  return (
    <section id="landing" className={`${style.banner} ${style.major} `}>
      <Navigation style={NavStyle} />
      <div style={{ width: "100%" }} />
      <div className={style.inner}>
        <header className={style.majorHeader}>
          <h1 className={style.h1}>Recipe Search Engine</h1>
        </header>
        <div className={style.content}>
          <p className={style.p}>
            food inspiration for dietary restrictions
          </p>
          <ul className={style.actions}>
            <li>
              <a
                href="#one"
                className={`${buttonStyle.transparentButton} ${buttonStyle.next}`}
                onClick={scroll}
              >
                Get Started&#160;&#160;  
                <FontAwesomeIcon
                className={style.icon}
                icon={"arrow-right"}
              
              />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Banner;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useSticky from "../hooks/useSticky.js";
import useResize from "../hooks/useResize.js";
import style from "../assets/sass/Navigation.module.scss";
import routes from "../routes.json";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function Navigation() {
  const { isSticky } = useSticky();
  const { isWideScreen } = useResize();
  const [showNav, setReveal] = useState(true);

  return (
    <div style={{ height: "3.6em", width: "100%" }}>
      <nav className={isSticky ? `${style.nav__sticky}` : `${style.nav}`}>
        <a href="/#landing" className={style.logo}>
          <strong className={style.strong}>Recipes</strong>{" "}
          <span className={style.span}>
            for various dietary requirements
          </span>
        </a>
        <ul className={style.ul}>
          { (showNav || isWideScreen) && routes.map((route, index) => (
            <NavLink
              exact
              key={index}
              className={style.link}
              activeStyle={{ color: "#b6956a" }}
              to={route.path}
            >
              <li className={style.li}>{route.name}</li>
            </NavLink>
          ))}
          <button type="button" onClick={() => setReveal(!showNav)} className={style.menuButton}>
            <FontAwesomeIcon className={style.icon} icon={showNav ? "times" : "bars"} />
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;

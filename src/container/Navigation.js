import React from "react";
import { NavLink } from "react-router-dom";
import useSticky from "../hooks/useSticky.js";
import NavStyle from "../assets/sass/navbar.module.scss";
import Style from "../assets/sass/Header.module.scss";
import routes from "../routes.json";

function Navigation({ sticky }) {
  const { isSticky } = useSticky();

  return (
    <div style={{height:'3.6em'}}>
      <nav className={isSticky ? `${NavStyle.nav__sticky}` : `${NavStyle.nav}`}>
        <a href="/#landing" className={`${Style.logo}`}>
          <strong className={`${Style.strong}`}>Recipes</strong>{" "}
          <span className={`${Style.span}`}>
            for various dietary requirements
          </span>
        </a>
        <ul className={NavStyle.ul}>
          {routes.map(route => (
            <NavLink
              exact
              className={NavStyle.link}
              activeStyle={{ color: "#b6956a" }}
              to={route.path}
            >
              <li className={NavStyle.li}>{route.name}</li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;

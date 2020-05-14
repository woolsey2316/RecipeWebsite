import React, { useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import NavStyle from "../assets/sass/navbar.module.scss";
import Style from "../assets/sass/Header.module.scss";
import routes from "../routes.json";

function Navigation() {
  const nav = useRef();
  let location = useLocation();
  console.log(location.pathname);
  const handleScroll = () => {
    console.log(location.pathname);
    const position = location.pathname === "/" ? window.innerHeight : 200;
    if (window.pageYOffset > position) {
      nav.current.className= NavStyle.nav__sticky;
    } else {
      nav.current.className= NavStyle.nav;
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  });
  return (
    <nav ref={nav} className={`${NavStyle.nav}`}>
      <a href="#landing" className={`${Style.logo}`}>
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
  );
}

export default Navigation;

import React from "react";
import style from "../assets/sass/Menu.module.scss";
export default () => {
  return (
    <nav id="menu">
      <ul className={`${style.links}`}>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="landing.html">Landing</a>
        </li>
        <li>
          <a href="generic.html">Generic</a>
        </li>
        <li>
          <a href="elements.html">Elements</a>
        </li>
      </ul>
      <ul className={`${style.actions} ${style.stacked}`}>
        <li>
          <a
            href="#"
            className={`${style.button} ${style.primary} ${style.fit}`}
          >
            Get Started
          </a>
        </li>
        <li>
          <a href="#" className={`${style.button} ${style.fit}`}>
            Log In
          </a>
        </li>
      </ul>
    </nav>
  );
};

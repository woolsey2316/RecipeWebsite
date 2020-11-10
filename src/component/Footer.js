import React from "react";
import style from "../assets/sass/Footer.module.scss";
import "../assets/css/fontawesome-all.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

export default () => {
  return (
    <footer id="footer" className={style.footer}>
      <div className={style.inner}>
        <ul className={style.icons}>
          <li className={style.li}>
            <a href="twitter.com" icon="icon brands alt">
              <FontAwesomeIcon
                className={style.icon}
                icon={["fab", "twitter"]}
              />
            </a>
          </li>
          <li className={style.li}>
            <a href="twitter.com" icon="icon brands alt">
              <FontAwesomeIcon
                className={style.icon}
                icon={["fab", "facebook-f"]}
              />
            </a>
          </li>
          <li className={style.li}>
            <a href="twitter.com" icon="icon brands alt">
              <FontAwesomeIcon
                className={style.icon}
                icon={["fab", "instagram"]}
              />
            </a>
          </li>
          <li className={style.li}>
            <a href="twitter.com" icon="icon brands alt">
              <FontAwesomeIcon
                className={style.icon}
                icon={["fab", "github"]}
              />
            </a>
          </li>
          <li className={style.li}>
            <a href="twitter.com" icon="icon brands alt">
              <FontAwesomeIcon
                className={style.icon}
                icon={["fab", "linkedin-in"]}
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

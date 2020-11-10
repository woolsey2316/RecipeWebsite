import React from "react";
import style from "./assets/sass/Tile.module.scss";
import slugify from 'slugify'

const Tile = ({ title, description, url }) => {
  return (
    <article
      className={style.article}
      style={{ backgroundImage: "url(" + url + ")" }}
      src={style.article}
    >
      <header className={style.major}>
        <h3 className={style.h3}>
          <a href={"/" + slugify(title, {lower: true})} className={style.link}>
            {title}
          </a>
        </h3>
        <p className={style.p}>{description}</p>
      </header>
    </article>
  );
};

export default Tile;

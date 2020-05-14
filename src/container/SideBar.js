import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import style from "../assets/sass/SideBar.module.scss";

export default () => {
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 145) {
      
      document
        .getElementById("SideBar")
        .className=style.brand__magazineContainer__sticky;
    } else {
      document
        .getElementById("SideBar")
        .className=style.brand__magazineContainer;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  });
  return (
    <div id="SideBar" className={style.brand__magazineContainer}>
      <img
        className={style.img}
        src={require("../assets/images/magazineCover.jpg")}
        alt="magazine"
      ></img>
      <a className={style.subscribeButton} href="/">
        Subscribe
      </a>
      <h3 className={style.h3}>Get the Newsletter</h3>
      <p className={style.p}>
        Subscribe to receive triple-tested recipes, expert cooking tips, food
        inspiration, and exclusive offers.
      </p>
      <ContactForm />
    </div>
  );
};

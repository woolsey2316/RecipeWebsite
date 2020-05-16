import React, { useState, useEffect, useRef } from "react";
import ContactForm from "./ContactForm";
import style from "../assets/sass/SideBar.module.scss";

export default () => {
  let ref = useRef();
  const scroll = () => {
    const position = window.pageYOffset;
    console.log("event listener still here");

    if (position > 145) {
      ref.current.className = style.brand__magazineContainer__sticky;
    } else {
      ref.current.className = style.brand__magazineContainer;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scroll, { passive: true });
    console.log("new hook created");
    return () => {
      console.log("removed");
      window.removeEventListener("scroll", scroll);
    };
  });
  console.log("render");
  return (
    <div ref={ref} className={style.brand__magazineContainer}>
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

import React, { useEffect, useRef } from "react";
import ContactForm from "./ContactForm";
import style from "@/styles/sass/SideBar.module.scss";

const Sidebar = () => {
  let ref = useRef();
  const scroll = () => {
    const position = window.pageYOffset;

    if (position > 145) {
      ref.current.className = style.outer__sticky;
    } else {
      ref.current.className = style.outer;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  });
  console.log("render");
  return (
    <div ref={ref} className={style.outer}>
      <img
        className={style.img}
        src="images/magazineCover.jpg"
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

export default Sidebar

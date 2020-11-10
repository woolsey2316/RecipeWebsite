import React from "react";

import Overview from "../component/Overview";
import Footer from "../component/Footer";
import Banner from "../component/Banner";
import Tiles from "../component/Tiles";
import style from "../assets/sass/Home.module.scss";

export const Home = () => {
  return (
    <div id="wrapper" className={style.wrapper}>
      <Banner />
      <Tiles />
      <Overview />
      <Footer />
    </div>
  );
};

export default Home;
